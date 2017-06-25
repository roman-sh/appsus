<template>
  <div class="emailDetails">
    <h4>From: {{ email.from }}</h4>
    <h4>Subbject: {{ email.subject }}</h4>
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
    methods: {
      deleteEmail() {
        eventBus.deleteEmail(this.email)
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
  .emailDetails {
    box-sizing: border-box;
    width: 45%;
    margin-top: 42px;
    padding: 10px;
    border: 1px solid #BFCBD9;
    border-radius: 3px;
    text-align: justify;
  }
</style>

