<template>
  <div class="todoFormContainer">
    <form class="todoForm" @submit.prevent="">
      <div class="separateForm">
        <label class="label" for="title"> Write what to do:</label>
        <input v-model="title" type="text" id="title" placeholder="Todo.." />
      </div>
      <button class="button" @click="getInputValue">Create todo</button>
    </form>
    <div class="smiley">
      <i class="bi bi-emoji-smile"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";

export default class Input extends Vue {
  title = "";
  id!: string;

  getInputValue() {
    this.getId();

    let newTodo = new Todo(this.title, false, this.id);

    this.$emit("getTodoInfo", newTodo);

    this.title = "";
  }

  getId() {
    let getId = Math.random().toString(16).slice(2);
    let gotId = getId.toString();
    this.id = gotId;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/_mixins.scss";

.todoFormContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  grid-row-start: secondR;
  grid-column-start: secondC;

  @include desktop {
    grid-row-start: secondR;
    grid-column-start: fourthC;
  }

  .bi {
    font-size: 30pt;
  }

  display: flex;
  .todoForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    gap: 7px;

    .separateForm {
      width: 143px;
      .label {
        font-size: 15pt;
      }
      #title {
        background-color: rgba(255, 255, 255, 0);
        border: 0;
        border-bottom: 2px dotted black;
      }
    }

    .button {
      cursor: pointer;
      width: 85px;
      border-radius: 10px;
      border: 0;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>
