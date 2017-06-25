<template>
  <section>

    <map-cmpn :places="places"></map-cmpn>

    <places-list 
      :places="places"
      @deleteMarker="deleteMarker"  
    ></places-list>
  
  </section>
</template>

<script>
  import MapCmpn from './MapCmpn';
  import PlacesList from './PlacesList';
  import PlaceService from '../../services/places/place.service.js';

  export default {
    name: 'main-maps',
    components: {
        MapCmpn,
        PlacesList,
    },
    data () {
      return {
        places: null
      }
    },
    created () {
      this.places = PlaceService.getPlaces()
    },
    methods: {
      deleteMarker (row) {
        this.places = this.places.filter(function(place) {
          return place !== row
        })

        }
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
