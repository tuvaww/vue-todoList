<template>
  <section class="sortContainer">
    <article class="doneTodos">
      <h3>Done Todos:</h3>

      <ol v-if="done.length > 0">
        <li v-for="d in done" :key="d.id">{{ d.title }}</li>
      </ol>
      <button class="doneButton" @click="sortDoneTodos">show done</button>
    </article>

    <article class="notDoneTodos">
      <h3>Not done Todos:</h3>

      <ol v-if="notDone.length > 0">
        <li v-for="d in notDone" :key="d.id">{{ d.title }}</li>
      </ol>
      <button class="notDoneButton" @click="sortNotDoneTodos">
        Show not done
      </button>
    </article>
  </section>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
export default class Done extends Vue {
  @Prop() listToSort!: Todo[];
  done: Todo[] = [];

  notDone: Todo[] = [];

  sortDoneTodos() {
    if (this.done.length > 0) {
      this.done = [];

      this.listToSort.filter((todo) => {
        if (todo.done === true) {
          this.done.push(todo);
        }
      });
    } else {
      this.listToSort.filter((todo) => {
        if (todo.done === true) {
          this.done.push(todo);
        }
      });
    }
  }

  sortNotDoneTodos() {
    if (this.notDone.length > 0) {
      this.notDone = [];

      this.listToSort.filter((todo) => {
        if (todo.done === false) {
          this.notDone.push(todo);
        }
      });
    } else {
      this.listToSort.filter((todo) => {
        if (todo.done === false) {
          this.notDone.push(todo);
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/_mixins.scss";

.sortContainer {
  grid-row-start: sixtR;
  grid-column-start: secondC;

  display: flex;
  gap: 30px;
  justify-content: center;
  padding-top: 25px;

  @include tablet {
    grid-row-start: fourthR;
  }

  @include desktop {
    grid-row-start: fourthR;
    grid-column-start: fourthC;
  }
  .doneTodos,
  .notDoneTodos {
    display: flex;
    flex-direction: column;
    align-items: center;

    .doneButton,
    .notDoneButton {
      width: 70px;
      border-radius: 10px;
      border: 0;
      background-color: rgba(255, 255, 255, 0.6);
    }
    .notDoneButton {
      width: 100px;
    }
  }
}
</style>
