<template>

  <div>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      property="from"
      label="From"
      width="120">
    </el-table-column>
    <el-table-column
      property="subject"
      label="Subject"
      width="120">
    </el-table-column>
    <el-table-column
      label="Date"
      width="auto">
      <template scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label=""
      width="auto">
      <template scope="scope">
        <el-button
          size="small"
          type="danger"
          @click.stop="deleteEmail">Delete
        </el-button>
      </template>
    </el-table-column>
  </div>
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
      deleteEmail() {
        eventBus.deleteEmail(this.email);
        console.log(this.email)
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style>
  tr:hover {
    cursor: pointer;
  }
</style>

