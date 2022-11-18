<template>
    <div class="table-wrapper">
        <div class="header-content flex justify-between items-center mb-3">
            <h3 class="font-bold text-2xl">İşlem istekleri</h3>
        </div>
        <table class="table">
            <tr class="table-title bg-slate-100 text-gray-600 text-left">
                <th class="company-name px-4">Şirket İsmi</th>
                <th class="wallet-address">Cüzdan Adresi</th>
                <th class="amountOfRequest">İstek Miktarı</th>
                <th class="Process-btn px-4">İşlem</th>
            </tr>
            <tr class="table-content bg-white text-zinc-400 text-sm" v-for="item in GelenUrunIstekleri" :key="item.Id">
                <td class="company-name px-4">{{ item.GelenSirketAdi }}</td>
                <td>{{ item.GelenWalletID }}</td>
                <td>{{ item.GelenMiktar }}</td>
                <td class="button-row">
                    <div class="buttons flex justify-evenly items-center">
                        <router-link to="#"
                            class="confirm-btn rounded-lg font-semibold flex justify-center items-center">Onayla
                        </router-link>
                        <router-link to="#"
                            class="objection-btn rounded-lg font-semibold flex justify-center items-center">İtiraz
                            Et
                        </router-link>
                    </div>
                </td>
            </tr>
        </table>
        <n-modal v-model:show="OnaylaDisplay">
            <n-card style="width: 600px; height: 550px;" :bordered="false" size="huge" role="dialog" aria-modal="true">
                <div class="flex flex-col">
                    <div class="items-center flex text-2xl justify-center">
                        Onaylamak istediğiniz emin misiniz? </div>
                    <div class="w-full">
                        <div class="w-1/2">

                        </div>
                        <div class="w-1/2">

                        </div>
                    </div>
                </div>
            </n-card>
        </n-modal>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { NModal } from 'naive-ui';
import { NCard } from 'naive-ui';

let OnaylaDisplay = ref(false)
let ItirazDisplay = ref(false)

let OnaylaGoster = () => {
    OnaylaDisplay.value = true
}
let ItirazGoster = () => {
    ItirazDisplay.value = true
}

interface GelenIslemler {
    Id: number;
    GelenSirketAdi: string;
    GelenWalletID: string;
    GelenMiktar: number;
    GelenUrunCins: string;
    GelenUrunSKT: string;
    GelenUrunUBB: string;
    GelenUrunLOT: string;
}

const GelenUrunIstekleri: Array<GelenIslemler> = [
    { Id: 1, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 2, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 3, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 4, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 5, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 6, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 7, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 8, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 9, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 10, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 11, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 12, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" },
    { Id: 13, GelenSirketAdi: "Özbirkanlar Yazılım AŞ", GelenWalletID: "0x5165a1sd5sa1s5a1132sa1d513a", GelenMiktar: 2345, GelenUrunCins: "Medikal", GelenUrunSKT: "10.12.2023", GelenUrunLOT: "hasdfga", GelenUrunUBB: "asdjghsd" }
]

</script>

<style scoped>
.table-wrapper {
    overflow: hidden;
}

.header-content {
    height: 40px;
}

.table {
    width: 75vw;
    border-radius: 15px;
}

.table-title {
    height: 50px;
}

.button-row {
    width: 300px;
}

.buttons {
    width: 300px;
}

.table-content {
    line-height: 42px;
}

.confirm-btn {
    border: 1px solid #EFFFEF;
    color: #1E9858;
    background-color: #EFFFEF;
    width: 110px;
    height: 35px;
}

.objection-btn {
    border: 1px solid #FFEFEF;
    width: 110px;
    height: 35px;
    background-color: #FFEFEF;
    color: #D03050;
}

.company-name {
    width: 15vw;
}

.wallet-address {
    width: 100px;
}

.amountOfRequest {
    width: 3vw;
}

.Process-btn {
    width: 5vw;
}
</style>