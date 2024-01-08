<script>
import AppHeader from './components/AppHeader.vue'
import Content from './components/Content.vue'

export default {
  components: {
    AppHeader,
    Content

  }
}

</script>

<template>
  <AppHeader />
  <main>
    <Content />

  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/_variables.scss' as *;

main {
  background-color: $color;
}
</style>
