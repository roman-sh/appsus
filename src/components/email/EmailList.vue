<template>
  <!--<section v-if="emails">-->
  <section class="email-list">
    <email-filter></email-filter>

    <table>
      <email-preview v-for="email in emails" :key="email.id" :email="email"></email-preview>
    </table>

    <!--<el-table-->
      <!--ref="multipleTable"-->
      <!--:data="emails"-->
      <!--border-->
      <!--style="width: 100%"-->
    <!--&gt;-->

      <!--<email-preview @row-click="click"></email-preview>-->

    <!--</el-table>-->

  </section>
</template>

<script>
  import emailService from '../../services/emails/email.service'
  import EmailPreview from '../email/EmailPreview.vue'
  import EmailFilter from '../email/EmailFilter.vue'

  export default {
    name: 'email-list',
    components: {
      EmailPreview,
      EmailFilter
    },
    data() {
      return {
        emails: emailService.getEmails()
      }
    },
    methods: {

    }
  }
</script>

<style>

  email-list {
    width: 40%;
  }
  .el-table {
    border-radius: 4px;
  }

  .el-table-column {
    text-align: center;
  }

  table {
    width: 40%;
  }
</style>

