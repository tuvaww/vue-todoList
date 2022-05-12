<template>
  <div class="collectorContainer">
    <AllTodos :listOfTodos="listOfTodos" />
    <Input @getTodoInfo="storeTodoInfo($event)" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AllTodos from "../components/todos/AllTodos.vue";
import Input from "../components/form/Input.vue";
import { Todo } from "../models/Todo";

@Options({
  components: {
    AllTodos,
    Input,
  },
})
export default class Collector extends Vue {
  listOfTodos: Todo[] = [];

  storeTodoInfo(todos: Todo) {
    this.listOfTodos.push(todos);
    //console.log("i collector", this.listOfTodos);
  }
}
</script>

<style lang="scss">
.collectorContainer {
  display: grid;
  grid-template-rows: [firstR] 70px [secondR]290px [thirdR]80px [fourthR] 300px [fifthR]120px [sixtR] 330px;
  grid-template-columns: [firstC] 80px[secondC] 280px;
}
</style>
