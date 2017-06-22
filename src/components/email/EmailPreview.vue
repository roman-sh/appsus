<template>
  <el-table-column @click="row-click">
    <!--prop="date"-->
    <!--label="Date"-->
    <!--width="180">-->
  </el-table-column>

</template>

<script>
//  import EmailFilter from './EmailFilter'
//  import EmailList from './EmailList'
//  import EmailPreview from './EmailPreview'


  export default {
    name: 'email-preview',
    props: ['email'],
    data() {
      return {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    },
    methods: {
      row-click: function (e) {
        console.log(e.target);
      }
    }
  }
</script>

<style></style>

