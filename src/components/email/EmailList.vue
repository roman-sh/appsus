<template>
  <!--<section v-if="emails">-->
    <section>
    <!--<email-filter @set-filter="setFilter"></email-filter>-->
    <h2>We have {{emails.length}} Emails</h2>
      <el-table
        :data="emails"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="Title"
          width="180">
        </el-table-column>
        <el-table-column
          prop="author"
          label="Name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address">
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

