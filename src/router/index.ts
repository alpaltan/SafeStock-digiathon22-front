import sidebarLayoutVue from "@/layouts/sidebar-layout.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import History from "../components/HistoryPage.vue";
import TransactionGet from "../components/TransactionGet.vue";
import UrunGonder from "../components/UrunGonder.vue";
import OylamaPaneli from "../components/OylamaPaneli.vue";
import Home from "../components/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "entrance",
      component: HomeView,
    },
    {
      path: "/",
      name: "home",
      redirect: "/home",
      component: sidebarLayoutVue,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
        },
        {
          path: "/history",
          name: "IslemGecmisi",
          component: History,
        },
        {
          path: "/transaction-get",
          name: "Transaction İstekler",
          component: TransactionGet,
        },
        {
          path: "/urun-gonder",
          name: "Ürün Gönder",
          component: UrunGonder,
        },
        {
          path: "/oylama-paneli",
          name: "Oylama Paneli",
          component: OylamaPaneli,
        },
      ]
    },
  ],
});

export default router;
