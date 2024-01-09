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
                <ListCard />

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
    }


}
</style>
