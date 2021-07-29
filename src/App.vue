<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import LandingLayout from "@/layouts/LandingLayout";
import FrontLayout from "@/layouts/FrontLayout";
import BackLayout from "@/layouts/BackLayout";

export default {
  computed: {
    layout() {
      // console.log((this.$route.meta.layout || "empty") + "-layout");
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    EmptyLayout,
    FrontLayout,
    LandingLayout,
    BackLayout,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/custom.css";
// @import "assets/index.css";
</style>
