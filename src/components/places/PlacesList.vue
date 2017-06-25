<template>
  <el-table
    
    :data="places"
    border
    style="width: 430px">
    
    <el-table-column
      label="Name"
      width="280">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ scope.row.name }}</p>
          <p>Addr: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Operations"
      width="150">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    name: 'places-list',
    props: ['places'],
    methods: {
        handleDelete(idx, row) {
            this.$emit('deleteMarker', row)
        }
    }
}
</script>

<style scoped>
    .el-table {
        margin-left: 50px;
        display: table;
    }
</style>


