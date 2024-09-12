<template>
    <v-container>
      <h1>Dashboard</h1>
      <!-- <v-btn @click="increment">Count is: {{ count }}</v-btn> -->
      <router-link to="/vendor">List Vendor</router-link>
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import { useCounterStore } from '../stores/counter'
  import { ref } from 'vue'
  
  const store = useCounterStore()
  const count = ref(store.count)
  
  const increment = () => {
    store.increment()
    count.value = store.count
  }
  </script>
  