<template>
  <v-select
    :label="LabelName"
    v-model="selectedValue"
    :items="formattedItems.map((item) => item.text)"
    item-value="key"
    item-text="text"
    variant="outlined"
    @update:modelValue="handleChange"
  ></v-select>
</template>

<script lang="ts" setup>
import { defineProps, ref, defineEmits, computed, watch } from "vue";

const props = defineProps<{
  LabelName: string;
  ItemsCombo: { key: string; text: string }[];
  modelValue: string; // For v-model binding
}>();

const emit = defineEmits(["update:modelValue", "onItemSelected","keyValue"]);

const selectedValue = ref(props.modelValue);

// Watch for changes in the parent modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue;
  }
);

// Use ItemsCombo directly for v-select
const formattedItems = computed(() => props.ItemsCombo);

const handleChange = (value: string) => {
  console.log("get", value);
  const selectedItem = props.ItemsCombo.find((item) => item.text === value);
  if (selectedItem) {
    console.log("selected", selectedItem);
    emit("update:modelValue", selectedItem.text); // emit key
    emit("onItemSelected", selectedItem.text);
    emit("keyValue", selectedItem.key);
  }
};
</script>

<style scoped>
::v-deep .v-field__field > .v-field__input {
  min-height: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
/* Add your styles here if needed */
</style>
