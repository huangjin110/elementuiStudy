<template>
    <div class="my-toast">
        {{ text }}
    </div>
</template>

<script setup>
defineProps({
    // value:{
    //     type: Boolean,
    //     defualt: false
    // },
    text: {
        type: String,
        default: 'TOAST'
    }
})
</script>

<style scoped>
.my-toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
    color: #f1f1f1;
    font-size: 14px;
    padding: 4px 8px;
    background: rgba(0, 0, 0, .8);
}
</style>