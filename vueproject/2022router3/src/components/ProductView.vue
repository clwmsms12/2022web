<template>
    <div class="visual">
        product
    </div>

    <div class="row">
        <div class="col-md-6">
            <img :src="product[$route.params.product].url" alt="" class="img">
        </div>
        <div class="col-md-6 p-3">
            <div @click="$router.back()" class="btn mb-3">Go back</div>
            <h3>
                {{product[$route.params.product].name}}
            </h3>
            <p>
                {{product[$route.params.product].content}}
            </p>
        </div>
    </div>

    <div class="row">
        <div class="col-md-3 p-3" v-for="(item,i) in 4" :key="i">
            <img :src="product[i].url" alt="">
        </div>
    </div>
  <!-- {{product[$route.params.product].name}} -->
</template>

<script>
export default {
    props:['product']
}
</script>

<style lang="scss">
.visual{
    height: 100px;
    background: skyblue;
    display: flex;justify-content: center;align-items: center;
}
.img{width: 100%;}
.btn{
    height: 40px;
    display: inline-flex;justify-content: center;align-items: center;
    padding: 0 20px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    background: green;
    &:hover{background: orange;}
}
</style>