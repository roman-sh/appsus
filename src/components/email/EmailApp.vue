<template>
  <div class="app">
    <email-list :emails="emails"></email-list>
    <email-details></email-details>
  </div>
</template>

<script>
  import emailService from '../../services/emails/email.service'
  import EmailFilter from './EmailFilter'
  import EmailList from './EmailList'
  import EmailPreview from './EmailPreview'
  import EmailDetails from './EmailDetails'
  import {eventBus} from '../../main'

  export default {
    name: 'email-app',
    components: {
      emailService,
      EmailFilter,
      EmailList,
      EmailPreview,
      EmailDetails
    },
    created() {
      emailService.getEmails().then(emails => {
        this.emails = emails
      });
      eventBus.$on('deleteEmail', (email) => {
          this.emails = this.emails.filter(function (item) {
            return item !== email
          })
      });
    },
    data() {
      return {
          emails: null,
          selectedEmail: null
      }
    },
    methods: {}
  }
</script>

<style>
  .app {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
    border: 1px solid #BFCBD9;
    border-radius: 5px;
  }
</style>

