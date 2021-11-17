<template>
    <!-- Трендинговая страница, содержащая в себе "горячие посты"  -->
    <div v-if="loadingData" class="lds-dual-ring"></div>
    <div v-else class="feed">
         <!-- загрузочный спиннер -->
        <post v-for="post in posts" :key="post.id" :post="post"></post>
        <div v-if="loadingMoreData" class="lds-dual-ring"></div>
        <!-- элемент для подгрузки новых видео при его пересечении с помощью IntersectionObserver API (вместо пагинации) -->
        <div v-intersection="loadMorePosts" class="observer"></div> 
    </div>
</template>

<script>
    import fetchPosts from "@/fetchPosts.js"
    export default {
        data(){
            return{
                posts: [],
                postsNum: 10,
                loadingData: false,
                loadingMoreData: false,
            }
        },
        methods:{
            async loadPosts(){
                // при монтировке страницы в DOM, считываем "горячие" посты с сервера 
                // в поле "posts" свойства data
                let limit = this.postsNum;
                this.loadingData = true;
                let trending = await fetchPosts(limit);
                if(trending !== null) //if request successfull
                {
                    this.loadingData = false;
                    this.posts = trending;
                }
                else{
                    setTimeout(()=>{
                        this.$router.push('error'); // error case redirect
                    },1500)
                }
            },
            async loadMorePosts(){
                console.log("LoadMorePostsKEEEEEEEEEEEEEEK");
                this.postsNum+=10;
                let limit = this.postsNum;
                this.loadingMoreData = true;
                let trending = await fetchPosts(limit);
                if(trending !== null) //if request successfull
                {
                    this.loadingMoreData = false;
                    this.posts = [...this.posts, ...trending.slice(this.postsNum-10,this.postsNum)]
                }
                else{
                    setTimeout(()=>{
                        this.$router.push('error'); // error case redirect
                    },1500)
                }
            }
        },
        mounted(){
            this.loadPosts();
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