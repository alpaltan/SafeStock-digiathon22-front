<template>
    <h3 class="text-3xl mb-7">Hos Geldiniz</h3>
    <div class="carousel">
        <n-carousel draggable autoplay>
            <img src="../assets/img/Artboard1.png" class="carousel-img">
            <img src="../assets/img/Artboard2.png" class="carousel-img">
            <img class="carousel-img" src="../assets/img/Artboard3.png">
            <img class="carousel-img" src="../assets/img/Artboard4.png">
            <img class="carousel-img" src="../assets/img/Artboard5.png">
        </n-carousel>
    </div>
    <div class="flex">
        <div class="flex flex-col w-1/2">
            <div class="mt-10">
                <n-page-header subtitle="Vergi Numarasi">
                    <n-grid :cols="2">
                        <n-gi class="">
                            <n-statistic label="Wallet ID" :value="WalletID" />
                        </n-gi>
                        <n-gi>
                        </n-gi>
                        <n-gi>
                            <n-statistic label="Toplam Transition Miktarı" :value="ToplamTransValue" />
                        </n-gi>
                        <n-gi>
                            <n-statistic label="Onaylanan Transition Miktarı" :value="OnaylananTransValue" />
                        </n-gi>
                    </n-grid>
                    <template #title>
                        <a href="#" style="text-decoration: none; color: inherit">
                            Şirket Adı
                        </a>
                    </template>
                    <template #avatar>
                        <img src="../assets/img/BakirchainKareLogo.jpg" class="w-8" alt="">
                    </template>
                </n-page-header>
            </div>
            <div class="LastLogins mt-10 h-52 w-96">
                <p class="text-xl pb-2">
                    Son Giriş
                </p>
                <table>
                    <tr>
                        <th>IP Adresi</th>
                        <th>Zaman</th>
                        <th>Tarih</th>
                        <th>Cihaz</th>
                    </tr>
                    <tr v-for="(item, index) in LogTableItems" :key="index">
                        <td>{{ item.IpLog }}</td>
                        <td>{{ item.TimeLog }}</td>
                        <td>{{ item.DateLog }}</td>
                        <td>{{ item.Device }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="SonIslemler w-1/2 pl-18 overflow-y-scroll ">
            <p class="text-2xl mt-6 mb-4 ">
                Son İşlemler
            </p>
            <table>
                <tr>
                    <th>Şirket İsmi</th>
                    <th>Cüzdan Adresi</th>
                </tr>
                <tr v-for="(item, index) in SonIslemler" :key="index">
                    <td>{{ item.CompanyName }}</td>
                    <td>{{ item.WalletAddress }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
    NCarousel, NBreadcrumb, NPageHeader, NSpace, NButton,
    NGi, NGrid, NBreadcrumbItem, NStatistic
} from "naive-ui";

interface SonIslemlerLog {
    Id: number;
    CompanyName: string;
    WalletAddress: string;
    Process: boolean;
    Date: string;
    Stock: number;
}

const SonIslemler: Array<SonIslemlerLog> = [
    { Id: 1, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: true, Stock: 100 },
    { Id: 2, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513b", Date: '24/01/2021', Process: true, Stock: 100 },
    { Id: 3, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sasdfasdfasdf", Date: '24/01/2021', Process: false, Stock: 123 },
    { Id: 4, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132saasd", Date: '24/01/2021', Process: true, Stock: 223 },
    { Id: 5, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1asd", Date: '24/01/2021', Process: true, Stock: 173 },
    { Id: 6, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1dasd", Date: '24/01/2021', Process: false, Stock: 1123 },
    { Id: 7, CompanyName: "Apple INC", WalletAddress: "0x5165asdfgas5fasdf", Date: '24/01/2021', Process: false, Stock: 100 },
    { Id: 8, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: false, Stock: 75 },
    { Id: 5, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: true, Stock: 112 },
    { Id: 6, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: true, Stock: 19 },
    { Id: 7, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: true, Stock: 1 },
    { Id: 8, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: false, Stock: 100 },
    { Id: 9, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: true, Stock: 100 },
    { Id: 10, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: true, Stock: 100 },
    { Id: 11, CompanyName: "Apple INC", WalletAddress: "0x5165a1sd5sa1s5a1132sa1d513a", Date: '24/01/2021', Process: false, Stock: 100 },
]


interface SonGirisLog {
    IpLog: string;
    TimeLog: string;
    DateLog: string;
    Device: string;
    Id: number;
}
const LogTableItems: Array<SonGirisLog> = [
    { Id: 1, IpLog: "192.168.x.x", DateLog: "24.01.20xx", TimeLog: "19:12:40", Device: "Windows" },
    { Id: 2, IpLog: "192.168.x.x", DateLog: "24.01.20xx", TimeLog: "19:12:40", Device: "MacOS" },
    { Id: 3, IpLog: "192.168.x.x", DateLog: "24.01.20xx", TimeLog: "19:12:40", Device: "Linux" },
    { Id: 4, IpLog: "192.168.x.x", DateLog: "24.01.20xx", TimeLog: "19:12:40", Device: "Windows" },

]




let WalletID = ref("0x5165a1sd5sa1s5a1132sa1d513a")
let ToplamTransValue = ref("456")
let OnaylananTransValue = ref("232")

</script>

<style scoped>
.carousel-img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 25px;
}

.carousel {
    width: fit-content;
    border-radius: 15px;
    object-fit: cover;
}

.LastLogins table {
    border-collapse: collapse;
    width: 100%;
}

.LastLogins td {
    padding: 4px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    opacity: 50%;
}

.LastLogins th {
    border: 1px solid #ddd;
    padding: 4px;
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: center;
    background-color: #FAFAFC;
    box-shadow: rgba(0, 0, 0, 0.35) 0.5px 0.7px 1px;
    font-weight: 500;
}

.SonIslemler table {
    border-collapse: collapse;
    width: 100%;
}

.SonIslemler {
    max-height: 430px;
    margin-top: 50px;
}

.SonIslemler td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    height: 10px;
    opacity: 0.5;
    text-align: left;
    position: relative;
}

.SonIslemler th {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    background-color: #FAFAFC;
    box-shadow: rgba(0, 0, 0, 0.35) 0.5px 0.7px 1px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
}
</style>