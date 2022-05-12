<template>
  <form class="doneForm" @submit.prevent>
    <div class="separate">
      <label for="done">Is this todo done ? (true/false)</label>
      <input
        v-model="doneInput"
        type="text"
        id="done"
        placeholder="true/false"
      />
    </div>
    <button class="buttonDone" @click="sendDone">Change</button>
  </form>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class ModalInput extends Vue {
  doneInput = "";

  sendDone() {
    let newDone = this.doneInput.toLowerCase() === "true";
    this.$emit("changeDone", newDone);
  }
}
</script>

<style scoped lang="scss">
.doneForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .buttonDone {
    width: 70px;
    border-radius: 10px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }

  .separate {
    width: 206px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    #done {
      background-color: rgba(255, 255, 255, 0);
      border: 0;
      border-bottom: 2px dotted black;
      color: black;
    }
  }
}
</style>
