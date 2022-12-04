<template>
  <div class="cell">
    {{ props.number }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  number: {
    type: String,
    default: ""
  }
})
</script>

<style scoped lang="scss">
.cell {
  width: 24.2%;
  height: 24.2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #999;
  font-size: 1.6rem;
  color: #ffcf86;
  font-weight: bold;
  border-radius: 40px;
  margin-right: 1px;
  border: 1px solid #ffcf86;
}
</style>