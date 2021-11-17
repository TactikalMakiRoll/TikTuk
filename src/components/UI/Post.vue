<template>
    <!-- Компонент одного поста с видео -->
    <div class="post">
        <user-info :user="post.authorMeta"></user-info>
        <div class="post__header">
            <p class="post__description">{{post.text}}</p>
            <div class="post__hashtags">
                <p v-for="hashtag in post.hashtags" :key="hashtag.id" class="post__hashtag">#{{hashtag.name}}</p>
            </div>
            <p class="post__music">♫ {{post.musicMeta.musicName + " - " + post.musicMeta.musicAuthor}} </p>
        </div>
        <div class="post__body">
            <div class="post__video-wrapper">
                <video class="post__video" controls :poster="this.post.covers.default" muted>
                    <source :src="this.post.videoUrl">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="post__stats">
                <button v-if="post.diggCount" class="post__likes-btn">
                    <p class="post__stat-icon">♥</p>
                    <p class="post__stat-count">{{normalizeCount(post.diggCount)}}</p>
                </button>
                <button class="post__comment-btn">
                    <p class="post__stat-icon">🗨</p>
                    <p class="post__stat-count">{{normalizeCount(post.commentCount)}}</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import normalizeMixin from "@/mixins/normalizeMixin.js"
export default {
    name:"post",
    mixins: [normalizeMixin],
    props:{
        post:{
            required:true,
        }
    },
    methods:{
    },
    mounted(){
        // код автовоспроизведения видео при полной видимости его на странице
        const video = document.querySelectorAll('.post__video')
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                const element = entry.target;
                if (entry.isIntersecting) {
                    element.play();
                }
                else{
                    element.pause();
                }
            })
        }, { threshold: [1],
        root: null,
        rootMargin: '0px',});
        video.forEach((elem)=>{
            observer.observe(elem);
        })
        
    },
    unmounted(){

    }
}

</script>

<style scoped>
    .post{
        padding: 10px 0px 10px 25px;
        max-width:550px;
        border-bottom: 1px solid rgba(255,255,255,0.7);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .post__header{
        margin-left: 80px;
        max-width:550px;
        transform: translateY(-5px);
    }
    .post__description{
        margin-bottom:5px;
    }
    .post__hashtags{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        gap:5px;
        font-weight: 900;
    }
    .post__music{
        margin:5px 0;
        font-weight: 900;
    }

    .post__body{
        display: flex;
        flex-flow: row wrap;
        margin-top:20px;
        margin-left: 80px;
        max-width:550px;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
    }
    .post__video{
        width:200px;
        height:300px;
    }
    .post__stats{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left:15px;
    }
    .post__likes-btn, .post__comment-btn{
        background-color:transparent;
        color:white;
        border:none;
    }
    .post__stat-icon{
        padding:10px;
        font-size:1.5em;
        background-color:rgb(61, 61, 61);
        border-radius: 50%;
    }
    .post__stat-count{
        margin:10px 0;
        font-weight:900;
    }

    @media (min-width: 400px) {
        .post__body{
            flex-direction: row;
            align-items: flex-end;
        }
        .post__stats{
            flex-direction: column;
        }
    }
    @media (min-width: 450px) {
        .post__video{
                width:calc(10vw + 200px);
                height:calc(10vw + 300px);
            }
     }
     @media (min-width: 1440px) {
        .post__header,.post__body, .post{
                max-width:750px;
        }
     }
</style>