<template>
  <div>helloWorld</div>
  <button class="bg-red-500 p-4">getApi</button>
  <div v-if="viewData.length" class="content bg-white grid grid-cols-3">
  <div class="card" v-for="(item, i) in viewData" :key="i">
 <ul>
   <li>age{{item.animal_age}}</li>
   <li>{{item.animal_bacterin}}</li>
   <li>{{item.animal_bodytype}}</li>
   <li>{{item.animal_colour}}</li>
   <li>{{item.animal_createtime}}</li>
   <li>{{item.animal_animal_kind}}</li>
   <li>{{item.animal_animal_place}}</li>
   <li>{{item.animal_animal_sterilization}}</li>
   <li>{{item.shelter_address}}</li>
   <li>{{item.shelter_name}}</li>
   <li>{{item.shelter_tel}}</li>
  </ul>
  </div>
  </div>
<!-- <PageCom></PageCom>
<br> -->
 <VueTailwindPagination
        :current="currentPage"
        :total="total"
        :per-page="perPage"
        @page-changed="currentPage = $event"
       />
</template>
<script>
import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
import { onMounted, inject, ref } from 'vue'
export default {
  components: {
    VueTailwindPagination
  },
  setup () {
    const data = ref([])
    let newData = []
    const viewData = ref([])
    const currentPage = ref(1)
    const perPage = ref(12)
    const total = ref(120)
    const axios = inject('axios') // inject axios
    function getApi () {
      axios
        .get('https://data.coa.gov.tw/api/v1/AnimalRecognition')
        .then((res) => {
          data.value = res.data.Data
          console.log('data ref', data.value)
          filterData()
        })
    }
    const timeNow = new Date().getUTCFullYear()
    console.log(timeNow)
    const tine = new Date('2022/5/12').getUTCFullYear()
    console.log(tine)
    function filterData () {
      newData = data.value.filter(item => new Date(item.animal_createtime).getUTCFullYear() === timeNow && item.album_file)
      console.log('filter', newData)
      viewData.value = newData.slice(0, 12)
      console.log('viewData ', viewData.value)
    }
    onMounted(() => {
      getApi()
    })
    return {
      viewData,
      currentPage,
      perPage,
      total
    }
  }
}
</script>
