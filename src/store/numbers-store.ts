import GMessage from "@/plugins/GMessage";
import { defineStore } from "pinia";
import { ref, computed } from "vue"

const moveMap = new Map()

export default defineStore("numbers-store", () => {
  const numbers = ref<Array<string>>([
    "1", "2", "3", "4",
    "5", "6", "7", "8",
    "9", "10", "11", "12",
    "13", "14", "15", ""
  ])

  const steps = ref<number>(0)

  const setMoveMap = () => {
    const idx = numbers.value.findIndex(num => num === "")
    let idxs: number[] = []
    if (idx % 4 === 0) {
      idxs = [idx - 4, idx + 1, idx + 4]
    } else if ((idx + 1) % 4 === 0) {
      idxs = [idx - 4, idx - 1, idx + 4]
    } else {
      idxs = [idx - 4, idx - 1, idx + 4, idx + 1]
    }
    for (const i of idxs) {
      if (i < 0 || i > 15) {
        continue
      } else {
        if (!moveMap.get(idx)) {
          moveMap.set(idx, [])
        }
        const v = moveMap.get(idx)
        v.push(i)
        moveMap.set(idx, v)
      }
    }
  }

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const shuffle = (arr: Array<string>): Array<string> => {
    moveMap.clear()
    let _arr = arr.slice()
    const length = _arr.length
    for (let i = 1; i < length; i++) {
      const j = getRandomInt(0, i);
      [_arr[i], _arr[j]] = [_arr[j], _arr[i]]
    }
    numbers.value = _arr
    setMoveMap()
    steps.value = 0
    return _arr
  }

  const addStep = () => {
    steps.value++
  }

  const currentNumbers = computed(() => numbers.value)
  const currentSteps = computed(() => steps.value)
  
  const swap2AdjNumber = (i: number) => {
    const index = numbers.value.findIndex(num => num === "")
    const idxs = moveMap.get(index)
    if (idxs.includes(i)) {
      [numbers.value[i], numbers.value[index]] = [numbers.value[index], numbers.value[i]]
      setMoveMap()
      addStep()
      return
    }
    GMessage("不能移动这个数字哦～～～！", {
      type: "warn"
    })
  }

  return {
    shuffle,
    currentNumbers,
    swap2AdjNumber,
    currentSteps
  }
})