<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductAction',
  props: {
    category: String,
    variant: String,
    text: String
  }
})
</script>

<template>
    <button class="product__action" :class="['product__action--' + variant, 'product__action--' + category]">{{ text }}</button>
</template>

<style scoped>
.product__action {
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 600;
  padding: 9px 88px;
  cursor: pointer;
  max-width: fit-content;
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
