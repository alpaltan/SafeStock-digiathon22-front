<template>
    <div class="text-wrapper">
        <div class="text-title">Blokzincir Tabanlı Kıymetli Stok İzleme Sistemi </div>
        <div class="text mb-8 font-semibold opacity-60">
            Türkiye Cumhuriyeti Ticaret bakanlığı kıymetli stok izleme sistemi.
        </div>
        <n-button round size="large" :focusable="false" color="#EB212E">Cüzdanını Bağla</n-button>
        <router-link to="#" @click="goster" class="footer-text leading-10 opacity-60 mt-2">Nasıl Çalışır?</router-link>
        <n-modal class="modal flex-col justify-center items-center" v-model:show="display">
            <n-card class="succes-modal rounded-2xl  flex-col justify-center items-center" :bordered="false">
                <div class="modal-content-wrapper flex-col justify-evenly items-center">
                    <div class="header flex justify-between items-center">
                        <div class="header-first-part flex justify-center items-center">
                            <img class="exclamation-sign" src="../assets/svg/exclamationDark.svg">
                            <p class="ml-2">Nasıl Çalışır?</p>
                        </div>
                        <img class="close" @click="display = false" src="../assets/svg/error.svg">
                    </div>
                    <div class="content mt-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae elementum elit. Sed a
                        quam et
                        tellus rhoncus interdum. Nunc suscipit odio malesuada vehicula commodo. Integer et consequat
                        turpis.
                    </div>
                </div>
            </n-card>
        </n-modal>

        <!-- succes modali, goster fonksiyonu calistiginda aciliyor 
        
        <n-modal v-model:show="showModel" class="z-50">
            <n-card class="succes-modal rounded-2xl flex-col justify-center items-center" :bordered="false">
                <div class="modal-content flex-col justify-center items-center mt-9">
                    <img class="modal-sign ml-10 mb-3" src="../assets/svg/success.svg">
                    <p class="font-bold text-2xl mb-1">İşlem başarılı</p>
                    <p class="modal-message ml-2 opacity-50">Yönlendiriliyorsunuz</p>
                </div>
            </n-card>
        </n-modal>
        -->
    </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import { ref, vShow } from "vue";
import { NModal } from 'naive-ui';
import { NCard } from 'naive-ui';
let display = ref(false)

let goster = () => {
    display.value = true;
}

</script>
<style scoped>
.text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 1000px;
    height: 460px;
}

.text-title {
    width: 40vw;
    height: 120px;
    font-size: 45px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 2px;
    font-weight: 636;
}

.text {
    width: 30vw;
    height: 45px;
    text-align: center;
    font-size: 18px;
}

.wallet-btn {
    width: 13vw;
    height: 6vh;
    background-color: #D03050;
    padding: 10px;
    text-align: center;
    font-size: 15px;
    border-radius: 70px;
}

.footer-text {
    font-size: 19px;
}

.succes-modal {
    width: 30vw;
    height: 35vh;
}

.modal {
    width: 30vw;
    height: 30vh;
}

.exclamation-sign {
    width: 25px;
    height: 25px;
}

.close {
    width: 25px;
    height: 25px;
}

.content {
    text-align: center;
}
</style>