<template>
  <div class="flex">
    <div class="SideBar z-50 relative left-0 top-0 w-64 flex-col flex h-screen">
      <img src="../assets/img/eDevletLogo.png" class="p-6 pt-16" alt="eDevletLogo">
      <router-link :to="item.path" v-for="(item, index) in SideBarItems" :key="index" onmouseout="" onmouseover="">
        <ul class="items-start flex-col">
          <li class="p-3 pl-0 flex items-center">
            <img src="../assets/img/Selector.png" class="absolute scale-75 opacity-0" alt="RedDots">
            <img src="../assets/svg/SidebarIcon.svg" class="pr-5 pl-6 scale-90" alt="BlackDots">
            {{ item.label }}
          </li>
        </ul>
      </router-link>
    </div>
    <div class="RouterDiv ml-32 mt-10 mb-10">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SideBarItems } from "./SideBarConfig"
import { RouterLink } from "vue-router";

</script>

<style scoped>
.SideBar {
  background-image: url("../assets/svg/SidebarBackground.svg");
  background-size: contain;
  height: 100vh;
  border-right: 1px solid whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  font-size: 14px;
}

.SideBar a.router-link-exact-active {
  opacity: 100%;
}

.SideBar a {
  opacity: 50%;
}

.SideBar a.router-link-exact-active img {
  opacity: 100%;
}

.RouterDiv {
  width: 66%;
  justify-content: center;
}
</style>
