<template>
  <div class="landing-layout">
    <FrontNavbar />
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import FrontNavbar from "@/components/app/frontend/FrontNavbar";
export default {
  name: "landing-layout",
  data: () => ({
    isOpen: true,
  }),
  components: {
    FrontNavbar,
  },
};
</script>

<style scoped>
.landing-layout {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/landing_backgr.jpg");
  background-size: cover;
}

.landing-layout:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(35, 36, 32, 0.6);
}
</style>
