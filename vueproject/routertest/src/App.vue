<template>
  <div class="wrap">
    <div class="container d-flex justify-content-between">
      <h1>LOGO</h1>
      <ul class="nBar">
        <li><router-link to="/">hoem</router-link></li>
        <li><router-link to="/company">company</router-link></li>
        <li><router-link to="/product">product</router-link></li>
        <li><router-link to="/online">online</router-link></li>
        <li><router-link to="/community">community</router-link></li>
      </ul>
    </div>
  </div>

  <router-view/>
</template>

<style lang="scss">
  *{margin: 0;padding: 0;}
  ul,li{list-style: none;}
  a:link,a:visited{text-decoration: none;}

  .wrap{
    .nBar{
      display: flex;
      li{
        padding: 0 10px;height: 100%;
        display: flex;justify-content: center;align-items: center;
      }
    }
  }
</style>
