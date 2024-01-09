<script>


export default {
    name: "ListCard",

    props: {
        info: Object
    }
}


</script>

<template>
    <img :src="info.card_images[0].image_url" alt="">
    <div class="text">
        {{ info.name }}
    </div>
    <div class="status">
        {{ info.archetype }}
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;


img {
    max-width: 100%;
}

.text {
    margin: 15px 0;
    color: white;
}
</style>
