<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        :text="BtnName"
        variant="tonal"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title>{{ FormTitle }}</v-card-title>
        <v-card-text>
          <v-row dense>
            <v-text-field
            v-model="idVendor"
              hint="Masukan ID Vendor"
              label="ID Vendor"
            ></v-text-field>
          </v-row>
          <v-row dense>
            <v-text-field
            v-model="namaVendor"
              hint="Masukan Nama Vendor"
              label="Nama Vendor"
            ></v-text-field>
          </v-row>
          <v-row dense>
            <v-text-field
            v-model="alamatVendor"
              hint="Masukan Alamat Vendor"
              label="Alamat Vendor"
            ></v-text-field>
          </v-row>
          <v-row dense>
            <SelectUnit
              class="unit-combo"
              v-model="selected"
              :ItemsCombo="itemsCombo"
              LabelName="Unit"
              @keyValue="updateOptionSelect"
            ></SelectUnit>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" @click="isActive.value = false"></v-btn>
          <v-btn text="Save" @click="submit"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { defineProps, ref, defineEmits  } from "vue";
import SelectUnit from "./SelectBox.vue";

const props = defineProps<{
  FormTitle: string;
  BtnName: string;
}>();

const emit = defineEmits(["saveVendor"]);

const selected = ref("");
let formUnit:string ="";
const idVendor = ref("");
const namaVendor = ref("");
const alamatVendor = ref("");

const itemsCombo = [
  { text: "Siloam Lippo Village", key: "1" },
  { text: "Siloam Bogor", key: "2" },
  { text: "Siloam Makasar", key: "3" },
];
function submit(){
    console.log("ini idvendor",idVendor.value);
    console.log("ini namaVendor",namaVendor.value);
    console.log("ini alamatVendor",alamatVendor.value);
    console.log("ini Submit",formUnit);
    const newVendor = {
        id: idVendor.value,
        name: namaVendor.value,
        address: alamatVendor.value,
        // unit: selected.value
    };

    emit("saveVendor", newVendor);
    
    console.log("Vendor disimpan:", newVendor);
}
function updateOptionSelect(key:string){
    formUnit=key;
}
</script>
