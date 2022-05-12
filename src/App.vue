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
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Indie Flower", cursive;
  .mainContainer {
    background-image: url("@/assets/images/post-it7.jpeg");
    background-repeat: repeat;
    width: 100vw;
    // height: 100vh;
  }
}
</style>
