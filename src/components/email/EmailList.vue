<template>
  <!--<section v-if="emails">-->
    <section class="">
    <!--<email-filter @set-filter="setFilter"></email-filter>-->
    <!--<h2>We have {{emails.length}} Emails</h2>-->
      <el-table :data="emails" height="200" style="width: 40%">

        <el-table-column

          sortable
          header-align = "center"
          prop="id"
          label="ID"
          >
        </el-table-column>
        <el-table-column
          header-align = "center"
          prop="title"
          label="Title"
          >
        </el-table-column>
        <el-table-column
          header-align = "center"
          prop="author"
          label="Author"
          >
        </el-table-column>
      </el-table>

    <!--<book-details v-if="selectedBook"-->
                  <!--@close="resetSelected"-->
                  <!--@next="selectNext"-->
                  <!--:book="selectedBook">-->
    <!--</book-details>-->

    <!--<book-edit v-if="editedBook || isCreateMode"-->
               <!--:book="editedBook"-->
               <!--@save="saveBook"-->
               <!--@cancel="closeOnCancel">-->
    <!--</book-edit>-->

  </section>
</template>

<script>
  import emailService from '../../services/emails/email.service'
  import EmailPreview from '../email/EmailPreview.vue'

  export default {
    name: 'email-list',
    components: {
      EmailPreview
    },
    data() {
      return {
        emails: emailService.getEmails()
      }
    }
  }
</script>

<style>
  el-table-column {
    text-align: center;
  }
</style>

