<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="data"
    :items-length="totalItems"
    :loading="loading"
    :search="search"
    :server-items-length="totalItems"
    item-value="name"
    @update:options="loadItems"
  >
    <template v-slot:[`column.id`]="{ column }">
      <div :style="{ width: '150px' }">
        {{ column.value }}
      </div>
    </template>
    <template v-slot:[`column.name`]="{ column }">
      <div :style="{ width: '200px' }">
        {{ column.value }}
      </div>
    </template>
    <template v-slot:[`column.address`]="{ column }">
      <div :style="{ width: '100px' }">
        {{ column.value }}
      </div>
    </template>
  </v-data-table>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";
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
type DataFetch = {
  page: number;
  itemsPerPage: number;
  sortBy: string;
};
const props = defineProps<{
  headers: Header[];
  data: DataList[];
}>();

// Fake API to simulate server-side pagination and sorting
const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }:DataFetch) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        let items = data.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items = items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginatedItems = items.slice(start, end);
        resolve({ items: paginatedItems, total: data.length });
      }, 500);
    });
  },
};

const serverItems = ref([]); // Data to be displayed
const totalItems = ref(0); // Total number of items
const loading = ref(false); // Loading state
const search = ref(""); // Search term
const itemsPerPage = ref(10); // Number of items per page

// Load items from FakeAPI (server-side)
type opsiLoad = {
  page: number;
  itemsPerPage: number;
  sortBy: [];
};

const loadItems = async (options: opsiLoad) => {
  loading.value = true;
  const { page, itemsPerPage, sortBy } = options;
  const { items } = await FakeAPI.fetch({ page, itemsPerPage, sortBy });
  serverItems.value = items;
  totalItems.value = items.length;
  loading.value = false;
};

// Load items on component mount
onMounted(() => {
  loadItems({ page: 1, itemsPerPage: itemsPerPage.value, sortBy: [] });
});
</script>

<style scoped>
.custom-id-column {
  width: 10px; /* Adjust width as needed */
}
.custom-name-column {
  width: 200px; /* Adjust width as needed */
}
.custom-address-column {
  width: 100px; /* Adjust width as needed */
}
.v-table > .v-table__wrapper > table > tbody > tr > th,
.v-table > .v-table__wrapper > table > thead > tr > th,
.v-table > .v-table__wrapper > table > tfoot > tr > th {
  font-weight: 0;
}
</style>
