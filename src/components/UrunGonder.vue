<template>
    <div class="flex-col flex">
        <p class="text-4xl mt-10 mb-20 font-bold">Ürün Gönderme Paneli</p>
        <div class="h-60 flex">
            <div class="LeftSide w-1/3">
                <p>Ürün Cinsi*</p>
                <n-input v-model:value="GidenUrunBilgileri.Cins" class="mt-2 mb-10" type="text" style=" height: 40px;"
                    placeholder="Ürünün Cinsi" />
                <p>Ürün Miktarı*</p>
                <n-input v-model:value="GidenUrunBilgileri.Miktari" type="text" class="mt-2 mb-10"
                    style=" height: 40px;" placeholder="Ürünün Miktarı" />
            </div>
            <div class="RightSide w-2/3 ml-16">
                <p>Ürünün Gideceği Cüzdan Adresi*</p>
                <n-input v-model:value="GidenUrunBilgileri.ArrivingWalletID" class="mt-2 mb-10" type="text"
                    style=" height: 40px;" placeholder="example: 0x5165a1sd5sa1s5a1132sa1d513d5sa1s5" />
                <div class="justify-between flex items-center">
                    <div>
                        <p>Son Kullanma Tarihi*</p>
                        <n-input v-model:value="GidenUrunBilgileri.SonKullanmaTarihi" class="mt-2 mb-10" type="text"
                            style=" height: 40px;  width: 150px;" placeholder="10.10.2022" />
                    </div>
                    <div>
                        <p>UBB*</p>
                        <n-input v-model:value="GidenUrunBilgileri.UBB" class="mt-2 mb-10" type="text"
                            style=" height: 40px; width: 150px;" placeholder="fdsdgf44sd" />
                    </div>
                    <div>
                        <p>LOT*</p>
                        <n-input v-model:value="GidenUrunBilgileri.LOT" class="mt-2 mb-10" type="text"
                            style=" height: 40px;  width: 150px;" placeholder="sfs45dvf" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
                <n-upload-dragger>
                    <div style="margin-bottom: 12px">
                        <n-icon size="48" :depth="3">
                            <img src="../assets/svg/upload.svg" alt="">
                        </n-icon>
                    </div>
                    <n-text style="font-size: 16px">
                        Dosya yüklemek için tıkla veya dosyayı buraya sürükle.
                    </n-text>
                    <n-p depth="3" style="margin: 8px 0 0 0">
                        Dosya veya Dosyalari Yukle
                    </n-p>
                </n-upload-dragger>
            </n-upload>
        </div>
        <div class="flex-row inline-flex items-center justify-between">
            <p class="">* Girilmesi zorunlu veriler</p>
            <div class="float-right">
                <n-checkbox v-model:checked="checked" label="Bilgilendirme metnini okudum, onaylıyorum.*"
                    @click:checked.value="true" />
                <n-button strong round type="error">
                    Gönder
                </n-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NInput, NUpload, NP, NText, NIcon, NUploadDragger, NButton, NCheckbox } from 'naive-ui';
import { ref } from "vue"
const checkedRef = ref(false)
const checked = checkedRef

let GidenUrunBilgileri = ref(
    {
        Cins: null,
        Miktari: null,
        ArrivingWalletID: null,
        SonKullanmaTarihi: null,
        UBB: null,
        LOT: null
    })

interface UrunGonderme {
    GidecegiWalletID: string;
    GidecekMiktar: number;
    GidecekUrunCins: string;
    GidecekUrunSKT: string;
    GidecekUrunUBB: string;
    GidecekUrunLOT: string;
}


</script>

<style scoped>

</style>