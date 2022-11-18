<template>
    <n-modal class="flex-col justify-center items-center rounded-xl" v-model:show="showModal">
        <n-card class="succes-modal rounded-2xl  flex-col justify-center items-center" :bordered="false">
            <img class="modal-sign ml-32 mb-3 mt-9" src="../assets/svg/error.svg">
            <p class="text-2xl mb-1 ml-32 font-semibold">Hata</p>
            <p class="modal-message opacity-50 mb-5">Lütfen bilgileri kontrol edin ve tekrar deneyin</p>
            <router-link class="try-btn ml-20 px-11 py-2 rounded-md" to="#">Tekrar Dene</router-link>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
import { NModal } from 'naive-ui';
import { ref } from 'vue';
import { NCard } from 'naive-ui';
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

.modal-message {
    width: 20vw;
}

.try-btn {
    width: 140px;
    height: 20px;
    border: 2px solid #E0E0E6;
}
</style>