<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductAction',
  props: {
    category: String,
    variant: String,
    text: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
    <button class="product__action" :class="['product__action--' + variant, 'product__action--' + category]" :disabled='disabled'>{{ text }}</button>
</template>

<style scoped>
.product__action {
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 600;
  padding-block: 9px;
  min-width: 150px;
  width: 100%;
  max-width: 250px;
  cursor: pointer;
  white-space: nowrap;
}

.product__action:hover {
  filter: brightness(.75);
  transform: translateY(-1px);
}

.product__action:active {
  transform: translateY(-2px);
}

.product__action--men {
  background-color: var(--color-men-primary);
  border-color: var(--color-men-primary);
  color: var(--color-men-primary);
}

.product__action--loading {
  cursor: default;
  width: 100%;
  height: 35px;
  background-color: var(--color-unavailable-bg);
  animation: loading 1s alternate infinite;
}

.product__action--women {
  background-color: var(--color-women-primary);
  border-color: var(--color-women-primary);
  color: var(--color-women-primary);
}

.product__action--unavailable {
  background-color: var(--color-unavailable-primary);
  border-color: var(--color-unavailable-primary);
  color: var(--color-unavailable-primary);
}

.product__action--fill {
  border-color: transparent;
  color: white;
}

.product__action--border {
  background-color: transparent;
}
</style>
