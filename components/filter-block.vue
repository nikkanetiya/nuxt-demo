<template>
<div>
    <el-input
      placeholder="Search By Name"
      v-model="filter.name"
      prefix-icon="el-icon-search"
      clearable></el-input>

    <h4 class="filter-label">FEATURES</h4>
    <el-checkbox-group v-model="filter.features">
      <el-checkbox label="HDMI"></el-checkbox>
      <el-checkbox label="VGA"></el-checkbox>
      <el-checkbox label="DVI"></el-checkbox>
      <el-checkbox label="DisplayPort (DP)"></el-checkbox>
      <el-checkbox label="DisplayPort Mini (DPM)"></el-checkbox>
      <el-checkbox label="USB-A 3.0"></el-checkbox>
    </el-checkbox-group>

    <h4 class="filter-label">PRICE</h4>
    <div class="block">
      <el-slider
      v-model="filter.priceRange"
      range
      show-stops
      :max="50">
      </el-slider>
    </div>

    <h4 class="filter-label">LOOKS</h4>
    <el-checkbox-group v-model="filter.looks">
      <el-checkbox label="Width"></el-checkbox>
      <el-checkbox label="Height"></el-checkbox>
      <el-checkbox label="Depth"></el-checkbox>
    </el-checkbox-group>

    <h4 class="filter-label">COLORS</h4>
    <el-checkbox-group v-model="filter.colors">
      <el-checkbox label="Black"></el-checkbox>
      <el-checkbox label="Silver"></el-checkbox>
      <el-checkbox label="White"></el-checkbox>
      <el-checkbox label="Unknown"></el-checkbox>
    </el-checkbox-group>
</div>
  
</template>

<script>
export default {
  name: "filter-block",
  data() {
    return {
      filter: {
        name: "",
        features: [],
        priceRange: [0, 50],
        looks: [],
        colors: []
      }
    };
  },
  watch: {
    filter: {
      handler(val) {
        this.updateFilter();
      },
      deep: true
    }
  },
  methods: {
    updateFilter() {
      this.$emit("updateFilter", this.filter);
    }
  }
};
</script>

<style scoped>
.filter-label {
  margin: 20px 0;
  text-align: left;
}
.el-checkbox-group .el-checkbox {
  display: block;
  text-align: left;
  margin-bottom: 15px;
}
.el-checkbox + .el-checkbox {
  margin-left: 0;
}
</style>
