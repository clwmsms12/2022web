<template>
  <div class="container">
    <div class="row">
      <div class="col-6 col-md-3 col-lg" v-for="(item,i) in banData" :key="i">
        <img :src="`./images/directs/${item.src}`" alt="" class="w-100">
        <div class="txt text-center" @click="$emit('modalOpen',i,item.name)">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:["banData"]
}
</script>

<style>

</style>