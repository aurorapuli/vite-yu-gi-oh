<script>
import ListCard from './ListCard.vue'

// importo store
import { store } from '../store';

export default {
    name: "Content",
    components: {
        ListCard

    },
    data() {
        return {
            store,
        }
    }
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
                <div v-for="card in store.ListCard" :key="card.id" class="card">
                    <ListCard :info="card" />

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

        .card {
            width: calc((100% / 5) - 20px);
            margin: 0 10px 20px 10px;
            text-align: center;
            font-size: 15px;
            background-color: $color;
            padding-bottom: 20px;
        }


    }
}
</style>
