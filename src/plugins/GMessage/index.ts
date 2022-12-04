import GMessage from "./components/GMessage.vue"
import { createVNode, render, VNode } from "vue";

const div = document.createElement("div")

document.body.appendChild(div)

let timer: number | null = null

export default (message: string | VNode, options: any) => {
  const vnode = createVNode(GMessage, {message, ...options})
  if (div.innerHTML) {
    render(null, div)
  }
  render(vnode, div)

  timer && clearTimeout(timer)
  let timeout = 3500
  if (options && options.timeout) {
    timeout = options.timeout
  }
  timer = setTimeout(() => {
    render(null, div)
  }, timeout);
}