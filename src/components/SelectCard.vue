<script>


// importo store
import { store } from '../store';

export default {
    name: "SelectCard",

    data() {
        return {
            store,

        }
    },

}

</script>

<template>
    <div class="container">
        <select v-model="store.statusValue" @change="$emit('select')">
            <option value=""></option>
            <option v-for="select in store.ListArchetype" :value="select.archetype_name">{{
                select.archetype_name }}</option>

        </select>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;

.container {
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;

    select {
        width: 120px;
        background-color: white;
        padding: 5px;
        border-radius: 5px;
    }
}
</style>
