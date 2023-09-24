<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductStar',
  props: {
    variant: String,
    category: String
  }
})
</script>

<template>
  <div class="product__star" :class="['product__star--' + category, 'product__star--' + variant]" />
</template>

<style scoped>
  .product__star {
    width: 18px;
    aspect-ratio: 1;
    border-radius: 100%;
    border: 1px solid transparent;
  }

  .product__star--men {
    background-color: var(--color-men-primary);
    border: 1px solid var(--color-men-primary);
  }

  .product__star--women {
    background-color: var(--color-women-primary);
    border: 1px solid var(--color-women-primary);
  }

  .product__star--fill {
    border-color: transparent;
  }

  .product__star--border {
    background-color: var(--color-bg);
  }
</style>
