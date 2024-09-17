<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="serverItems"
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
type SortBy = {
  key: keyof DataList; // Mengacu pada key dari DataList
  order: "asc" | "desc"; // Mengatur sorting ascending atau descending
};
type DataFetch = {
  page: number;
  itemsPerPage: number;
  sortBy: SortBy[];
};

const props = defineProps<{
  headers?: Header[];
  data?: DataList[];
}>();

type FetchResult = {
  items: DataList[];
  total: number;
};
const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }: DataFetch): Promise<FetchResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // Berikan nilai default [] jika props.data tidak ada
        let items = props.data?.slice() || [];

        // Pastikan sortBy ada dan tidak kosong sebelum melakukan sorting
        if (sortBy && sortBy.length > 0) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;

          // Pastikan data ada sebelum melakukan sort
          items = items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];

            if (typeof aValue === "number" && typeof bValue === "number") {
              // Jika nilai berupa angka, urutkan secara numerik
              return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
            } else if (
              typeof aValue === "string" &&
              typeof bValue === "string"
            ) {
              // Jika nilai berupa string, urutkan secara alfabetis
              return sortOrder === "desc"
                ? bValue.localeCompare(aValue)
                : aValue.localeCompare(bValue);
            }

            // Jika tipe datanya berbeda, kembalikan 0 untuk tidak mengubah urutan
            return 0;
          });
        }

        const paginatedItems = items.slice(start, end); // Ubah sesuai array yang dijamin ada
        resolve({ items: paginatedItems, total: items.length }); // Gunakan items.length untuk menghitung total
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
