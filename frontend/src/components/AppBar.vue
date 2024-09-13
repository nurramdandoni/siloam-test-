<template>
    <SidebarMenu :menuItems="menuItems" :drawer.sync="drawer"></SidebarMenu>
    <v-app-bar app>
      <v-btn @click="toggleDrawer" data-type="btnSideBarTest">
        <v-icon size="20"><i class="fas fa-bars"></i></v-icon>
      </v-btn>
      <span>{{ AppBarName }}</span>
    </v-app-bar>
</template>
<script lang="ts" setup>
import { ref, defineProps } from 'vue';
import SidebarMenu from './SidebarMenu.vue';
// Fungsi untuk toggle drawer

// Define props for dynamic Appbar Name
const props = defineProps<{
    AppBarName: string;
  }>();
const toggleDrawer = () => {
  drawer.value = !drawer.value;
  // containerStyle.value.marginLeft = '255px'; // Drawer terbuka
};

const drawer = ref(true); // true artinya drawer awalnya terbuka
// const containerStyle = ref({
//   marginLeft: '0px' // Default saat drawer terbuka
// });

const menuItems = ref([
  { text: 'Dashboard', link: '/dashboard' },
  { text: 'Vendor', link: '/vendor' },
]);
</script>