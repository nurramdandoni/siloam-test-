<template>
  <v-app>
    <AppBar AppBarName="Vendor" @keyValue="updateContent" @openDialog="showDialog = true"></AppBar>
    <v-main>
      <!-- <v-container> -->
      <div style="padding: 20px; background-color: darkgray">
        <h4>List vendor</h4>
        <div class="add-vendor"><AddVendor :FormTitle="formTitle" :BtnName="btnNme" @saveVendor="updateTable"></AddVendor></div>
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
import AddVendor from "../components/FormDialog.vue"
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

const data = ref<DataList[]>([
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
]);
const totalItems = ref(0);
const loading = ref(false);
const itemsPerPage = ref(10);
const showDialog = ref(false);
let formTitle = ref("Add Vendor");
let btnNme = ref("Add Vendor");

function updateContent(key: string) {
  console.log("Key adalah:", key);
  if(key == "2" || key == "3") {

    data.value = [
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
      {
        id: 237,
        name: "Ice Cream Sandwich",
        address: "9.0",
      },
    ];
  }else{
    data.value = []

  }
}

function updateTable(newVendor:DataList) {
  data.value.push(newVendor);
  console.log("Tabel diperbarui:", data.value);
}

</script>

<style scoped>
.add-vendor {
  position: absolute;
  right: 0;
  margin-top:-30px;
  margin-right: 20px;
  /* top:10; */
  /* margin-top: 15px;
  margin-right: 20px;
  position: absolute;
  right: 0;
  width: 300px;
  max-width: 30%; */
}
</style>
