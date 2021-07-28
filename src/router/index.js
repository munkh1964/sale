import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    meta: {
      layout: "landing",
    },
    component: () => import("../views/Landing.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      layout: "main",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "main",
    },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "main",
    },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/products",
    name: "products",
    meta: {
      layout: "main",
    },
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/transactions",
    name: "transactions",
    meta: {
      layout: "main",
    },
    component: () => import("../views/Transactions.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    meta: {
      layout: "main",
    },
    component: () => import("../views/Contacts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
