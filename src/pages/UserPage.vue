<template>
    <div v-if="!this.loadingData" class="current-user">
        <page-info :user="this.user" :stats="this.stats"></page-info> 
        <h2 class="current-user__post-header">Посты</h2>
        <!-- Из-за неработающего Get User Feed в API, использую плейсхолдеры для демонстрации -->
        <div class="current-user__feed">
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 220.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D">
                    <source src="https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 220.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D">
                    <source src="https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 220.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D">
                    <source src="https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 220.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D">
                    <source src="https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 220.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D">
                    <source src="https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 220.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D">
                    <source src="https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <!-- Здесь то, как выглядела бы верстка, если бы видео и превью загружались из user-feed.json или реквеста -->
            <!-- Можно закомментировать блок ниже и раскомментировать плейсхолдеры выше и увидеть нормальную верстку с видео-->
            <!-- <div v-for="video in videos.slice(0,videoNum)" :key="video.id" class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; {{video.stats.playCount}}</h1>
                <video class="current-user__feed-video" controls :poster="video.video.cover">
                    <source :src="video.video.playAddr">
                </video> 
            </div> -->
            <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
        </div>
    </div>
    <div v-else class="lds-dual-ring"></div>
</template>

<script>
// import fetchUserFeed from "@/fetchUserFeed.js"
// import fetchUserInfo from "@/fetchUserInfo.js"

export default {
    data(){
        return{
            user:{
                nickname:"Test",
                uniqueId:"Testnick",
                avatarLarger:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",
                signature: "Что-то я немного за..."
            },
            stats:{
                followingCount:1000,
                followerCount:2000,
                heartCount:3500
            },
            loadingData: false,
            videos:[], //=> Массив видео пользователя
            videoNum: 20,
        }
    },
    methods:{
        loadMorePosts(){
            this.videoNum+=10;
        },
    },
    async mounted(){
        //получаем данные о пользователе через переданный ранее uniqueID
        // this.loadingData = true;
        // let userdata = await fetchUserInfo(this.$route.params.name);
        // if(userdata !== null) //if request successfull
        // {
        //     this.loadingData = false;
        //     this.user = userdata.user;
        //     this.stats = userdata.stats;
        //     const userFeed = require("@/../user-feed.json"); // ссылки на видео и их превью в этом файле ведут к нерабочим видео и картинкам
        //     this.videos = userFeed.itemList; 
        // }
        // else{
        //     setTimeout(()=>{
        //         this.$router.replace('error'); // error case redirect
        //     },1500)
        // }
        
        // let userfeed = await fetchUserFeed(this.$route.params.name); // => получение видео пользователя
        // this.videos = userfeed;
        // console.log(userfeed);
    }

}

</script>
<style scoped>
    .lds-dual-ring{
        margin-left:20px;
    }
    .current-user__post-header{
        text-align: center;
        margin:15px 0;
        font-size:1.2em;
        padding:5px 0;
        font-weight: 700;
        border-top: 5px solid #810e1d;
        border-bottom: 5px solid #810e1d;
        max-width: 1450px;
    }
    .current-user__feed{
        display: grid;
        grid-template-columns:minmax(120px,350px) minmax(120px,350px);
        gap: 10px;
    }
    .current-user__feed-video{
       width: 100%;
    }
    .current-user__feed-item{
        position: relative;
    }
    .current-user__feed-viewcount{
        font-size:1.4em;
        color:white;
        position: absolute;
        right:0;
        top:0;
        padding: 5px;
        background-color:rgba(0, 0, 0, 0.137);
    }
    @media (min-width: 600px){
        .current-user__feed{
            grid-template-columns:minmax(140px,350px) minmax(140px,350px) minmax(140px,350px);
        }
    }
    @media (min-width: 1200px){
        .current-user__feed{
            grid-template-columns:repeat(auto-fit,minmax(140px,350px));
        }
    }
    @media (min-width: 1600px){
        .current-user__feed{
            grid-template-columns:minmax(140px,350px) minmax(140px,350px) minmax(150px,350px) minmax(150px,350px);
        }
    }
</style>