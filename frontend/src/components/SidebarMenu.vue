<template>
    <v-navigation-drawer v-model="localDrawer" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.text"
          :to="item.link"
        >
        <template v-slot:prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="logout-button">
      <Button icon="mdi-logout" bgColor="Darkblue" fontColor="white" ButtonName="Logout"></Button>
    </div>
    </v-navigation-drawer>
  </template>
  
  <script lang="ts" setup>
 import { ref, watch, defineProps, defineEmits } from 'vue';
 import Button from '../components/Button.vue';
  
  // Define props for dynamic menu items
  const props = defineProps<{
    menuItems: { text: string; link: string, icon: string }[];
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
<style scoped>
.logout-button {
  position: absolute;
  bottom: 0px; /* Adjust as needed */
  left: 0;
  right: 0;
  padding-bottom: 2px;
}
</style>
