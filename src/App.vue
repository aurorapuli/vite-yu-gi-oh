<script>
import AppHeader from './components/AppHeader.vue'
import Content from './components/Content.vue'
import SelectCard from './components/SelectCard.vue'
// importo axios
import axios from 'axios';

// importo store
import { store } from './store';

export default {
  components: {
    AppHeader,
    Content,
    SelectCard

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCard() {

      if (store.statusValue !== "") {
        store.apiURL += `?${store.apiStatusParamentrer}= ${store.statusValue}`
      }

      axios
        .get(store.apiURL)
        .then((res => {
          console.log(res.data.data);
          store.ListCard = res.data.data;
        }))
        .catch((err) => {
          console.log("Errori", err);
        })
    },
    getArchetype() {
      axios
        .get(store.apiArchetype)
        .then((res => {
          console.log(res.data);
          store.ListArchetype = res.data;
        }))
        .catch((err) => {
          console.log("Errori", err);
        })
    },

  },
  created() {
    this.getCard();
    this.getArchetype();

  }
}

</script>

<template>
  <AppHeader />
  <main>
    <SelectCard @select="getCard" />
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
