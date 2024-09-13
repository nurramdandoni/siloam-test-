<template>
    <v-btn :prepend-icon="icon" :style="{ color: fontColor, backgroundColor: bgColor }">{{ ButtonName }}</v-btn>
    <!-- <v-btn :prepend-icon="icon">{{ ButtonName }}</v-btn> -->
  </template>
  
  <script lang="ts" setup>
   import { defineProps } from 'vue';
    
    const props = defineProps<{
      ButtonName: string,
      icon?: string,
      fontColor?: string,
      bgColor?: string,
    }>();
  
  </script>
  