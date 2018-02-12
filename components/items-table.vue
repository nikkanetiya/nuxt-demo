<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <el-table
        :data="filterdItems"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          label="Name"
          sortable
          width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.name }} <br> {{ scope.row.type }}</span>
            <i class="icon-info el-icon-info" @click="openDialog(scope.row)"></i>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="Price"
          sortable
          width="80">
          <template slot-scope="scope">
            $ {{ scope.row.price }}
          </template>
        </el-table-column>
        <el-table-column
          prop="reviews"
          label="Reviews"
          width="100">
          <template slot-scope="scope">
            {{ scope.row.reviews.avg }} <i class="el-icon-star-on icon-review"></i> {{ scope.row.reviews.count }}
          </template>
        </el-table-column>
        <el-table-column
          label="HDMI"
          >
          <template slot-scope="scope">
            <featureIndicator :hasFeature="hasFeature(scope.row, 'HDMI')"></featureIndicator>
          </template>
        </el-table-column>
        <el-table-column
          label="VGA"
          >
          <template slot-scope="scope">
            <featureIndicator :hasFeature="hasFeature(scope.row, 'VGA')"></featureIndicator>
          </template>
        </el-table-column>
        <el-table-column
          label="DVI"
          >
          <template slot-scope="scope">
            <featureIndicator :hasFeature="hasFeature(scope.row, 'DVI')"></featureIndicator>
          </template>
        </el-table-column>
        <el-table-column
          label="DP"
          >
          <template slot-scope="scope">
            <featureIndicator :hasFeature="hasFeature(scope.row, 'DP')"></featureIndicator>
          </template>
        </el-table-column>
        <el-table-column
          label="DPM"
          >
          <template slot-scope="scope">
            <featureIndicator :hasFeature="hasFeature(scope.row, 'DPM')"></featureIndicator>
          </template>
        </el-table-column>
        <el-table-column
          label="USBA"
          >
          <template slot-scope="scope">
            <featureIndicator :hasFeature="hasFeature(scope.row, 'USBA')"></featureIndicator>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <productDetail :dialog="isOpenProductDetail" :item="selectedItem" v-on:dialogClose="dialogClose"></productDetail>
  </div>

</template>

<script>
import featureIndicator from "./feature-indicator";
import { isArray } from 'util';
import productDetail from "@/components/product-detail";

const filter = (sources, filters, filterType) => {
  return sources[filterType].toLowerCase().includes(filters[filterType])
}

const featureActualType = (feature) => {
  switch(feature) {
    case 'DP':
      return 'DisplayPort (DP)';
    case 'DPM':
      return 'DisplayPort (DPM)';
    case 'USBA':
      return 'USB-A 3.0';
    default:
    return feature
  }
}

export default {
  name: "items-table",
  components: {
    featureIndicator,
    productDetail
  },
  props: [
    'filters'
  ],
  data() {
    return {
      items: [],
      loading: true,
      isOpenProductDetail: false,
      selectedItem: null
    };
  },
  computed: {
    filterdItems() {
      return this.$store.state.items.filter(x => {
        const filters = this.filters
        return (filters['name'] === '' || filter(x, filters, 'name'))
              && (
                filters['features'].length === 0 ||
                x.features.find(f => {
                  return filters['features'].includes(featureActualType(f))
                })
              )
              && (
                x.price >= filters.priceRange[0] && x.price <= filters.priceRange[1]
              )
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loading = false;
    });
  },
  methods: {
    formatter(row, column) {
      return row.hasHDMI ? "<p>Bold</p>" : "ass";
    },
    hasFeature(row, feature) {
      return row.features.includes(feature);
    },
    openDialog(item) {
      this.isOpenProductDetail = true
      this.selectedItem = item
    },
    dialogClose() {
      this.isOpenProductDetail = false
    }
  }
};
</script>

<style>
.feature {
  font-family: 20px;
}
.has-feature {
  color: green;
}
.icon-review {
  color: #f3f33a;
}
.icon-info {
  margin-left: 10px;
  cursor: pointer;
}
</style>
