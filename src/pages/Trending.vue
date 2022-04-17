<template>
    <!-- Трендинговая страница, содержащая в себе "горячие посты"  -->
    <div v-if="loadingData" class="lds-dual-ring"></div>
    <div v-else class="feed">
        <post v-for="post in posts" :key="post.id" :post="post"></post>
         <!-- загрузочный спиннер -->
        <!-- <div v-if="loadingMoreData" class="lds-dual-ring"></div> -->
        <!-- элемент для подгрузки новых видео при его пересечении с помощью IntersectionObserver API (вместо пагинации) -->
        <!-- <div v-intersection="loadMorePosts" class="observer"></div>  -->
    </div>
</template>

<script>
    // import fetchPosts from "@/fetchPosts.js"
    export default {
        data(){
            return{
                posts: [
                    {
                        id:1,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:2,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:3,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:4,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:5,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:6,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:7,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:8,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:9,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:10,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                    {
                        id:11,
                        authorMeta:{
                            name:"Test",
                            nickName:"Testnick",
                            avatar:"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665679014619141~c5_100x100.jpeg?x-expires=1650380400&x-signature=SiINSq7dtoReL8iSE0WHKpJYLpw%3D",                          
                        },
                        text: "🤣 🔺FAKE GUN🔺",
                        musicMeta:{
                            musicName: "hardgunner",
                            musicAuthor: "pathfinder"
                        },
                        covers:{
                            default:"https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2a78d198f27f47ab81bddf031e8bf8c6?x-expires=1650229200&x-signature=gLBB%2BbvEAjsP7xkXxDGQAeZN1tg%3D"
                        },
                        videoUrl:"https://v16-webapp.tiktok.com/9eec3421d5e309dc1d79e9294691b18f/625c8a06/video/tos/useast2a/tos-useast2a-pve-0068/51866bae658348aaa216d0e615e7ae25/?a=1988&br=4496&bt=2248&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H-oMyq8ZOG3wwe2NO4Aol7Gb&l=20220417154321010223121093109D0528&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OGg6ZnA8PDMzNzczM0ApOGQ0ZTQ7aGVmNzdmZDs3NGdqMm5jcjRnMjZgLS1kMTZzcy4wYS5iM14yYS8uL2IyXi06Yw%3D%3D&vl=&vr=",
                        diggCount:1000,
                        commentCount:2000,
                    },
                ],
                postsNum: 10,
                loadingData: false,
                loadingMoreData: false,
            }
        },
        methods:{
            // async loadPosts(){
            //     // при монтировке страницы в DOM, считываем "горячие" посты с сервера 
            //     // в поле "posts" свойства data
            //     let limit = this.postsNum;
            //     this.loadingData = true;
            //     let trending = await fetchPosts(limit);
            //     console.log(trending);
            //     if(trending !== null) //if request successfull
            //     {
            //         this.loadingData = false;
            //         this.posts = trending;
            //     }
            //     else{
            //         setTimeout(()=>{
            //             this.$router.push('error'); // error case redirect
            //         },1500)
            //     }
            // },
            // async loadMorePosts(){
            //     this.postsNum+=10;
            //     let limit = this.postsNum;
            //     this.loadingMoreData = true;
            //     let trending = await fetchPosts(limit);
            //     if(trending !== null) //if request successfull
            //     {
            //         this.loadingMoreData = false;
            //         this.posts = [...this.posts, ...trending.slice(this.postsNum-10,this.postsNum)]
            //     }
            //     else{
            //         setTimeout(()=>{
            //             this.$router.push('error'); // error case redirect
            //         },1500)
            //     }
            // },
        },
        mounted(){
            // this.loadPosts();
        }
    }

</script>

<style>
    .feed{
        display: flex;
        flex-direction: column;
        align-items:center;
    }
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
        }
        .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin-top:20px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>