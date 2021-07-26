<template>
  <div class="app-main-layout">
    <div class="indigo darken-2">
      <Navbar @click="isOpen = !isOpen" />
    </div>

    <main class="full" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>
    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
  }),
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.app-main-layout {
  position: relative;
  min-height: 100vh;
}
</style>
