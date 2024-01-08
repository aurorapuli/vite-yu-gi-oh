<script>
export default {
    name: "AppHeader"
}

</script>

<template>
    <header>
        <div class="img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="">
        </div>
        <h1>YU-GI-OH Api</h1>
    </header>
</template>

<style lang="scss" scoped>
header {

    display: flex;
    align-items: center;
    padding: 20px;

    .img {
        width: 80px;
        margin-right: 25px;
    }
}
</style>
