<template>
  <div class="modal" :class="{'d-block':mView}">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{banData[mData].name}}</h5>
            <button type="button" class="btn-close" @click="$emit('closeModal')"></button>
          </div>
          <div class="modal-body">
            <img :src="`./images/directs/${banData[mData].src}`" alt="">
            <p>Modal body text goes here.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:["mData","mView","banData"]
}
</script>

<style>

</style>