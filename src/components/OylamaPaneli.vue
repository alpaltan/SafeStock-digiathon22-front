<template>
    <h3 class="text-3xl font-bold mb-10 -ml-16">Oylama Paneli</h3>
    <div class="flex -ml-16">
        <div class="LeftSide h-fit mr-10 w-1/4">
            <p>Eklenecek Sirketin Cüzdan Adresi:</p>
            <n-input v-model:value="OylamaBilgi.CompanyWalletID" class="mt-2 mb-10" type="text"
                style="width: 250px;  height: 40px;" placeholder="example: 0x5165a1sd5sa1s5a1132sa1d513d5sa1s5" />
            <p>Eklenecek Sirketin Adi:</p>
            <n-input v-model:value="OylamaBilgi.CompanyName" class="mt-2 mb-5" type="text"
                style="width: 250px; height: 40px;" placeholder="Example INC." />
            <n-checkbox label="Bilgilerin doğruluğunu kabul ediyorum" />
            <div class="mt-5">
                <n-button class="" strong round type="error">
                    Oylama Baslat
                </n-button>
            </div>
        </div>
        <div class="RightSide h-fit pl-5">
            <div class="text-xl mb-5">
                Devam Eden Oylamalar
            </div>
            <table class="Tables">
                <tr>
                    <th class="w-48">Şirket İsmi</th>
                    <th class="w-72">Oylamayı Başlatanın Cüzdan Adresi</th>
                    <th class="w-40">Onaylansın mı?</th>
                </tr>
                <tr v-for="(item, index) in OylamaYapilanSirket" :key="index">
                    <td>{{ item.AddedCompanyName }}</td>
                    <td>{{ item.StartedWalletId }}</td>
                    <td class="justify-between flex mx-2 items-center" id="Onayla">
                        <n-button class="" strong type="primary">Evet </n-button>
                        <n-button class="" strong type="error">Hayir </n-button>
                    </td>
                </tr>
            </table>
            <div class="text-xl mb-5 mt-10">
                Bitmis Oylamalar
            </div>
            <table>
                <tr>
                    <th class="w-48">Şirket İsmi</th>
                    <th class="w-72">Oylamayı Başlatanın Cüzdan Adresi</th>
                    <th class="w-40">Onaylansın mı?</th>
                </tr>
                <tr v-for="(item, index) in OylamaYapilmisSirketler" :key="index">
                    <td>{{ item.AddedCompanyName }}</td>
                    <td>{{ item.StartedWalletId }}</td>
                    <td>
                        <div v-if="item.Sonuc" style="color: green;">
                            Evet
                        </div>
                        <div v-else style="color: red;">
                            Hayir
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NInput, NCheckbox, NButton } from 'naive-ui';
import { ref, vShow } from "vue";
let OylamaBilgi = ref(
    {
        CompanyWalletID: null,
        CompanyName: null,
    })

interface OylamaBilgileri {
    CompanyName: string;
    CompanyWalletID: string;
}

interface OylamaYapilanSirketBilgileri {
    AddedCompanyName: string;
    AddTime: string;
    StartedWalletId: string;
}
let OylamaYapilanSirket: Array<OylamaYapilanSirketBilgileri> = [
    {
        AddedCompanyName: "Özbirkanlar Yazılım A.Ş.",
        AddTime: "18.05.2022",
        StartedWalletId: "0x5165a1sd5sa1s5a1132sa1d513a...",
    },
    {
        AddedCompanyName: "Özbirkanlar Yazılım A.Ş.",
        AddTime: "18.05.2022",
        StartedWalletId: "0x5165a1sd5sa1s5a1132sa1d513a...",
    },
    {
        AddedCompanyName: "Özbirkanlar Yazılım A.Ş.",
        AddTime: "18.05.2022",
        StartedWalletId: "0x5165a1sd5sa1s5a1132sa1d513a...",
    },
    {
        AddedCompanyName: "Özbirkanlar Yazılım A.Ş.",
        AddTime: "18.05.2022",
        StartedWalletId: "0x5165a1sd5sa1s5a1132sa1d513a...",
    },
]
interface BitmisOylamaBilgi {
    AddedCompanyName: string;
    AddTime: string;
    StartedWalletId: string;
    Sonuc: boolean;
}

let OylamaYapilmisSirketler: Array<BitmisOylamaBilgi> = [
    {
        AddedCompanyName: "Özbirkanlar Yazılım A.Ş.",
        AddTime: "18.05.2022",
        StartedWalletId: "0x5165a1sd5sa1s5a1132sa1d513a...",
        Sonuc: true,
    },
    {
        AddedCompanyName: "Özbirkanlar Yazılım A.Ş.",
        AddTime: "18.05.2022",
        StartedWalletId: "0x5165a1sd5sa1s5a1132sa1d513a...",
        Sonuc: false,
    },
    {
        AddedCompanyName: "Özbirkanlar Yazılım A.Ş.",
        AddTime: "18.05.2022",
        StartedWalletId: "0x5165a1sd5sa1s5a1132sa1d513a...",
        Sonuc: true,
    },
    {
        AddedCompanyName: "Özbirkanlar Yazılım A.Ş.",
        AddTime: "18.05.2022",
        StartedWalletId: "0x5165a1sd5sa1s5a1132sa1d513a...",
        Sonuc: true,
    },
]

</script>

<style scoped>
.Tables {
    height: 251px;
    overflow-y: scroll;
    border-collapse: collapse;
    border-radius: 15px 15px 0px 0px;
}

.RightSide {
    border-left: 1px solid #33363940;
    width: 800px;
}

th {
    height: 50px;
    padding-left: 15px;
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: left;
    background-color: #FAFAFC;
    box-shadow: rgba(0, 0, 0, 0.35) 0.5px 0.7px 1px;
    font-weight: 500;
    color: #333639BF;

}

table {
    border-collapse: collapse;
    border-radius: 15px 15px 0px 0px;
}

#Onayla {
    opacity: 100%;
}

td {
    height: 50px;
    padding: 4px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    opacity: 50%;
}
</style>