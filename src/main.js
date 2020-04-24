import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import * as firebase from "firebase"
import store from "./store"

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyB4h1ujQ6mQ2LOl8--UqjNdTLimCO8T4N0 ",
  authDomain: "whichmovies-ae3b7.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-2802d.firebaseio.com",
  projectId: "whichmovies-ae3b7",
  storageBucket: "",
  messagingSenderId: "226262486529",
  appId: ""
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
