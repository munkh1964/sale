<template>
  <div>
    <nav :class="navclass">
      <div class="nav-wrapper">
        <div class="container">
          <a href="#" class="brand-logo">
            <router-link to="/">
              <img
                src="require('@/assets/img/company_logo.svg')"
                height="30"
                width="60"
                alt=""
              />
            </router-link>
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
          >
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <router-link
              v-for="link in links"
              :key="link.url"
              tag="li"
              active-class="active"
              :to="link.url"
              :exact="link.exact"
              ><a href="#" class="waves-effect pointer">{{
                link.title
              }}</a></router-link
            >
          </ul>
        </div>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
        ><a href="#" class="waves-effect waves-orange pointer sidenav-close">{{
          link.title
        }}</a></router-link
      >
    </ul>
  </div>
</template>

<script>
// Get rid of those pesky eslint errors for Materialize-css
// import M from "materialize-css";

export default {
  data: () => ({
    links: [
      { title: "Нүүр", url: "/home" },
      { title: "Бүтээгдхүүн", url: "/products" },
      { title: "Гүйлгээ", url: "/transactions" },
      { title: "Холбоо", url: "/contacts" },
    ],
    navclass: [],
    sidenav: null,
    isLogged: false,
  }),
  methods: {
    logout() {
      console.log("logout");
    },
  },
  mounted() {
    this.navclass =
      this.$route.meta.layout === "landing"
        ? "transparentBG z-depth-0"
        : "transparentBG";
    var elems = document.querySelectorAll(".sidenav");
    // eslint-disable-next-line no-undef
    this.sidenav = M.Sidenav.init(elems, "open");
  },
  beforeDestroy() {
    if (this.sidenav && this.sidenav.destroy) {
      this.sidenav.estroy();
    }
  },
};
</script>

<style scoped>
nav ul li.active {
  background-color: rgba(207, 107, 107, 0.2);
  border-bottom: 2px solid #2edf0b;
}
</style>
