<template>
  <div
    ref="element"
    :style="styles"
    class="transition-all duration-500"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
})

const element = ref(null)
const styles = ref({
  opacity: 0,
  transform: 'translateY(20px)'
})

onMounted(() => {
  setTimeout(() => {
    styles.value = {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }, props.delay)
})
</script>