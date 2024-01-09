<script>
export default {
    name: "ListCard"
}

</script>

<template>
    <div class="img">
        <img src="https://www.nationalgeographic.it/upload/ngi-hero/cover-1700127134465-Gatto.jpeg" alt="">
        <div class="text">
            "A" CELL BREEDING DEVICE
        </div>
        <div class="status">
            Alien
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;

.img {
    width: calc((100% / 5) - 20px);
    margin: 0 10px 20px 10px;
    text-align: center;
    font-size: 15px;
    background-color: $color;
    padding-bottom: 20px;

    .text {
        margin: 15px 0;
        color: white;
    }

}
</style>
