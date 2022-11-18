<template>
    <h1 class="text-2xl mb-5">İşlem Geçmişi</h1>
    <div>
        <table class="ProcessTable">
            <tr>
                <th class="pr-4"></th>
                <th class="w-64">Şirket İsmi</th>
                <th class="w-96">Cüzdan Adresi</th>
                <th class="w-36">Tarih</th>
                <th class="w-40">Islem</th>
                <th></th>
            </tr>
            <tr v-for="(item, index) in SonIslemler" :key="index">
                <td id="ProcessImg">
                    <div v-if="item.Process">
                        <img src="../assets/svg/GreenArrow.svg" alt="">
                    </div>
                    <div v-else>
                        <img src="../assets/svg/RedArrow.svg" alt="">
                    </div>
                </td>
                <td>{{ item.CompanyName }}</td>
                <td>{{ item.WalletAddress }}</td>
                <td>{{ item.Date }}</td>
                <td>
                    <div v-if="item.Process">
                        Gelen Transistion
                    </div>
                    <div v-else>
                        Giden Transistion
                    </div>
                </td>
                <td class="pr-10 pl-6">
                    <a @click="goster(item.Id)" id="Detay" :value="item.Id" href="#">Detay</a>
                </td>
            </tr>
        </table>
        <n-modal class="modal" v-model:show="display">
            <n-card :bordered="false">
                <div class="font-bold text-4xl mt-5 mb-5">
                    Detay
                </div>
                <div class="UrunBilgi">
                    <div class="flex justify-between flex-row">Cüzdan Adresi:
                        <p>
                            {{ SonIslemler[IdSayac].WalletAddress }}
                        </p>
                    </div>
                    <div class="flex justify-between flex-row">Ürünün Miktarı:
                        <p>
                            {{ SonIslemler[IdSayac].Stock }}
                        </p>
                    </div>
                    <div class="flex justify-between flex-row">Ürünün Cinsi:
                        <p>
                            Urun Cinsi
                        </p>
                    </div>
                    <div class="flex justify-between flex-row">Son Kullanma Tarihi:
                        <p>
                            {{ SonIslemler[IdSayac].Date }}
                        </p>
                    </div>
                    <div class="flex justify-between flex-row">UBB:
                        <p>
                            UBB Bilgisi
                        </p>
                    </div>
                    <div class="flex justify-between flex-row">LOT:
                        <p>
                            LOT Bilgisi
                        </p>
                    </div>
                </div>
            </n-card>
        </n-modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, vShow } from "vue";
import { NModal } from 'naive-ui';
import { NCard } from 'naive-ui';

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

let display = ref(false)
let IdSayac = ref(0)

let goster = (Id: number) => {
    IdSayac.value = Id - 1;
    display.value = true;
}

</script>

<style scoped>
th {
    text-align: left;
    background-color: #FAFAFC;
    box-shadow: rgba(0, 0, 0, 0.35) 0.5px 0.7px 1px;
    font-weight: 400;
    color: #333639BF;
    font-size: 14px;
    height: 50px;
    padding-left: 4px;
}

table {
    border-collapse: collapse;
}

td {
    border-bottom: 1px solid #ddd;
    opacity: 50%;
    height: 40px;
}

#ProcessImg {
    opacity: 100%;
}

.ProcessTable {
    max-height: 703px;
}

.modal {
    border: 1px solid red;
    width: 550px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.35) 10px 10px 10px;
    z-index: 50;
}

.UrunBilgi {
    margin-top: 50px;
    padding-bottom: 20px;
    font-size: 20px;
}

.UrunBilgi p {
    margin: 0%;
}
</style>