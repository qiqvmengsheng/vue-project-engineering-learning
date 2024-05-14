<template>
  <div>
    <h2>home</h2>
    <button @click="useAppStore().addNum(1)">添加</button>
    <p>{{ num }}</p>
    <p>{{ doubleNum }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/modules/app'

const { num, doubleNum } = storeToRefs(useAppStore())
</script>
