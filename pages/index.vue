<template>
  <el-container class="section">
    <el-header>
      Compare USB C
    </el-header>
    <el-container>
      <el-aside width="300px">
        <filterBlock v-on:updateFilter="updateFilter"></filterBlock>
      </el-aside>
      <el-container>
        <el-main>
          <items-table :filters="filters"></items-table>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import itemsTable from "@/components/items-table";
import filterBlock from "@/components/filter-block";

export default {
  name: "pg-index",
  components: {
    itemsTable,
    filterBlock
  },
  data() {
    return {
      filters: null
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    updateFilter(val) {
      this.filters = val
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  padding: 30px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body .section {
  max-width: 1280px;
  margin: 10px auto;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
