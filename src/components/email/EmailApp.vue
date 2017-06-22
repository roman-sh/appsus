<template>
  <div>
    <email-filter></email-filter>
    <email-list></email-list>
  </div>
</template>

<script>
  import emailService from '../../services/emails/email.service'
  import EmailFilter from './EmailFilter'
  import EmailList from './EmailList'
  import EmailPreview from './EmailPreview'

  export default {
    name: 'email-app',
    components: {
      emailService,
      EmailFilter,
      EmailList,
      EmailPreview
    },
    created() {
//      this.emails = emailService.getEmails()
    },
    data() {
      return {
//          emails: null
      }
    },
    methods: {}
  }
</script>

