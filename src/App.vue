<template>
  <main class="mainContainer">
    <Collector />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Collector from "./components/Collector.vue";

@Options({
  components: {
    Collector,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  .mainContainer {
    background-image: url("@/images/post-it7.jpeg");
    background-repeat: repeat;
    width: 100vw;
    // height: 100vh;
  }
}
</style>
