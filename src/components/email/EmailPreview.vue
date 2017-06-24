<template>

  <tr @click="emailWasClicked">
  <td>{{ email.from }}</td>
  <td>{{ email.subject }}</td>
  <td>{{ email.date }}</td>
  </tr>

  <!--<div>-->
    <!--<el-table-column-->
      <!--type="selection"-->
      <!--width="55">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="email.body"-->
      <!--label=""-->
      <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="email.subject"-->
      <!--label=""-->
      <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="email.date"-->
      <!--label=""-->
      <!--width="120">-->
      <!--<template scope="scope">{{ scope.row.date }}</template>-->
    <!--</el-table-column>-->
  <!--</div>-->

</template>

<script>
  //  import EmailFilter from './EmailFilter'
  //  import EmailList from './EmailList'
  //  import EmailPreview from './EmailPreview'
  import {eventBus} from '../../main'


  export default {
    name: 'email-preview',
    props: ['email'],
    data() {
      return {}
    },
    methods: {
      emailWasClicked() {
        eventBus.emailWasClicked(this.email)
      }
    }
  }
</script>

<style>
  tr:hover {
    cursor: pointer;
  }
</style>

