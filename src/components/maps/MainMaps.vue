<<template>
    <section>
        <yandex-map :coords="[54.62896654088406, 39.731893822753904]"
                    zoom="10"
                    style="width: 600px; height: 600px;"
                    lang="en-US">

            <ymap-marker marker-type="placemark"
                        :coords="[54.62896654088406, 39.731893822753904]"
                        hint-content="Hint content 1"
                        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                        :icon="{color: 'green', glyph: 'cinema'}"></ymap-marker>

            <ymap-marker marker-type="circle"
                        :coords="[54.62896654088406, 39.731893822753904]"
                        circle-radius="1600"
                        hint-content="Hint content 1"
                        :balloon="{header: 'header', body: 'body', footer: 'footer'}"></ymap-marker>
        </yandex-map>
    </section>
</template>

<script>
  export default {
    name: 'main-maps',
    // data() {
    //   return {
    //     activeIndex: '1',
    //     activeIndex2: '1'
    //   };
    // },
    // methods: {
    //   handleSelect(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    // }
  }
</script>

