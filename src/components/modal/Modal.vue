<template>
  <div v-if="closeModalButton" class="modal">
    <div @click="closeModal" class="x">X</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
export default class Modal extends Vue {
  @Prop() closeModalButton!: boolean;

  closeModal() {
    this.$emit("modalFunction");
  }
}
</script>

<style scoped lang="scss">
.modal {
  height: 300px;
  width: 300px;
  background-color: white;
  border: 1px solid black;
}
</style>
