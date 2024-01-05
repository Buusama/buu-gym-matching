<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Thêm mới dịch vụ</h2>
  </div>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin dịch vụ -->
      <div class="intro-y box lg:mt-5">
        <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 class="font-medium text-base mr-auto">Thông tin dịch vụ</h2>
        </div>
        <div class="p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <div class="flex flex-col-reverse xl:flex-row flex-col">
            <div class="flex-1 mt-6 xl:mt-0">
              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6">
                  <div>
                    <label for="create-member-form-1" class="form-label">Tên dịch vụ</label>
                    <input v-model="namePackage" type="text" class="form-control" placeholder="Tên dịch vụ" />
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label">Loại dịch vụ</label>
                    <select v-model="type" class="form-select">
                      <option value="1">Gói Dịch vụ Massage Trị liệu</option>
                      <option value="2">Gói Workout Plan</option>
                    </select>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label">Dịch vụ miễn phí</label>
                    <div class="flex flex-col sm:flex-row ">
                      <div class="form-check mr-2">
                        <input v-model="freeServices" id="checkbox-switch-4" class="form-check-input" type="checkbox"
                          value="1" />
                        <label class="form-check-label" for="checkbox-switch-4">Khăn</label>
                      </div>
                      <div class="form-check mr-2 sm:mt-0">
                        <input v-model="freeServices" id="checkbox-switch-5" class="form-check-input" type="checkbox"
                          value="2" />
                        <label class="form-check-label" for="checkbox-switch-5">Nước</label>
                      </div>
                      <div class="form-check mr-2 sm:mt-0">
                        <input v-model="freeServices" id="checkbox-switch-6" class="form-check-input" type="checkbox"
                          value="3" />
                        <label class="form-check-label" for="checkbox-switch-6">Vé xe</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 2xl:col-span-6">
                  <div class="mt-3 2xl:mt-0">
                    <label for="create-member-form-4" class="form-label">Giá dịch vụ (VND)</label>
                    <input v-model="price" type="number" step="50000" class="form-control" placeholder="Giá dịch vụ" />
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label">Kiểu sử dụng</label>
                    <div class="grid grid-cols-3 gap-4 sm:flex-row">
                      <select v-model="useType" class="form-select mr-5 col-span-2">
                        <option value="1">Theo ngày</option>
                        <option value="2">Theo lần quẹt</option>
                        <option value="3">Theo tháng</option>
                      </select>
                      <input v-model="usageLimit" type="text" class="form-control" placeholder="Số lượng" />
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label">Trạng thái</label>
                    <div class="form-check">
                      <input v-model="status" id="checkbox-switch-7" class="form-check-switch form-check-input"
                        type="checkbox" />
                      <label class="form-check-label" for="checkbox-switch-7">Hoạt động</label>
                    </div>
                  </div>
                </div>
                <div class="col-span-12">
                  <div class="mt-3">
                    <label for="create-member-form-7" class="form-label">Ghi chú</label>
                    <textarea v-model="note" rows="5" class="form-control" placeholder="Ghi chú"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 class="font-medium text-base mr-auto">Thông tin hoa hồng</h2>
        </div>
        <div class="p-5">
          <div class="flex flex-col-reverse xl:flex-row flex-col">
            <div class="flex-1 mt-6 xl:mt-0">
              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6">
                  <div>
                    <label for="create-member-form-1" class="form-label">Hoa hồng người bán</label>
                    <div class="input-group">
                      <div class="input-group-text">%</div>
                      <input v-model="sellerCommission" type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label">Hoa hồng khách giới thiệu</label>
                    <div class="input-group">
                      <div class="input-group-text">%</div>
                      <input v-model="referralCommission" type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 2xl:col-span-6">
                  <div class="mt-3 2xl:mt-0">
                    <label for="create-member-form-4" class="form-label">Hoa hồng nhân viên giới thiệu</label>
                    <div class="input-group">
                      <div class="input-group-text">%</div>
                      <input v-model="staffCommission" type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label">Chiếu khấu hoa hồng</label>
                    <div class="form-check mt-2 ">
                      <input v-model="discount" id="checkbox-switch-8" class="form-check-switch form-check-input"
                        type="checkbox" />
                      <label class="form-check-label" for="checkbox-switch-8">Cho phép chiết khấu</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-5">
          <button @click="createPackageFunc" type="button" class="btn btn-primary w-20 mt-3">
            Lưu
          </button>
          <router-link :to="{ name: 'list-packages' }" tag="a" class="btn btn-outline-secondary ml-3 w-20 mt-3">
            Hủy
          </router-link>
        </div>
      </div>
      <!-- END: Thông tin dịch vụ -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { createPackage } from '@/api/packages';
import { CreatePackageRequest } from '@/api/packages/interfaces';
import { ref } from 'vue';
import { showMessage } from "@/common/utils/helpers";
import router from "@/router";


const namePackage = ref('');
const type = ref(0);
const freeServices = ref([]);
const price = ref(0);
const useType = ref(0);
const usageLimit = ref(0);
const status = ref(1);
const note = ref('');
const sellerCommission = ref(0);
const referralCommission = ref(0);
const staffCommission = ref(0);
const discount = ref(false);

const createPackageFunc = async () => {
  const data = {
    name: namePackage.value,
    price: price.value,
    type: type.value,
    usage_type: useType.value,
    usage_limit: usageLimit.value,
    free_service: freeServices.value,
    status: Number(status.value),
    note: note.value,
    commission_for_sellers: Number(sellerCommission.value),
    referral_commission: Number(referralCommission.value),
    employee_referral_commission: Number(staffCommission.value),
    commission_status: Number(discount.value),
  } as CreatePackageRequest;
  const res = await createPackage(data);
  if (res) {
    showMessage('Thêm mới dịch vụ thành công', true);
    router.push({ name: 'list-packages' });
  }

};


</script>
