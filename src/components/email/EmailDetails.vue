<template>
  <div class="emailDetails">
    <h2>{{ email.from }}</h2>
    <h2>{{ email.subject }}</h2>
    <p>{{ email.body }}</p>
    <el-button
      size="small"
      type="danger"
      @click="deleteEmail">Delete
    </el-button>
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
    width: 60%;
    margin-top: 42px;
    border: 1px solid #BFCBD9;
    border-radius: 3px;
  }
</style>

