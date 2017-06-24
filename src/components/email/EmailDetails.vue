<template>
  <div>
    <h2>{{ email.from }}</h2>
    <h2>{{ email.subject }}</h2>
    <p>{{ email.body }}</p>
  </div>

</template>

<script>
  //  import EmailFilter from './EmailFilter'
  //  import EmailList from './EmailList'
  //  import EmailPreview from './EmailPreview'
  import { eventBus } from '../../main'


  export default {
    name: 'email-details',
    data() {
      return {
        email: null
      }
    },
    created() {
        eventBus.$on('emailWasClicked', (email) => {
            this.email = email
        });
    }
  }
</script>

<style>

</style>

