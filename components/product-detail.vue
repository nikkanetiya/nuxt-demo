<template>
  <el-dialog
    title="Item Detail"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <div v-if="item">
      <table>
        <tr>
          <th>Name</th>
          <td v-text="item.name"></td>
        </tr>
        <tr>
          <th>Type</th>
          <td v-text="item.type"></td>
        </tr>
      </table>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "product-detail",
  props: [
    'dialog', 'item'
  ],
  data() {
    return {
      dialogVisible: false
    };
  },
  watch: {
    dialog(val) {
      if(val) {
        this.dialogVisible = true
      }
    }
  },
  methods: {
    handleClose(done) {
      done()
      this.$emit('dialogClose')
    }
  }
};
</script>
