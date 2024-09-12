import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // State: tempat menyimpan data
  state: () => ({
    count: 0,
  }),
  
  // Actions: metode untuk memodifikasi state
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  },
  
  // Getters: seperti computed properties, digunakan untuk menghitung derived state
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
