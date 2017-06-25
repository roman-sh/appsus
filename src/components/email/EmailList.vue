<template>
  <!--<section v-if="emails">-->
  <section class="email-list">
    <email-filter></email-filter>

    <el-table
      ref="multipleTable"
      :data="emails"
      border
      style="width: 100%"
      @row-click="emailWasClicked"
      @selection-change="handleSelectionChange">

      <email-preview></email-preview>
    </el-table>

  </section>
</template>

<script>
  import emailService from '../../services/emails/email.service'
  import EmailPreview from '../email/EmailPreview.vue'
  import EmailFilter from '../email/EmailFilter.vue'
  import {eventBus} from '../../main'

  export default {
    name: 'email-list',
    props: ['emails'],
    components: {
      EmailPreview,
      EmailFilter
    },
    data() {
      return {
        multipleSelection: []
      }
    },
    created() {
      eventBus.emailWasClicked(this.emails[0]);
      eventBus.$on('deleteEmail', (email) => {
        this.emails.splice(email.id - 1, 1)
      });
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      emailWasClicked(row) {
        eventBus.emailWasClicked(row)
      }
    }
  }
</script>

<style>

  .email-list {
    /*width: 40%;*/
  }

  .el-table {
    border-radius: 4px;
  }

  .el-table-column {
    text-align: center;
  }



  .email-unread {
    font-weight: bold;
  }
</style>

