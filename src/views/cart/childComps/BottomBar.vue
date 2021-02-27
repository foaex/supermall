<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button
        class="check-all-item"
        :isChecked="isSelectAll"
        :class="{ actived: isSelectAll }"
        @click.native="allClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="total">合计：{{ totalPrice }}</div>
    <div class="calculate">去结算:{{ number }}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  name: "BottomBar",
  methods: {
    allClick() {
      if (this.isSelectAll) {
        this.$store.getters.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.$store.getters.cartList.forEach((item) => {
          item.checked = true;
        });
      }
      // console.log(this.$store.getters.cartList);
      // console.log(this.isSelectAll);
    },
  },
  components: { CheckButton },
  computed: {
    totalPrice() {
      const cartList = this.$store.getters.cartList;
      return (
        "￥" +
        cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.count * item.price;
          }, 0)
          .toFixed(2)
      );
    },
    number() {
      return this.$store.getters.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.$store.getters.cartList.length == 0) {
        return false;
      }
      for (let item in this.$store.getters.cartList) {
        if (!this.$store.getters.cartList[item].checked) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style scoped >
.bottom-bar {
  position: relative;
  height: 40px;
  background-color: rgba(100, 100, 100, 0.1);
  display: flex;
  align-items: center;
  font-size: 14px;
}
.check-all {
  /* background-color: black; */
  /* width: 100%; */
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
}
.check-all-item {
  margin-right: 5px;
}
.total {
  margin-left: 40px;
  display: flex;
  flex: 1;
}
.calculate {
  width: 90px;
  height: 100%;
  background: orangered;
  color: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  padding-left: 20px;
}
.actived {
  background-color: red;
  border: 2px solid red;
  opacity: 0.8;
}
</style>
