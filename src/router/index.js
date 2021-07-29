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
    component: () => import("../views/frontend/Landing.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      layout: "front",
    },
    component: () => import("../views/frontend/Home.vue"),
  },
  {
    path: "/products",
    name: "products",
    meta: {
      layout: "front",
    },
    component: () => import("../views/frontend/Products.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    meta: {
      layout: "front",
    },
    component: () => import("../views/frontend/Contacts.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "empty",
    },
    component: () => import("../views/backend/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "empty",
    },
    component: () => import("../views/backend/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      layout: "back",
    },
    component: () => import("../views/backend/Dashboard.vue"),
  },
  {
    path: "/transactions",
    name: "transactions",
    meta: {
      layout: "back",
    },
    component: () => import("../views/backend/Transactions.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
