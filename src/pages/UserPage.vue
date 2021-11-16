<template>
    <div v-if="!this.loadingData" class="current-user">
        <page-info :user="this.user" :stats="this.stats"></page-info> 
        <h2 class="current-user__post-header">Посты</h2>
        <!-- Из-за неработающего Get User Feed в API, использую плейсхолдеры для демонстрации -->
        <div class="current-user__feed">
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 220.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637118000&x-signature=Xhu4SxKaEoWZw9NC1FI%2FUBCzPro%3D">
                    <source src="https://v39-eu.tiktokcdn.com/0d2bd076dcffec30603cf859cb77c24f/619478c8/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116213631010190218226450D86B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 314.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637118000&x-signature=Xhu4SxKaEoWZw9NC1FI%2FUBCzPro%3D">
                    <source src="https://v39-eu.tiktokcdn.com/0d2bd076dcffec30603cf859cb77c24f/619478c8/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116213631010190218226450D86B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=">
                </video>
            </div><div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 840.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637118000&x-signature=Xhu4SxKaEoWZw9NC1FI%2FUBCzPro%3D">
                    <source src="https://v39-eu.tiktokcdn.com/0d2bd076dcffec30603cf859cb77c24f/619478c8/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116213631010190218226450D86B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=">
                </video>
            </div><div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 312.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637118000&x-signature=Xhu4SxKaEoWZw9NC1FI%2FUBCzPro%3D">
                    <source src="https://v39-eu.tiktokcdn.com/0d2bd076dcffec30603cf859cb77c24f/619478c8/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116213631010190218226450D86B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=">
                </video>
            </div><div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 315.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637118000&x-signature=Xhu4SxKaEoWZw9NC1FI%2FUBCzPro%3D">
                    <source src="https://v39-eu.tiktokcdn.com/0d2bd076dcffec30603cf859cb77c24f/619478c8/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116213631010190218226450D86B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 300.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637118000&x-signature=Xhu4SxKaEoWZw9NC1FI%2FUBCzPro%3D">
                    <source src="https://v39-eu.tiktokcdn.com/0d2bd076dcffec30603cf859cb77c24f/619478c8/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116213631010190218226450D86B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div class="current-user__feed-item">
                <h1 class="current-user__feed-viewcount">&#9658; 315.5K</h1>
                <video class="current-user__feed-video" controls poster="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637118000&x-signature=Xhu4SxKaEoWZw9NC1FI%2FUBCzPro%3D">
                    <source src="https://v39-eu.tiktokcdn.com/0d2bd076dcffec30603cf859cb77c24f/619478c8/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116213631010190218226450D86B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=">
                </video>
            </div>
        </div> 
        <!-- Если бы API работал, блок Feed выглядел бы как-то так -->
        <!-- <div v-for="video in videos" :key="video.id" class="current-user__feed-item">
            <h1 class="current-user__feed-viewcount">&#9658; {{video.viewCount}}</h1>
            <video class="current-user__feed-video" controls :poster="this.video.poster">
                <source :src="this.video.playURL">
            </video>
        </div> -->
    </div>
    <div v-else class="lds-dual-ring"></div>
</template>

<script>
// import fetchUserFeed from "@/fetchUserFeed.js"

import fetchUserInfo from "@/fetchUserInfo.js"
export default {
    data(){
        return{
            user:{},
            stats:{},
            loadingData: false,
            //videos:[], //=> Массив видео пользователя
        }
    },
    async mounted(){
        //получаем данные о пользователе через переданный ранее uniqueID
        this.loadingData = true;
        let userdata = await fetchUserInfo(this.$route.params.name);
        if(userdata !== null) //if request successfull
        {
            this.loadingData = false;
            this.user = userdata.user;
            this.stats = userdata.stats;
        }
        else{
            setTimeout(()=>{
                this.$router.replace('error'); // error case redirect
            },1500)
        }

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