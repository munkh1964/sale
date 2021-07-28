import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyAYl3tUnJypEUGIuOWcC56tLve5kU19tCU",
  authDomain: "vue-crm-35870.firebaseapp.com",
  databaseURL:
    "https://vue-crm-35870-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-crm-35870",
  storageBucket: "vue-crm-35870.appspot.com",
  messagingSenderId: "779385417853",
  appId: "1:779385417853:web:a2ffef505fba9685f28114",
  measurementId: "G-QVRD8FE2ST",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
