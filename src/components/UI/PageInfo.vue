<template>   <!-- Компонент информации о пользователе для страницы User/nickname -->
  <div class="user">
        <div class="user__header">
            <img :src="this.user.avatarLarger" class="user__picture">
            <div class="user__names">
                <h2 class="user__nickname">{{user.uniqueId}}</h2>
                <h3 class="user__real-name">{{user.nickname}}</h3>
            </div>
        </div>
         
        <div class="user__stats">
            <p><strong class="user__stats-number">{{normalizeCount(stats.followingCount)}}</strong> Подписки </p>
            <p><strong class="user__stats-number">{{normalizeCount(stats.followerCount)}}</strong> Подписчики </p>
            <p><strong class="user__stats-number">{{normalizeCount(stats.heartCount)}}</strong> Лайки </p>
        </div>
        <p class="user__description">{{user.signature}}</p>
  </div>
</template>

<script>
import normalizeMixin from "@/mixins/normalizeMixin.js"
export default {
    name:"page-info",
    mixins: [normalizeMixin],
    props:{
        user:{
            required:true,
        },
        stats:{
            required:true,
        }
    },
}
</script>

<style scoped>
    .user__header{
        display: flex;
        align-items: center;
    }
    .user__picture{
        width:100px;
        height:100pxpx;
        margin-right:15px;
        border-radius: 50%;
        transform: translateY(5px);
    }
    .user__nickname{
        font-weight: 700;
        font-size: 1.5em;
    }
    .user__real-name{
        margin-top:5px;
        font-size:1.2em;
    }
    
    .user{
        padding: 10px 15px;
    }
    .user__stats{
        margin:25px 0 20px 0;
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        gap:10px;
    }
    .user__stats-number{
        font-weight: 900;
    }
</style>