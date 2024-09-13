<template>
    <v-navigation-drawer v-model="localDrawer" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.text"
          :to="item.link"
        >
          {{ item.text }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script lang="ts" setup>
 import { ref, watch, defineProps, defineEmits } from 'vue';
  
  // Define props for dynamic menu items
  const props = defineProps<{
    menuItems: { text: string; link: string }[];
    drawer:boolean
  }>();

  // Define emit for updating drawer state
const emit = defineEmits<{
  (e: 'update:drawer', drawer: boolean): void;
}>();
  
  // Local drawer state
const localDrawer = ref(props.drawer);

// Watch for prop changes to update local drawer state
watch(() => props.drawer, (newValue) => {
  localDrawer.value = newValue;
});

// Emit event when local drawer state changes
watch(localDrawer, (newValue) => {
  emit('update:drawer', newValue);
});
</script>
