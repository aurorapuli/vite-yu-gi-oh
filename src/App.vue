<script>
import AppHeader from './components/AppHeader.vue'
import Content from './components/Content.vue'
// importo axios
import axios from 'axios';

// importo store
import { store } from './store';

export default {
  components: {
    AppHeader,
    Content

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCard() {
      axios
        .get(store.apiURL)
        .then((res => {
          console.log(res.data.data);
        }))
        .catch((err) => {
          console.log("Errori", err);
        })
    }

  },
  created() {
    this.getCard();

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
