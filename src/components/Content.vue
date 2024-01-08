<script>
import ListCard from './ListCard.vue'
export default {
    components: {
        ListCard

    },
    name: "Content"
}

</script>

<template>
    <div class="container">

        <div class="menu">Alien</div>
        <div class="list-card">
            <div class="found-card">
                <p>Found 39 cards</p>
            </div>
            <div class="row">
                <div class="img">
                    <img src="https://www.nationalgeographic.it/upload/ngi-hero/cover-1700127134465-Gatto.jpeg" alt="">
                    <div class="text">
                        "A" CELL BREEDING DEVICE
                    </div>
                    <div class="status">
                        Alien
                    </div>
                </div>
                <div class="img">
                    <img src="https://www.nationalgeographic.it/upload/ngi-hero/cover-1700127134465-Gatto.jpeg" alt="">
                </div>
                <div class="img">
                    <img src="https://www.nationalgeographic.it/upload/ngi-hero/cover-1700127134465-Gatto.jpeg" alt="">
                </div>
                <div class="img">
                    <img src="https://www.nationalgeographic.it/upload/ngi-hero/cover-1700127134465-Gatto.jpeg" alt="">
                </div>
                <div class="img">
                    <img src="https://www.nationalgeographic.it/upload/ngi-hero/cover-1700127134465-Gatto.jpeg" alt="">
                </div>
                <div class="img">
                    <img src="https://www.nationalgeographic.it/upload/ngi-hero/cover-1700127134465-Gatto.jpeg" alt="">
                </div>
            </div>

        </div>






    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;

.container {

    width: 80%;
    margin: 0 auto;
    padding: 20px 0;

    .menu {
        width: 120px;
        background-color: white;
        padding: 5px;
        border-radius: 5px;
    }

    .list-card {
        background-color: white;
        padding: 30px;
        margin-top: 30px;

        .found-card {
            padding: 20px 15px;
            background-color: #212529;
            color: white;
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;

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
    }


}
</style>
