<template>
  <div class="app-front-layout">
    <div class="indigo darken-2">
      <FrontNavbar />
    </div>

    <main class="full">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>
    <!-- <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div> -->
  </div>
</template>

<script>
import messages from "@/utils/messages";
import FrontNavbar from "@/components/app/frontend/FrontNavbar";
export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
  }),
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || "Тодорхойгүй алдаа");
    },
  },
  components: {
    FrontNavbar,
  },
};
</script>

<style scoped>
.app-front-layout {
  position: relative;
  min-height: 100vh;
}
</style>
