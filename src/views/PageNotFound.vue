<template>
    <div>
        <h1>404</h1>
        <h2>Sorry, Page Not Found</h2>
        <br><br>
        <button @click="redirectHomePage">Redirect to Home Page</button>
    </div>
</template>

<script>
export default {
    name: "PageNotFound",
    methods: {
        redirectHomePage(){
            this.$router.push({name: "TextBinding"});
        }
    }
}
</script>
<style scoped>
    h1{
        text-align: center;
        font-size: 5rem;
        color: red;
        font-weight: bold;
    }
    h2{
        text-align: center;
        font-size: 3rem;
        font-family: cursive;
    }
    button{
        border-radius: 20px;
        background: rgb(238, 139, 189);
        color: white;
        font-weight: bold;
        font-size: 0.8rem;
    }
    button:hover{
        background: rgb(139, 58, 58);
    }
    button:focus{
        outline: none;
    }
</style>