<template>
    <yandex-map :coords="[32.0805556, 34.8141667]"
                    zoom="8"
                    style="width: 45%; height: 400px;">
      
        <ymap-marker    v-for="place in places"
                        :key="place.id"
                         
                        marker-type="placemark"
                        :coords="[place.lat, place.lng]"
                        :hint-content="place.name"
                        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                        :icon="{color: 'green'}"></ymap-marker>

            <!--<ymap-marker marker-type="placemark"
                        :coords="[53.62896654088406, 38.731893822753904]"
                        hint-content="Hint content 1"
                        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                        :icon="{color: 'green'}"></ymap-marker>-->

    </yandex-map>
</template>

<script>


export default {
    name: 'map-cmpn',
    props: ['places']
}
</script>




