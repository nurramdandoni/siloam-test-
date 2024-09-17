<template>
  <v-app>
    <AppBar AppBarName="Vendor"></AppBar>
    <v-main>
      <!-- <v-container> -->
      <div style="padding: 20px; background-color: darkgray">
        <h4>List vendor</h4>
      </div>
      <Table
        :headers="headers"
        :items="data"
        :loading="loading"
        v-model:items-per-page="itemsPerPage"
        :server-items-length="totalItems"
      ></Table>
      <!-- <v-btn @click="increment" data-type="btnCounterTest">Count is: {{ count }}</v-btn> -->
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AppBar from "../components/AppBar.vue";
import Table from "../components/Table.vue";
type Header = {
  title: string;
  key: string;
  sortable: boolean;
  align?: "start" | "end" | "center";
};
type DataList = {
  id: number;
  name: string;
  address: string;
};
const headers = ref<Header[]>([
  {
    title: "Id",
    key: "id",
    sortable: true,
    align: "start",
  },
  { title: "Name", key: "name", sortable: true, align: "start" },
  { title: "Adress", key: "address", sortable: true, align: "start" },
]);

const data = [
  {
    id: 159,
    name: "Frozen Yogurt",
    address: "6.0",
  },
  {
    id: 237,
    name: "Ice Cream Sandwich",
    address: "9.0",
  },
];
const totalItems = ref(0);
const loading = ref(false);
const itemsPerPage = ref(10);
</script>

<style scoped>
/* Tambahkan style jika dibutuhkan */
</style>
