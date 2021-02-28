<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  components: {},
  methods: {
    show(message, delay = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, delay);
    },
  },
};
</script>

<style scoped >
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  padding: 8px 12px;
}
</style>
