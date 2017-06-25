<template>
    <yandex-map :coords="[54.62896654088406, 39.731893822753904]"
                    zoom="10"
                    style="width: 35%; height: 400px;">

            <ymap-marker marker-type="placemark"
                        :coords="[54.62896654088406, 39.731893822753904]"
                        hint-content="Hint content 1"
                        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                        :icon="{color: 'green'}"></ymap-marker>

            <ymap-marker marker-type="placemark"
                        :coords="[53.62896654088406, 38.731893822753904]"
                        hint-content="Hint content 1"
                        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                        :icon="{color: 'green'}"></ymap-marker>

    </yandex-map>
</template>

<script>
export default {
    name: 'map-cmpn',

}
</script>


