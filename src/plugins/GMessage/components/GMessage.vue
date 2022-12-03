<script lang="ts">
import { defineComponent, ref, h, onMounted, readonly } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "success",
    },
    fontSize: {
      type: Number,
      default: 3.6,
    },
    message: {
      type: [String, Object],
      default: "登录成功",
    },
    timeout: {
      type: Number,
      default: 3500,
    },
  },
  setup(props: any) {
    const styleModel = readonly({
      warn: {
        color: "#ffcf86",
        borderColor: "#ffcf86",
      },
      error: {
        color: "#ffa8a8",
        borderColor: "#ffa8a8",
      },
      success: {
        color: "#3fc7f5",
        borderColor: "#3fc7f5",
      },
    });

    const out = ref<Boolean>(false);

    onMounted(() => {
      let timeout = props.timeout;
      if (timeout < 1000) {
        timeout = 1000;
      }
      setTimeout(() => {
        out.value = true;
      }, timeout - 500);
    });

    return () =>
      h(
        "div",
        {
          class: !out.value ? "g-message" : "out",
          style: {
            ...((styleModel as any)[props.type] as any),
            fontSize: props.fontSize + "vh",
          },
        },
        props.message
      );
  },
});
</script>

<style lang="scss" scoped>
.g-message {
  position: absolute;
  z-index: 9999;
  left: 50%;
  top: 50vh;
  margin-left: -15vw;
  margin-top: -8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32vw;
  height: 16vh;
  border: 3px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 2vh;
  animation: move 0.5s linear forwards;
  box-shadow: var(--el-box-shadow);
  background-color: #999;
  .text {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif, STSong;
  }
  @keyframes move {
    0% {
      transform: translate3d(0, -75px, 0);
      opacity: 0.16;
    }

    50% {
      opacity: 0.68;
    }

    100% {
      opacity: 1;
    }
  }
}
.out {
  @extend .g-message;
  animation: moveout 0.5s linear forwards;
  @keyframes moveout {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.68;
    }

    100% {
      transform: translate3d(0, -75px, 0);
      opacity: 0.16;
    }
  }
}
</style>
