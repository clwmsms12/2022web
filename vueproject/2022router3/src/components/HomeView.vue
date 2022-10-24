<template>
    <div class="mainVisual">
        mainvisual
    </div>
    <div class="row">
        <div class="col-md-6">
            <ul>
                <li v-for="(item,i) in 4" :key="i">
                    <a href="#" @click="$router.push({name:'product',params:{product:`${i}`}})">
                        {{product[i].name}}
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-md-6"></div>
    </div>
</template>

<script>
export default {
    props:['product']
}
</script>

<style>
    .mainVisual{
        height: 200px;
        background: orange;
        display: flex;justify-content: center;align-items: center;
    }
</style>