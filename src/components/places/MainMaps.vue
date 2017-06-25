<template>
  <section>

    <map-cmpn></map-cmpn>

    <places-list></places-list>
  
  </section>
</template>

<script>
  import MapCmpn from './MapCmpn';
  import PlacesList from './PlacesList';

  export default {
    name: 'main-maps',
    components: {
        MapCmpn,
        PlacesList,
    }
  }
</script>

<style scoped>
section {
  /*margin-top: 20px;*/
  display: flex;
  /*justify-content: space-between;*/
}
</style>
