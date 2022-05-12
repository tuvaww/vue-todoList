<template>
  <div class="todoFormContainer">
    <form class="todoForm" @submit.prevent="">
      <div class="separateForm">
        <label for="title">Write what to do:</label>
        <input v-model="title" type="text" id="title" placeholder="Todo.." />
      </div>
      <button class="button" @click="getInputValue">Create todo</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";

export default class Input extends Vue {
  title = "";
  id!: string;
  //newTodo!: Todo;

  getInputValue() {
    this.getId();

    let newTodo = new Todo(this.title, false, this.id);

    this.$emit("getTodoInfo", newTodo);
  }

  getId() {
    let getId = Math.random().toString(16).slice(2);
    let gotId = getId.toString();
    this.id = gotId;
  }
}
</script>

<style scoped lang="scss">
.todoFormContainer {
  grid-row-start: secondR;
  grid-column-start: secondC;

  display: flex;
  // justify-content: ;
  .todoForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    gap: 5px;

    .separateForm {
      width: 143px;
    }

    .button {
      width: 85px;
      border-radius: 5px;
    }
  }
}
</style>
