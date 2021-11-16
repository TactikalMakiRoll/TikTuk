<template>
    <div class="error">
        <h2>Whoops... Something went wrong</h2>
        <a @click='$router.push("/")' class="error__reload-link"> <span>Back to Trending</span> </a>
    </div>
</template>

<script>
export default {
  name:"error-page",

}
</script>

<style scoped>
    .error{
        font-size:1.4em;
        margin-top:100px;
        text-align: center;
    }
    .error__reload-link{
        display: block;
        margin-top:20px;
        padding:10px;
        color:white;
        text-decoration: underline;
    }
    .error__reload-link:hover{
        cursor: pointer;
    }
</style>