<template>
    <n-modal class="flex-col justify-center items-center rounded-xl" v-model:show="showModal">
        <n-card class="succes-modal rounded-2xl  flex-col justify-center items-center" :bordered="false">
            <img class="modal-sign ml-40 mb-3 mt-6" src="../assets/svg/exclamationDark.svg">
            <p class="modal-title text-2xl mb-1 font-semibold">Oylama Başlatmak İstediğinize Emin Misiniz?</p>
            <div class="buttons flex justify-between items-center ml-24">
                <n-button class="start-btn" type="error">
                    Başlat
                </n-button>
                <n-button class="cansel-btn" strong secondary type="error">
                    İptal Et
                </n-button>
            </div>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NModal } from 'naive-ui';
import { ref } from 'vue';
import { NCard } from 'naive-ui';
import { NButton } from 'naive-ui';
const showModal = ref(true)

</script>

<style scoped>
.succes-modal {
    width: 30vw;
    height: 40vh;
}

.modal-content {
    width: 10vw;
}

.modal-title {
    width: 25vw;
    text-align: center;
}

.buttons {
    width: 13vw;
    height: 10vh;
}

.modal-message {
    width: 20vw;
    text-align: center;
    font-size: 14px;
}

.try-btn {
    width: 6vw;
    margin-left: 114px;
    border-radius: 18px;
    color: #fff;
    background-color: #D03050;
}

.start-btn {
    width: 6vw;
    height: 5vh;
    background-color: #D03050;
    border-radius: 15px;
}

.cansel-btn {
    width: 6vw;
    height: 5vh;
    border-radius: 13px;
}
</style>