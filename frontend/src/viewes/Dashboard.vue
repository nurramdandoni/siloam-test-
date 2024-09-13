<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <!-- Menu items -->
      <v-list>
        <v-list-item link to="/dashboard">Dashboard</v-list-item>
        <v-list-item link to="/vendor">Vendor</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Konten utama aplikasi -->
    <v-app-bar app>
      <v-btn @click="toggleDrawer">
        <v-icon size="20"><i class="fas fa-bars"></i></v-icon>
      </v-btn>
      <span>Dashboard</span>
    </v-app-bar>

    <v-main>
      <v-container :style="containerStyle">
        <h1>Welcome to Dashboard Page</h1>

        <!-- <v-btn @click="increment">Count is: {{ count }}</v-btn>
        <router-link to="/vendor">List Vendor</router-link> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCounterStore } from '../stores/counter';

// Reactive state untuk drawer
const drawer = ref(true); // true artinya drawer awalnya terbuka
const containerStyle = ref({
  marginLeft: '0px' // Default saat drawer terbuka
});

// Fungsi untuk toggle drawer
const toggleDrawer = () => {
  drawer.value = !drawer.value;
  // containerStyle.value.marginLeft = '255px'; // Drawer terbuka

};


// State untuk counter
// const store = useCounterStore();
// const count = ref(store.count);

// const increment = () => {
//   store.increment();
//   count.value = store.count;
// };
</script>

<style scoped>
/* Tambahkan style jika dibutuhkan */
</style>
