<template>
  <web-banner :banData="bData" @modalOpen="modalView"></web-banner>

  <div class="start" :class="{end:mView}">

    <web-modal :mView="mView" :mData="mData" :banData="bData" @closeModal="mView=false"></web-modal>

  </div>
</template>

<script>
// import "./assets/style.css"
import bData from "@/data/directs.js";
import WebBanner from "@/components/WebBanner.vue";
import WebModal from "@/components/WebModal.vue";
export default {
  components: {
    WebBanner,
    WebModal,
  },
  data() {
    return {
      bData: bData,
      mView:false,
      mData:1,
    };
  },
  methods:{
    modalView(num,name){
      console.log(num,name);
      this.mView = true;
      this.mData = num;
    }
  }
};
</script>

<style>
@import url(./assets/style.css);
.start{
  opacity: 0;
  transition: 0.5s;
}
.start.end{
  opacity: 1;
}
</style>