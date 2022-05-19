<template>
  <div class="home">
    <div class="header">
      <div class="menu"></div>
    </div>
    <div class="content flex justify-center px-32">
      <div
        class="mobileBox bg-white w-3/12 mx-20 rounded-3xl border-4 border-black mt-20"
      >
        <div class="topBox w-7/12 bg-black mx-auto rounded-b-lg"></div>
        <div class="bottomBox bg-black rounded-b-xl">
          <div class="rounded-full text-white border-2 border-white w-1/12 mx-auto mt-3 p-1 bg-black">O</div>
        </div>
      </div>
      <div
        class="mobileBox bg-white w-3/12 mx-20 rounded-3xl border-4 border-black mt-10"
      >
        <div class="topBox w-7/12 bg-black mx-auto rounded-b-lg"></div>
        <div class="buttoGroup flex justify-around mt-3">
          <font-awesome-icon
            :icon="['fas', 'arrow-left']"
            class="mt-1 text-2xl"
          />
          <p class="text-2xl">領養毛小孩</p>
          <font-awesome-icon :icon="['fas', 'search']" class="mt-1 text-2xl" />
        </div>
        <div class="petGroup bg-blue-500 my-4 mx-8 py-2 flex justify-around rounded-3xl">
          <div class="pet bg-white w-5/12 rounded-xl py-2 text-blue-500 text-xl">狗</div>
          <div class="pet text-white text-xl mt-2 mr-8">貓</div>
        </div>
        <div class="title">
          領養代替購買
        </div>
        <div class="cardGroup">
          <div class="card"></div>
          <div class="card"></div>
        </div>
         <div class="bottomBox bg-black rounded-b-xl">
          <div class="rounded-full text-white border-2 border-white w-1/12 mx-auto mt-3 p-1 bg-black">O</div>
        </div>
      </div>
      <div
        class="mobileBox bg-white w-3/12 mx-20 rounded-3xl border-4 border-black"
      >
        <div class="topBox w-7/12 bg-black mx-auto rounded-b-lg">
        </div>
         <div class="bottomBox bg-black rounded-b-xl">
          <div class="rounded-full text-white border-2 border-white w-1/12 mx-auto mt-3 p-1 bg-black">O</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobileBox {
  height: 750px;
  position: relative;
}
.bottomBox{
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 60px;
}
.topBox {
  height: 15px;
}

.menu {
  height: 100px;
}
</style>

<script>
export default {
  name: 'HomeView'
}
</script>
