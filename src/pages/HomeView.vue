<template>
  <div class="backround-wrapper w-full">
    <div class="logos mt-10">
      <HomeLogo />
    </div>
    <div class="text">
      <HomeText />
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeLogo from "@/components/HomeLogoGroup.vue";
import HomeText from "@/components/HomeTextPart.vue";
</script>

<style scoped>
.backround-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/img/homebackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 110% 110%;
  background-position: center center;
  animation: shrink 7s infinite alternate;
}

@keyframes shrink {
  0% {
    background-size: 110% 110%;
  }

  100% {
    background-size: 100% 100%;
  }
}
</style>