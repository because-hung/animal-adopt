<template>
  <div class="about">
    <h1 class="text-blue-600">This is an about page</h1>
  </div>
</template>
<script>
import { onMounted, inject } from 'vue'
export default {
  setup () {
    const axios = inject('axios') // inject axios
    function getApi () {
      axios
        .get('https://data.coa.gov.tw/api/v1/AnimalRecognition')
        .then((res) => {
          console.log('data', res.data)
        })
    }
    onMounted(() => {
      getApi()
    })
    return {

    }
  }
}
</script>
