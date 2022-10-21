<template>
  <div class="wrap">
    <div class="container d-flex justify-content-between">
      <h1>logo</h1>
      <div class="gnb">
        <ul class="d-flex" >
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/company">company</router-link></li>
          <li><router-link to="/product">product</router-link></li>
          <li><router-link to="/online">online</router-link></li>
          <li><router-link to="/comm">community</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  *{margin: 0;padding: 0;}
  ul,li{list-style: none;}
  a:link,a:visited{
    text-decoration: none;
  }

  .wrap{
    background: skyblue;
  }
  .gnb {
    ul{height: 100%;}
    li{
     

      a{

        height: 100%;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;

      }


      .router-link-active{
        background: blue;
      }
    }
  }






  .pink{background: pink;}
</style>