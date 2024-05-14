<template>
  <div>
    <h2>home</h2>
    <button @click="useAppStore().addNum(1)">添加</button>
    <p class="num">{{ num }}</p>
    <p>{{ doubleNum }}</p>
    <el-button @click="msg"> 按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/modules/app'

const { num, doubleNum } = storeToRefs(useAppStore())

const msg = () => {
  ElMessage({
    message: 'hello world',
    type: 'success'
  })
}
</script>

<style lang="scss" scoped>
.num {
  color: $red;
}
</style>
