<template>
  <section v-if="isShown" class="modalContainer">
    <article class="modalLayer">
      <Modal
        :todoToModal="clickedTodo"
        :closeModalButton="isShown"
        @modalFunction="closeModal"
      />
    </article>
  </section>

  <article class="allTodosContainer">
    <p class="urTodosHeader">All your Todos:</p>

    <div class="todoList">
      <ol v-if="listOfTodos.length > 0">
        <li
          class="todoItem"
          v-for="t in listOfTodos"
          :key="t.id"
          @click="showModal(t)"
        >
          {{ t.title }}
        </li>
      </ol>
      <div class="noTodos" v-else>
        <h4>Start with creating a Todo</h4>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Todo } from "@/models/Todo";
import { Prop } from "vue-property-decorator";
import Modal from "../modal/Modal.vue";
@Options({
  components: {
    Modal,
  },
})
export default class AllTodos extends Vue {
  @Prop() listOfTodos!: Todo[];
  modalContainer = "";
  isShown = false;
  clickedTodo!: Todo;

  showModal(todo: Todo) {
    this.isShown = !this.isShown;
    this.clickedTodo = todo;
  }

  closeModal() {
    this.isShown = !this.isShown;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/_mixins.scss";

.modalContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalLayer {
    position: fixed;
    z-index: 1;
  }
}

.allTodosContainer {
  height: 300px;
  grid-row-start: fourthR;
  grid-column-start: secondC;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 10px;

  @include tablet {
    grid-row-start: secondR;
    grid-column-start: fourthC;
  }

  @include desktop {
    grid-row-start: secondR;
    grid-column-start: sixtC;
  }

  .urTodosHeader {
    font-size: 16pt;
  }
}

.todoItem {
  cursor: pointer;
  font-size: 14pt;
}
</style>
