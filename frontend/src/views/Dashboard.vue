<template>
  <v-app>
    <AppBar AppBarName="Dashboard"></AppBar>
    <v-main>
      <v-container>
        <h1>Welcome to Dashboard Page</h1>

        <!-- <v-btn @click="increment" data-type="btnCounterTest">Count is: {{ count }}</v-btn> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from '../components/AppBar.vue';

</script>

<style scoped>
/* Tambahkan style jika dibutuhkan */
</style>
