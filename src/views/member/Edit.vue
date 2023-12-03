<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Chỉnh sửa thông tin hội viên</h2>
  </div>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin hội viên -->
      <div class="intro-y box lg:mt-5">
        <div
          class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="font-medium text-base mr-auto">Thông tin hội viên</h2>
        </div>
        <div class="p-5">
          <div class="flex flex-col-reverse xl:flex-row flex-col">
            <div class="flex-1 mt-6 xl:mt-0">
              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6">
                  <div>
                    <label for="create-member-form-1" class="form-label"
                      >Tên hội viên</label
                    >
                    <input
                      v-model="name"
                      type="text"
                      class="form-control"
                      placeholder="Tên hội viên"
                    />
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label">Giới tính</label>
                    <select v-model="gender" class="form-select">
                      <option value="1">Nam</option>
                      <option value="2">Nữ</option>
                      <option value="3">Khác</option>
                    </select>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-3" class="form-label">Ngày sinh</label>
                    <div class="relative form-control">
                      <div
                        class="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                      >
                        <CalendarIcon class="w-4 h-4" />
                      </div>
                      <Litepicker
                        v-model="date"
                        :options="{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                          format: 'YYYY-MM-DD',
                        }"
                        class="form-control pl-12"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 2xl:col-span-6">
                  <div class="mt-3 2xl:mt-0">
                    <label for="create-member-form-4" class="form-label"
                      >Số điện thoại</label
                    >
                    <input
                      v-model="phone"
                      type="text"
                      class="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-5" class="form-label">Email</label>
                    <input
                      v-model="email"
                      type="text"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-6" class="form-label"
                      >Trạng thái hoạt động</label
                    >
                    <select v-model="status" class="form-select">
                      <option value="1">Bình thường</option>
                      <option value="3">Chưa thanh toán</option>
                    </select>
                  </div>
                </div>
                <div class="col-span-12">
                  <div class="mt-3">
                    <label for="create-member-form-7" class="form-label">Địa chỉ</label>
                    <textarea
                      v-model="address"
                      rows="8"
                      class="form-control"
                      placeholder="Địa chỉ"
                    >
                    </textarea>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-primary w-20 mt-3"
                @click="updateMemberFunc"
              >
                Lưu
              </button>
            </div>
            <div class="w-52 mx-auto xl:mr-0 xl:ml-6">
              <label for="create-member-form-8" class="form-label">Avatar</label>

              <div
                class="border-2 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5"
              >
                <div class="h-40 relative image-fit mx-auto">
                  <img
                    v-if="newImage"
                    class="rounded-md cursor-pointer zoom-in"
                    alt=""
                    :src="newImage"
                  />
                  <Tippy
                    v-if="newImage"
                    tag="div"
                    content="Remove this profile photo?"
                    class="cursor-pointer w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                  >
                    <xIcon class="w-4 h-4" @click="removePreview()" />
                  </Tippy>
                </div>
                <div class="mx-auto cursor-pointer relative mt-5">
                  <button type="button" class="btn btn-primary w-full">
                    Chọn hình ảnh
                  </button>
                  <input
                    id="form-avatar"
                    type="file"
                    class="w-full h-full top-0 left-0 absolute opacity-0"
                    @change="previewFiles($event)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Thông tin hội viên -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getDetailMember, editMember } from '@/api/members'
import { showMessage } from '@/common/utils/helpers'
import router from '@/router'
import { CreateMemberRequest } from '@/api/members/interfaces/create'

const paramId = router.currentRoute.value.params.id.toString()
const select = ref('1')
const newImage = ref('')
const newImageFile = ref(null)
const name = ref('')
const gender = ref('M')
const phone = ref('')
const email = ref('')
const status = ref(1)
const address = ref('')
const date = ref('')
const existingImage = ref('')
onMounted(() => {
  getMemberData()
})
const getMemberData = async () => {
  const res = await getDetailMember(paramId)

  name.value = res.data.name
  gender.value = res.data.gender
  phone.value = res.data.phone
  email.value = res.data.email
  status.value = res.data.status
  address.value = res.data.address
  date.value = res.data.birth_date

  newImage.value = res.data.avatar
  existingImage.value = res.data.avatar
}
const previewFiles = (event: any) => {
  var input = event.target
  if (input.files) {
    var reader = new FileReader()
    reader.onload = (e: any) => {
      newImage.value = e.target.result
    }
    reader.readAsDataURL(input.files[0])
    newImageFile.value = input.files[0]
  }
}

const removePreview = () => {
  newImage.value = null
  const input = document.getElementById('form-avatar') as HTMLInputElement
  input.value = ''
  newImageFile.value = null
}
const updateMemberFunc = async () => {
  const data = {
    name: name.value,
    gender: gender.value,
    avatar: newImageFile.value,
    phone: phone.value,
    email: email.value,
    status: status.value,
    address: address.value,
    birth_date: date.value,
  } as CreateMemberRequest
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('gender', data.gender)
  if (newImage.value != existingImage.value) {
    formData.append('avatar', data.avatar)
  } else if (newImage.value != null) {
    formData.append('avatar', newImage.value)
  } else {
    formData.append('avatar', '')
  }
  formData.append('phone', data.phone)
  formData.append('email', data.email)
  formData.append('status', data.status.toString())
  formData.append('address', data.address)
  formData.append('birth_date', data.birth_date)

  const res = await editMember(paramId, formData)
  if (res) {
    showMessage('Chỉnh sửa thông tin hội viên thành công', true)
    router.push({ name: 'list-members' })
  }
}
</script>
