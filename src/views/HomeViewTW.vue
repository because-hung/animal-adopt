<template>
  <div class="bg-gray-200 container mx-auto">
    <div class="banner flex flex-col justify-between">
      <div class="menu flex justify-between px-36">
        <div class="logo">
          <img src="../assets/bgr.png" class="ml-12 my-4" alt="" />
        </div>
        <ul class="flex mr-12 items-center">
          <li class="px-16">
            <router-link to="./Adopt">
            <h3>去領養</h3>
            <div class="colbox"></div>
            </router-link>
          </li>
          <li class="px-16">
            <h3>寵物遺失</h3>
            <div class="colbox"></div>
          </li>
          <li class="px-16">
            <h3>找收容所</h3>
            <div class="colbox"></div>
          </li>
        </ul>
      </div>
      <div
        class="slogan text-white mb-20 ml-12 self-start text-5xl py-2 px-6 bg-gray-300 bg-opacity-40"
      >
        <ul>
          <li class="my-6">一</li>
          <li class="my-6">起</li>
          <li class="my-6">認</li>
          <li class="my-6">養</li>
          <li class="my-6">吧</li>
        </ul>
      </div>
    </div>
    <div
      class="section bg-orange-100 px-16 py-8 grid grid-cols-3 justify-items-center"
    >
      <div class="boxImg mx-2 flex items-center">
        <img class="rounded-full" src="../assets/pet07.jpg" alt="" />
        <div class="comment ml-5">
          <p class="petSlogan text-xl leading-relaxedrelaxed">領養前請謹慎考慮<br />自我評估自身狀況</p>
          <p class="mt-12 text-right text-2xl">---<font-awesome-icon :icon="['fas', 'paw']" class="mx-1" />汪</p>
        </div>
      </div>
      <div class="boxImg mx-2 flex items-center">
        <img class="rounded-full" src="../assets/pet12.jpg" alt="" />
        <div class="comment ml-5">
          <p class="petSlogan text-xl leading-relaxed">領養前請先做足功課<br />具備相關寵物知識</p>
          <p class="mt-12 text-right text-2xl">---<font-awesome-icon :icon="['fas', 'paw']" class="mx-1" />喵</p>
        </div>
      </div>
      <div class="boxImg mx-2 flex items-center">
        <img class="rounded-full" src="../assets/pet11.jpg" alt="" />
        <div class="comment ml-5">
          <p class="petSlogan text-xl leading-relaxed">鼓勵領養代替購買<br />但重點是"不棄養"</p>
          <p class="mt-12 text-right text-2xl">---<font-awesome-icon :icon="['fas', 'paw']" class="mx-1" />汪</p>
        </div>
      </div>
    </div>
    <div class="content bg-white">
      <div class="info-1 grid grid-cols-12 mx-auto">
        <div class="box col-span-7 flex flex-col justify-between px-8 py-4">
          <h2 class="title text-4xl py-3 font-bold bg-red-700 text-white">
            領養代替購買
          </h2>
          <div class="info text-2xl font-bold">
            <p class="leading-loose">
              領養的意義，是放下自己的喜好 <br />
              成全一個無依無靠的生命，因為你，重見希望<br />
            </p>
          </div>
          <div class="btn mt-4 flex justify-between">
            <div class="line flex items-center">
              <div class="lineBox bg-red-600 ml-8"></div>
              <div class="tr"></div>
            </div>
            <div class="btnGrounp mr-4">
              <button class="bg-yellow-400 rounded-2xl mx-2 px-6 py-4 text-xl">
                去領養
              </button>
              <button class="bg-yellow-400 rounded-2xl mx-4 px-6 py-4 text-xl">
                找收容所
              </button>
            </div>
          </div>
        </div>
        <div class="box col-span-5">
          <img class="w-full" src="../assets/pet03.jpg" alt="" />
        </div>
      </div>
      <div class="info-2 grid grid-cols-12 pt-4">
        <div class="box col-span-5">
          <img class="w-full h-full" src="../assets/pet05.jpg" alt="" />
        </div>
        <div class="box col-span-7 flex flex-col justify-between px-8 py-4">
          <h2 class="title text-4xl py-3 font-bold bg-red-700 text-white">
            寵物遺失資訊
          </h2>
          <div class="info text-2xl font-bold">
            <p class="leading-loose">
              寵物是我們的家人，家人不見 <br />
              一定非常擔心，快來找尋你的寵物 <br />
            </p>
          </div>
          <div class="btn mt-4 flex justify-between">
            <div class="line flex items-center">
              <div class="lineBox bg-red-600 ml-8"></div>
              <div class="tr"></div>
            </div>
            <div class="btnGrounp mr-4">
              <button class="bg-yellow-400 rounded-2xl mx-2 px-6 py-4 text-xl">
                找遺失寵物
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h2 class="title">養寵物須知</h2>
      <font-awesome-icon :icon="['fas', 'paw']" class="mx-4 text-2xl" />swiper
    </div>
    <div class="footer">
      <div class="text-center leading-7 bg-green-50 opacity-70">
        <p>
          © Copyright 2022 because-hung <br />
          資料來源皆來自 內政部 網站 <br />
          圖片來源皆來自 網路 <br />
          僅個人作品練習，無任何商業用途
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
li {
  list-style: none;
  position: relative;
}
h3 {
  position: absolute;
  z-index: 99;
}
.colbox {
  content: ""; /*沒用到仍然要寫，雙引號內容留空*/
  z-index: 1;
  width: 15px; /*設定長方形寬度*/
  height: 22px; /*設定長方形高度*/
  background: lightgreen; /*設定長方形顏色*/
  position: absolute; /*設定與<div>區塊的相對位置*/
  left: 55px; /*從<div>區塊左上角起算，與左邊距離為0，即靠左的意思*/
  top: 0px; /*從<div>區塊左上角起算，與上方距離為100%時才開始產生這個長方形，因此長方形會在整塊<div>區塊的下方*/
}
.logo {
  width: 50px;
}
.lineBox {
  width: 100px;
  height: 20px;
  animation: changeLong 1s ease-out 0s infinite;
}
.tr {
  border-width: 22px;
  border-color: transparent transparent transparent red;
}
@keyframes changeLong {
  from {
    width: 100px;
  }
  to {
    width: 350px;
  }
}
.banner {
  background-image: url("../assets/pet01.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
}
.box > img {
  height: 100%;
}
.boxImg > img {
  width: 200px;
  height: 200px;
}
</style>
