<template>
  <div class="check" :class="{ actived: isChecked }">
    <div>
      <img src="~assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
};
</script>

<style scoped >
.check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.actived {
  background-color: red;
  border: 2px solid red;
  opacity: 0.8;
}
</style>
