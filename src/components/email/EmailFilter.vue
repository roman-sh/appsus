<template>
  <div class="search-input">
    <el-input
      placeholder="Input"
      icon="search"
      v-model="input"
      :on-icon-click="handleIconClick">
    </el-input>
  </div>
</template>

<script>
  //  import EmailFilter from './EmailFilter'
  //  import EmailList from './EmailList'
  //  import EmailPreview from './EmailPreview'


  export default {
    name: 'email-filter',
    props: ['emails'],
    created() {

    },
    data() {
      return {
        input: ''
      }
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      }
    }
  }
</script>

<style>
  .search-input {
    margin-bottom: 5px;
  }
</style>

