<template>
  <div class="container" v-if="Object.keys(comment).length !== 0">
    <div class="comment-info">
      <div class="comment-title">用户评论</div>
      <div class="more">更多</div>
    </div>
    <div class="uers-info">
      <img :src="comment.user.avatar" alt="" />
      <div class="user-name">{{ comment.user.uname }}</div>
    </div>
    <div class="comment-main">
      <p>{{ comment.content }}</p>
      <div class="info-other">
        <span class="date">{{ comment.created | showDate }}</span>
        <span>{{ comment.style }}</span>
      </div>
    </div>
    <div class="comment-img">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in comment.images"
        :key="index"
      />
    </div>
  </div>
  <div v-else>暂无评论</div>
</template>

<script>
import { formatDate } from "common/util";
export default {
  data() {
    return {};
  },
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped >
.comment-info {
  overflow: hidden;
  margin-bottom: 4px;
  border-bottom: 1px solid #aaa;
  line-height: 60px;
}
.comment-title {
  float: left;
}
.more {
  float: right;
}
.uers-info {
  clear: both;
  display: flex;
  align-items: center;
  margin: 5px 0 10px 0;
}
.uers-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 5px;
}
.user-name {
  padding-left: 3px;
}
.comment-main p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}
.comment-img {
  margin-top: 10px;
}

.comment-img img {
  margin-right: 5px;
}
</style>
