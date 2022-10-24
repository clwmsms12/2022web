<template>
  <div class="container">
    <div class="header">
      <h1>LOGO</h1>
      <div class="gnb">
        <ul>
          <!-- <li><a href="#" @click="$router.push({name:'home'})">HOME</a></li>
          <li><a href="#" @click="$router.push({name:'product'})">PRODUCT</a></li> -->
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/product/0">PRODUCT</router-link></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container">
    <router-view :product="product"></router-view>
  </div>

  <div class="footer">
    Lorem ipsum dolor sit amet.
  </div>
</template>

<script>
import ProductData from "@/data/product.js"

export default {
  data(){
    return{
      product:ProductData,
    }
  }
}
</script>

<style lang="scss">
*{margin: 0;padding: 0;}
ul,li{list-style: none;}
a:link,a:visited{text-decoration: none;}

.header{
  display: flex;background: gray;
  .gnb{
    margin-left: auto;
    ul{
      display: flex;
      height: 100%;
      background: skyblue;
      li{
        height: 100%;
        a{
          padding: 0 20px;
          height: 100%;
          background: pink;
          display: flex;justify-content: center;align-items: center;
        }
      }
    }
  }
}
.footer{
  text-align: center;
  background: pink;
  padding: 70px 0;
}
</style>