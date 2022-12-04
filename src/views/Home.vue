<script lang="ts" setup>
import {ref} from "vue"
import Game from "../components/game.vue"
import {numbersStore} from "../store"

const numberStore = numbersStore()

const numbers = ref<Array<string>>(numberStore.shuffle(numberStore.currentNumbers))

const shuffle = () => {
  numbers.value = numberStore.shuffle(numberStore.currentNumbers)
}

</script>

<template>
  <div class="game flex column deputy-center">
    <div class="steps">步数：{{numberStore.currentSteps}}</div>
    <div class="container flex column main-center deputy-center">
      <Game :numbers="numbers" />
    </div>
    <div class="buttosn flex row main-center deputy-center" @click="shuffle">打乱</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../index.scss";
.game {
  width: 100%;
}
.container {
  padding: 0;
  margin: 0;
  width: 50vw;
  height: 50vw;
  flex-wrap: wrap;
  .cell {
    width: 25%;
  }
  @media screen and (max-width: 1500px) {
    width: 80vw;
    height: 80vw;
  }
}
.steps {
  position: absolute;
  top: 2%;
  right: 3vw;
  font-size: 0.8rem;
  color: #ffcf86;
  @media screen and (max-width: 1500px) {
    right: 2vw;
  }
}
.buttosn {
  width: 20%;
  height: 8vh;
  text-align: center;
  background-color: #ffcf86;
  border: 5px solid #999;
  color: #999;
  border-radius: 5vh;
  font-size: 0.8rem;
  margin-top: 3vh;
  @media screen and (max-width: 1500px) {
    height: 8vh;
    text-align: center;
  }

  &:active {
    color: #ffcf86;
    background-color: #999;
    border: 5px solid #ffcf86;
  }
}
</style>