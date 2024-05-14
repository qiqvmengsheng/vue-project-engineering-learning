import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { store } from '../index'

// 导出app仓库
export const useAppStore = defineStore(
  'app',
  () => {
    const num = ref(0)

    const doubleNum = computed(() => num.value * 2)
    const addNum = (n: number) => {
      num.value += n
    }
    return { num, doubleNum, addNum }
  },
  {
    persist: true
  }
)

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
