<template>
  <div>
    <navbar class="navbar"> <!-- Навигационный блок (с кнопкой логотипом) -->
      <a class="navbar__logo-link" @click='$router.push("/")'>
          <img class="navbar__logo-img" src="@/../img/LogoDark.png">
      </a>
    </navbar>
    <p class="stickyhack"></p> <!-- элемент для добавления отступа от навигационного блока -->
    <router-view></router-view> <!-- Рендер нужной нам страницы через router -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
  
<style scoped>
  .navbar{
    width: 100vw;
    display: flex;
    position: fixed;
    top:0;
    z-index:20;
    padding: 10px 0px 10px 15px;
    background-color: rgb(35, 37, 37);
    border-bottom: 1px solid white;
    box-shadow: 0 4px 2px -2px rgb(255, 255, 255);
  }
  .navbar__logo-img{
    width:222px;
    height:54px;
  }
  .stickyhack{
    margin-top:78px;
  }
</style>
