<template>  <!-- Компонент информации о пользователе для страницы Trending, с ссылкой на его страницу -->
  <div class="user">
        <img @click="$router.push({name:'user', params:{name:user.name}})" :src="this.user.avatar" class="user__picture">
        <div class="user__names">
            <h2 class="user__nickname">{{user.nickName}}</h2>
            <h3 class="user__real-name">{{user.name}}</h3>
        </div>
  </div>
</template>

<script>
export default {
    name:"user-info",
    props:{
        user:{
            required:true,
        }
    },
}
</script>

<style scoped>
    .user{
        display: flex;
        align-items: center;
    }
    .user__picture{
        width:65px;
        height:65px;
        margin-right:15px;
        border-radius: 50%;
        transform: translateY(5px);
    }
    .user__nickname{
        font-weight: 700;
        font-size: 1.3em;
    }
    .user__real-name{
        margin-top:5px;
        font-size:1em;
    }
</style>