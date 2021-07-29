<template>
  <div class="app-back-layout">
    <BackNavbar @click="isOpen = !isOpen" />

    <BackSidebar v-model="isOpen" />

    <main class="app-back-content" :class="{ full: !isOpen }">
      <div class="app-back-page">
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
import BackNavbar from "@/components/app/backend/BackNavbar";
import BackSidebar from "@/components/app/backend/BackSidebar";
export default {
  name: "back-layout",
  data: () => ({
    isOpen: true,
  }),
  components: {
    BackNavbar,
    BackSidebar,
  },
};
</script>

<style scoped>
.app-back-layout {
  position: relative;
  min-height: 100vh;
}

.app-back-content {
  padding-top: 64px;
  padding-left: 250px;
  transition: padding-left 0.3s;
  position: relative;
}

.app-back-content.full {
  padding-left: 0;
}

.app-back-page {
  padding: 2rem;
}
</style>
