<template>
  <ul class="sidenav app-back-sidenav" :class="{ open: value }">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: "Харилцагчид", url: "/partners" },
      { title: "Бүтээгдхүүн", url: "/products" },
      { title: "Гүйлгээ", url: "/transactions" },
      { title: "Хэрэглэгчид", url: "/users" },
    ],
  }),
};
</script>

<style scoped>
.app-back-sidenav {
  padding-top: 5px;
  position: absolute;
  top: 64px;
  width: 250px;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  bottom: 0 !important;
  height: auto !important;
}
.app-back-sidenav.open {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
</style>
