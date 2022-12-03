<script lang="ts" setup>
import {ref} from "vue"
import Game from "../components/game.vue"
import {numbersStore} from "../store"

const numberStore = numbersStore()

const numbers = ref<Array<string>>(numberStore.shuffle(numberStore.currentNumbers))
console.log("numbers", numbers);

</script>

<template>
  <div class="container">
    <Game :numbers="numbers" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 50vw;
  height: 50vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap
}
</style>