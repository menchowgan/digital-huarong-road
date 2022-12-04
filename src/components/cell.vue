<template>
  <div class="cell flex column main-center deputy-center">
    <div class="content flex row main-center deputy-center">{{ props.number }}</div>
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
@import "../index.scss";
.cell {
  width: 25%;
  height: 25%;
  .content {
    padding: 0;
    margin: 0;
    width: 86%;
    height: 86%;
    font-size: 1.5rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    color: #ffcf86;
    border-radius: 40px;
    margin-right: 1px;
    border: 5px solid #ffcf86;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #999;
    text-align: center;
    @media screen and (max-width: 1500px) {
      border-radius: 3vw;
      width: 84%;
      height: 84%;
    }
  }
  @media screen and (max-width: 1500px) {
    border-radius: 10px;
    font-size: 0.3rem;
  }
}
</style>