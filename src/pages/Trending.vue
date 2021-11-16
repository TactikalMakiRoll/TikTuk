<template>
    <!-- Трендинговая страница, содержащая в себе "горячие посты"  -->
    <div class="feed">
        <div v-if="loadingData" class="lds-dual-ring"></div> <!-- загрузочный спиннер -->
        <post v-for="post in posts" :key="post.id" :post="post"></post>
    </div>
</template>

<script>
    import fetchPosts from "@/fetchPosts.js"
    export default {
        data(){
            return{
                posts: [],
                loadingData: false,
            }
        },
        methods:{

        },
        async mounted(){
            // при монтировке страницы в DOM, считываем "горячие" посты с сервера 
            // в поле "posts" свойства data
            let limit = 10;
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