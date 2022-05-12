<template>
  <div class="collectorContainer">
    <AllTodos :listOfTodos="listOfTodos" />
    <Input @getTodoInfo="storeTodoInfo($event)" />
    <SortTodos :listToSort="listOfTodos" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AllTodos from "../components/todos/AllTodos.vue";
import Input from "../components/form/Input.vue";
import { Todo } from "../models/Todo";
import SortTodos from "./todos/SortTodos.vue";
@Options({
  components: {
    AllTodos,
    Input,
    SortTodos,
  },
})
export default class Collector extends Vue {
  listOfTodos: Todo[] = [];
  doneTodos: Todo[] = [];

  storeTodoInfo(todos: Todo) {
    this.listOfTodos.push(todos);
  }
}
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";

.collectorContainer {
  display: grid;
  grid-template-rows: [firstR] 70px [secondR]290px [thirdR]80px [fourthR] 320px [fifthR]110px [sixtR] 320px [seventR] 55px;
  grid-template-columns: [firstC] 80px[secondC] 280px [thirdC] 80px [fourthC] 280px [fifthC] 90px [sixtC] 290px;
  @include tablet {
    grid-template-rows: [firstR] 70px [secondR]290px [thirdR]80px [fourthR] 320px [fifthR]60px;
  }
}
</style>
