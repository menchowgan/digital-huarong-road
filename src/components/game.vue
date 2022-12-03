<script setup lang="ts">
import Cell from './cell.vue';
import { numbersStore } from '@/store';
import GMessage from '@/plugins/GMessage';

const numberStore = numbersStore()

const props = defineProps({
  numbers: {
    type: Array,
    default: () => []
  }
})

const swapSite = (index: number) => {
  console.log("index", index);
  if (props.numbers[index] === "") {
    GMessage("请点击数字", {
      type: "warn"
    })
    return
  }
  numberStore.swap2AdjNumber(index)
}
</script>

<template>
  <Cell 
    v-for="(item, index) in props.numbers" 
    :key="(item as string)" 
    :number="(item as string)" 
    @click="() => swapSite(index)"
  />
</template>

<style scoped lang="scss">

</style>