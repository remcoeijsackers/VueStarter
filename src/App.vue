<script setup lang="ts">
import { RouterView } from 'vue-router'
import mainnav from './components/core/navbar.vue';
import mainfooter from './components/core/mainfooter.vue';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// get these from https://firebase.google.com/docs/cli
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
// uncomment these once you have the firebase config.
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

</script>

<template class="bg-white  dark:--vt-c-black">
  <header>
    <mainnav></mainnav>
    
  </header>
  
  <main class="relative">
    <RouterView />
  </main>

  <mainfooter></mainfooter>

</template>

