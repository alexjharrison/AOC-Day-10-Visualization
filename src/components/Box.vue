<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    isActive: boolean
    isOn: boolean
}>()

</script>

<template>
    <div :class="!isActive ? 'bg-white-alpha-10' : !isOn ? 'bg-gray-600' : 'bg-orange-600'"
        class="border-1 h-full border-round border-gray-500">
    </div>
</template>