<template>
  <div v-if="closeModalButton" class="modal">
    <span @click="closeModal" class="closeModalButton">X</span>

    <div class="todoInfo">
      <p>To do: {{ todoToModal.title }}</p>
      <p>Done: {{ todoToModal.done }}</p>
      <p>Id: {{ todoToModal.id }}</p>
    </div>

    <div class="formContainer">
      <ModalInput @changeDone="newDone($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ModalInput from "./ModalInput.vue";

@Options({
  components: {
    ModalInput,
  },
})
export default class Modal extends Vue {
  @Prop() closeModalButton!: boolean;
  @Prop() todoToModal!: Todo;
  listOfDoneTodos: Todo[] = [];

  closeModal() {
    this.$emit("modalFunction");
  }

  newDone(done: boolean) {
    this.todoToModal.done = done;
  }
}
</script>

<style scoped lang="scss">
.modal {
  height: 300px;
  width: 300px;
  background-image: url("@/assets/images/1.png");
  background-position: center;

  .closeModalButton {
    font-size: 18pt;
    position: absolute;
    right: 8px;
    cursor: pointer;
  }

  .todoInfo {
    position: absolute;
    top: 30px;
    left: 10px;
  }

  .formContainer {
    position: absolute;
    top: 130px;
    width: 100%;
  }
}
</style>
