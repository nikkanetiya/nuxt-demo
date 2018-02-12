<template>
  <span :class="[hasFeature ? 'has-feature' : 'not-available-feature']">
      &bullet;
  </span>
</template>

<script>
export default {
  name: "feature-indicator",
  props: {
    hasFeature: {
      type: Boolean
    }
  }
};
</script>

<style>
.has-feature {
  color: green;
}
.not-available-feature {
  color: red;
}
</style>
