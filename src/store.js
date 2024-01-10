import { reactive } from 'vue'

export const store = reactive({
    ListCard: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",


    apiArchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    ListArchetype: [],
    statusValue: "",
    apiStatusParamentrer: "archetype",
})