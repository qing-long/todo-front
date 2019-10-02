<template>
  <section class="page-to-do">
    <div v-for="item in toDoList" :key="item.id" class="tab">
      <div v-for="itm in item.arr" :key="itm.id" class="sect">44444</div>
    </div>
  </section>
</template>

<script>
import { toDoList } from "../config/index";
export default {
  name: "todo",
  components: {},
  data() {
    return {
      toDoList
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.page-to-do {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding-top: 30px;

  .tab {
    width: 550px;
    height: 350px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 30px;
    &:first-child {
      margin-right: 30px;
    }
    &:nth-child(3) {
      margin-right: 30px;
    }
    .sect {
      width: 100px;
      height: 80px;
      border: 1px solid #ccc;
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
}
</style>
