<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="background">
    <RouterView />
  </div>
  <img src="./assets/svg/bakirchainlogo.svg" class="absolute bottom-2 right-2 w-20" alt="">
</template>

<style scoped>
.background {
  background-image: url(./assets/svg/CompanyMainPageBackgroundCornerDecor.svg);
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 500px;
}
</style>
