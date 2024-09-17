<template>
  <SidebarMenu :menuItems="menuItems" :drawer.sync="drawer"></SidebarMenu>
  <v-app-bar app>
    <v-btn @click="toggleDrawer" data-type="btnSideBarTest">
      <v-icon size="20"><i class="fas fa-bars"></i></v-icon>
    </v-btn>
    <span>{{ AppBarName }}</span>
    <SelectUnit
      class="unit-combo"
      v-model="selected"
      :ItemsCombo="itemsCombo"
      LabelName="Unit"
      @keyValue="dataKey"
    ></SelectUnit>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import SidebarMenu from "./SidebarMenu.vue";
import SelectUnit from "./SelectUnit.vue";

// Mendefinisikan props AppBarName
const props = defineProps<{
  AppBarName: string;
}>();

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const drawer = ref(true);

// Item menu sidebar
const menuItems = ref([
  { text: "Dashboard", link: "/dashboard", icon: "mdi-apps" },
  { text: "Vendor", link: "/vendor", icon: "mdi-account-box" },
]);

const selected = ref("");

const itemsCombo = [
  { text: "Siloam Lippo Village", key: "1" },
  { text: "Siloam Bogor", key: "2" },
  { text: "Siloam Makasar", key: "3" },
];

const dataKey = (key: string) => {
  console.log(`Selected Key: ${key}`);
};
</script>
<style scoped>
.unit-combo {
  margin-top: 15px;
  margin-right: 20px;
  position: absolute;
  right: 0;
  width: 300px; /* Atur lebar sesuai kebutuhan */
  max-width: 30%; /* Pastikan tidak melebihi lebar layar */
}

</style>
