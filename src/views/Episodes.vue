<template>
  <h1>
      Episodios
  </h1>
</template>

<script>
import { request as fetchGQL } from "graphql-request";
export default {
  setup(){
    fetchGQL("https://rickandmortyapi.com/graphql", 
    /* GraphQL*/ `
      query {
        episodes {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            air_date
            episode
            created
          }
        }
      }
      `
    ).then(data => {
        console.log(data)
    });
  },
};
</script>

<style>

</style>