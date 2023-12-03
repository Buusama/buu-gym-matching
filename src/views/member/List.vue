<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Danh sách hội viên</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <router-link :to="{ name: 'create-member' }" tag="a" class="btn btn-primary shadow-md mr-2">
        Thêm mới hội viên
      </router-link>
      <!-- <Dropdown class="ml-auto sm:ml-0">
        <DropdownToggle class="btn px-2 box">
          <span class="w-5 h-5 flex items-center justify-center">
            <PlusIcon class="w-4 h-4" />
          </span>
        </DropdownToggle>
        <DropdownMenu class="w-40">
          <DropdownContent>
            <DropdownItem>
              <FilePlusIcon class="w-4 h-4 mr-2" /> New Category
            </DropdownItem>
            <DropdownItem> <UserPlusIcon class="w-4 h-4 mr-2" /> New Group </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown> -->
    </div>
  </div>
  <!-- BEGIN: HTML Table Data -->
  <div class="intro-y box p-5 mt-5">
    <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
      <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
        <div class="sm:flex items-center sm:mr-4">
          <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Field</label>
          <select id="tabulator-html-filter-field" v-model="filter.field"
            class="form-select w-full sm:w-32 2xl:w-full mt-2 sm:mt-0 sm:w-auto">
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="remaining_stock">Remaining Stock</option>
          </select>
        </div>
        <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
          <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Type</label>
          <select id="tabulator-html-filter-type" v-model="filter.type" class="form-select w-full mt-2 sm:mt-0 sm:w-auto">
            <option value="like" selected>like</option>
            <option value="=">=</option>
            <option value="<">&lt;</option>
            <option value="<=">&lt;=</option>
            <option value=">">></option>
            <option value=">=">>=</option>
            <option value="!=">!=</option>
          </select>
        </div>
        <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
          <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Value</label>
          <input id="tabulator-html-filter-value" v-model="filter.value" type="text"
            class="form-control sm:w-40 2xl:w-full mt-2 sm:mt-0" placeholder="Search..." />
        </div>
        <div class="mt-2 xl:mt-0">
          <button id="tabulator-html-filter-go" type="button" class="btn btn-primary w-full sm:w-16" @click="onFilter">
            Go
          </button>
          <button id="tabulator-html-filter-reset" type="button"
            class="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1" @click="onResetFilter">
            Reset
          </button>
        </div>
      </form>
      <div class="flex mt-5 sm:mt-0">
        <button id="tabulator-print" class="btn btn-outline-secondary w-1/2 sm:w-auto mr-2" @click="onPrint">
          <PrinterIcon class="w-4 h-4 mr-2" /> Print
        </button>
        <Dropdown class="w-1/2 sm:w-auto">
          <DropdownToggle class="btn btn-outline-secondary w-full sm:w-auto">
            <FileTextIcon class="w-4 h-4 mr-2" /> Export
            <ChevronDownIcon class="w-4 h-4 ml-auto sm:ml-2" />
          </DropdownToggle>
          <DropdownMenu class="w-40">
            <DropdownContent>
              <DropdownItem @click="onExportCsv">
                <FileTextIcon class="w-4 h-4 mr-2" /> Export CSV
              </DropdownItem>
              <DropdownItem @click="onExportJson">
                <FileTextIcon class="w-4 h-4 mr-2" /> Export JSON
              </DropdownItem>
              <DropdownItem @click="onExportXlsx">
                <FileTextIcon class="w-4 h-4 mr-2" /> Export XLSX
              </DropdownItem>
              <DropdownItem @click="onExportHtml">
                <FileTextIcon class="w-4 h-4 mr-2" /> Export HTML
              </DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    <div class="overflow-x-auto scrollbar-hidden">
      <div id="tabulator" ref="tableRef" class="mt-5 table-report table-report--tabulator"></div>
    </div>
  </div>
  <!-- END: HTML Table Data -->
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import xlsx from 'xlsx'
import { createIcons, icons } from 'lucide'
import Tabulator from 'tabulator-tables'
import dom from '@left4code/tw-starter/dist/js/dom'
import { upperCaseValue } from '@/common/utils/helpers'
import { getMembers } from '@/api/members'
import router from '@/router'
const tableRef = ref()
const tabulator = ref()
const filter = reactive({
  field: 'name',
  type: 'like',
  value: '',
})
const tableData = reactive({
  totalRecordCount: 0,
  sortable: {
    order: 'asc',
    sort: 'name',
  },
  rows: [],
})
const imageAssets = import.meta.globEager(`/src/assets/images/*.{jpg,jpeg,png,svg}`)

const RequestFunc = async (url, config, params) => {
  let last_page = 0
  let data = []
  const offset = (params.page - 1) * params.size
  const limit = params.size
  const order = params.sorters[0] ? params.sorters[0].field : 'updated_at'
  const sort = params.sorters[0] ? params.sorters[0].dir : 'desc'

  await getMembers({
    skip: offset,
    take: limit,
    sort_by: order,
    sort_enum: upperCaseValue(sort),
  }).then((response) => {
    last_page = response.meta.pageCount
    data = response.data
  })
  return new Promise((resolve, reject) => {
    resolve({
      last_page,
      data,
    })
    reject(new Error('Error'))
  })
}

const initTabulator = () => {
  tabulator.value = new Tabulator(tableRef.value, {
    ajaxURL: 'linhlinhsoma',
    ajaxFiltering: true,
    ajaxSorting: true,
    ajaxRequestFunc: RequestFunc,
    printAsHtml: true,
    printStyled: true,
    pagination: 'remote',
    paginationSize: 10,
    paginationSizeSelector: [10, 20, 30, 40],
    layout: 'fitColumns',
    responsiveLayout: 'collapse',
    placeholder: 'No matching records found',
    columns: [
      {
        formatter: 'responsiveCollapse',
        width: 40,
        minWidth: 30,
        hozAlign: 'center',
        resizable: false,
        headerSort: false,
      },

      // For HTML table
      {
        title: 'TÊN HỘI VIÊN',
        minWidth: 180,
        responsive: 0,
        field: 'name',
        vertAlign: 'middle',
        print: false,
        download: false,
        formatter(cell) {
          return `
          <div class="flex items-center lg:justify-center">
            <div class="intro-x w-10 h-10 image-fit">
              <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="${cell.getData().avatar
            }">
            </div>
            <div class="intro-x ml-5">
              <div class="font-medium whitespace-nowrap">${cell.getData().name}</div>
              <div class="text-slate-500 text-xs whitespace-nowrap">${cell.getData().birth_date
            }</div>
            </div>
          </div>`
        },
      },
      {
        title: 'SỐ ĐIỆN THOẠI',
        minWidth: 180,
        field: 'phone',
        hozAlign: 'center',
        vertAlign: 'middle',
        print: false,
        download: false,
        formatter(cell) {
          return `<div>
                  <div class="font-medium whitespace-nowrap">${cell.getData().phone}</div>
              </div>`
        },
      },
      {
        title: 'GIỚI TÍNH',
        field: 'gender',
        minWidth: 100,
        hozAlign: 'center',
        vertAlign: 'middle',
        print: false,
        download: false,
        formatter(cell) {
          return `<div class="flex items-center lg:justify-center ${cell.getData().gender == 1 ? 'text-success' : cell.getData().gender == 2 ? 'text-danger' : 'text-info'
            }">
                ${cell.getData().gender == 1 ? 'Nam' : cell.getData().gender == 2 ? 'Nu' : 'Khac'}
              </div>`
        },
      },
      {
        title: 'ĐỊA CHỈ',
        minWidth: 150,
        field: 'address',
        hozAlign: 'center',
        vertAlign: 'middle',
        print: false,
        download: false,
        formatter(cell) {
          return `<div>
                  <div class="font-medium whitespace-nowrap">${cell.getData().address
            }</div>
              </div>`
        },
      },
      {
        title: 'STATUS',
        minWidth: 200,
        field: 'status',
        hozAlign: 'center',
        vertAlign: 'middle',
        print: false,
        download: false,
        formatter(cell) {
          return `<div class="flex items-center lg:justify-center ${cell.getData().status ? 'text-success' : 'text-danger'
            }">
                <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> ${cell.getData().status ? 'Active' : 'Inactive'
            }
              </div>`
        },
      },
      {
        title: 'ACTIONS',
        minWidth: 100,
        field: 'actions',
        responsive: 1,
        hozAlign: 'center',
        vertAlign: 'middle',
        print: false,
        download: false,
        formatter(cell) {
          const a = dom(`<div class="flex lg:justify-center items-center">
                <a class="flex items-center mr-3" href="javascript:;">
                  <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> Edit
                </a>
              </div>`)
          dom(a).on('click', function () {
            // On click actions alert cell.getData().id
            // alert(cell.getData().id);
            router.push({
              name: 'edit-member',
              params: {
                id: cell.getData().id,
              },
            })
          })

          return a[0]
        },
      },

      // For print format
      {
        title: 'TÊN HỘI VIÊN',
        field: 'name',
        visible: false,
        print: true,
        download: true,
      },
      {
        title: 'SỐ ĐIỆN THOẠI',
        field: 'phone',
        visible: false,
        print: true,
        download: true,
      },
      {
        title: 'ĐỊA CHỈ',
        field: 'address',
        visible: false,
        print: true,
        download: true,
      },
      {
        title: 'STATUS',
        field: 'status',
        visible: false,
        print: true,
        download: true,
        formatterPrint(cell) {
          return cell.getValue() ? 'Active' : 'Inactive'
        },
      },
    ],
    renderComplete() {
      createIcons({
        icons,
        'stroke-width': 1.5,
        nameAttr: 'data-lucide',
      })
    },
  })
}

// Redraw table onresize
const reInitOnResizeWindow = () => {
  window.addEventListener('resize', () => {
    tabulator.value.redraw()
    createIcons({
      icons,
      'stroke-width': 1.5,
      nameAttr: 'data-lucide',
    })
  })
}

// Filter function
const onFilter = () => {
  tabulator.value.setFilter(filter.field, filter.type, filter.value)
}

// On reset filter
const onResetFilter = () => {
  filter.field = 'name'
  filter.type = 'like'
  filter.value = ''
  onFilter()
}

// Export
const onExportCsv = () => {
  tabulator.value.download('csv', 'data.csv')
}

const onExportJson = () => {
  tabulator.value.download('json', 'data.json')
}

const onExportXlsx = () => {
  const win = window
  win.XLSX = xlsx
  tabulator.value.download('xlsx', 'data.xlsx', {
    sheetName: 'Products',
  })
}

const onExportHtml = () => {
  tabulator.value.download('html', 'data.html', {
    style: true,
  })
}

// Print
const onPrint = () => {
  tabulator.value.print()
}

onMounted(() => {
  initTabulator()
  reInitOnResizeWindow()
})
</script>
