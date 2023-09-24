<script lang='ts'>
import { defineComponent } from 'vue'
import './assets/css/global.css'
import ProductStar from './components/ProductStar.vue'
import ProductAction from './components/ProductAction.vue'
import { getProductById } from './data/fakeStoreApi'

type productType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: number;
}

export default defineComponent({
  name: 'MainPage',
  components: { ProductStar, ProductAction },
  data () {
    return {
      category: 'men',
      productData: {} as productType,
      isLoading: true,
      index: 1,
      products: [] as productType[]
    }
  },
  watch: {
    index () {
      this.getProduct()
    }
  },
  methods: {
    getProduct () {
      this.isLoading = true

      // Check in products, if exist use it
      const resultInProducts = this.products.find((item) => item.id === this.index && (item.category === "men's clothing" || item.category === "women's clothing"))
      if (resultInProducts !== undefined) {
        this.category = resultInProducts.category === "men's clothing" ? 'men' : 'women'
        this.productData = resultInProducts
        document.title = resultInProducts.title
        this.isLoading = false
        return
      }

      // Else fetch from API
      getProductById(this.index).then((data) => {
        // Generate random rating
        data.rating = Math.round(Math.random() * (5 - 1) + 1)

        this.products.push(data)

        // Don't update product data if category is not men or women, else update it
        if (data.category !== "men's clothing" && data.category !== "women's clothing") {
          this.index++
          document.title = 'Loading'
        } else {
          this.category = data.category === "men's clothing" ? 'men' : 'women'
          this.productData = data
          document.title = data.title
          this.isLoading = false
        }
      })
    }
  },
  async mounted () {
    await this.getProduct()
  },
  created () {
    // On first load, check params if exist, set the current index from params
    let url: string | URL = window.location.href
    url = new URL(url)

    let id
    if (url.searchParams.get('id')) {
      id = url.searchParams.get('id')
      this.index = parseInt(`${id}`)
    }
  }
})
</script>

<template>
  <div class="product" v-if='isLoading'>
    <div class="foreground foreground--unavailable" />
    <div class="product__preview product__preview--loading" />
    <div class="product__information">
      <div>
        <div class="product__heading">
          <div class="product__title product__title--loading" />
          <div class="product__subtitle">
            <div class="product__category product__category--loading" />
            <div class="product__rating product__rating--loading" />
          </div>
        </div>
        <hr style="border-color: rgba(0, 0, 0, 20%)" />
      </div>
      <div class="product__description product__description--loading" />
      <div class='product__bottom'>
          <hr style="width: 100%; border-color: rgba(0, 0, 0, 20%)" />
          <div class='product__price product__price--loading' />
        <div class="product__actions">
          <ProductAction category='loading' :disabled="true" />
          <ProductAction category='loading' :disabled="true" />
        </div>
      </div>
    </div>
  </div>

  <div class="product" v-if='productData && !isLoading'>
    <div class="foreground" :class="'foreground--' + category" />
    <div class="product__preview">
      <img :src='productData.image' :alt='productData.title' />
    </div>
    <div class="product__information">
      <div>
        <div class="product__heading">
          <h1 :title='productData.title' v-text='productData.title' class="product__title" :class="'product__title--' + category" />
          <div class="product__subtitle">
            <div title='Product category' class="product__category" v-text='productData.category' />
            <div class="product__rating">
              <div title='Product rating' class="product__rating-text">{{  productData.rating + `${productData.rating < 5 ? '.' + Math.floor(Math.random() * 5) : ""}`}}</div>
              <div class="product__rating-star">
                <ProductStar :category='category' :variant='"fill"' v-for='(rating, key, index) in productData.rating' :key='index'/>
                <ProductStar :category='category' :variant='"border"' v-for='(rating, key, index) in (5 - productData.rating)' :key='index'/>
              </div>
            </div>
          </div>
        </div>
        <hr style="border-color: rgba(0, 0, 0, 20%)" />
      </div>
      <p class="product__description" v-text='productData.description' />
      <div class='product__bottom'>
          <hr style="width: 100%; border-color: rgba(0, 0, 0, 20%)" />
          <strong class='product__price' :class="'product__price--' + category" v-text='"$" + productData.price' />
        <div class="product__actions">
          <ProductAction text='Buy now' :category='category' variant='fill' />
          <ProductAction text='Next product' :category='category' variant='border' @click='index < 20 ? index++ : index = 1' />
        </div>
      </div>
    </div>
  </div>

  <div class="product" v-if='!productData && !isLoading'>
    <div class="foreground foreground--unavailable" />
    <div class='product__unavailable'>
      <span class='product__unavailable-title'>This product is unavailable to show</span>
      <ProductAction text='Next product' category='unavailable' variant='border' @click='index < 20 ? index++ : index = 1' />
    </div>
  </div>
</template>

<style>
body {
  position: relative;
  padding-inline: 2rem;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 30px;
}

.foreground {
  width: 100%;
  height: 75vh;
  background-image: url("./assets/images/bg-pattern.svg");
  position: absolute;
  z-index: -999;
  top: 0;
  left: 0;
}

.foreground--men {
  background-color: var(--color-men-bg);
}

.foreground--women {
  background-color: var(--color-women-bg);
}

.foreground--unavailable {
  background-color: var(--color-unavailable-bg);
}

.product {
  display: flex;
  overflow: auto;
  gap: 68px;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding-block: 50px;
  padding-inline: clamp(3rem, 2.4000rem + 2.0000vw, 4rem);
  background-color: var(--color-bg);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 25%);
  border-radius: 10px;
  max-width: 1035px;
  min-height: 450px;
}

.product__unavailable {
  width: clamp(200px, 60vw, 750px);
  min-height: 440px;
  align-items: center;
  justify-content: center;
  background-image: url('./assets/images/product-unavailable.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.product__unavailable-title {
  font-size: 20px;
  font-weight: 400;
  color: black;
  text-align: center;
  line-height: 24px;
}

.product__preview {
  width: 300px;
  overflow: hidden;
}

@media screen and (max-width: 1248px) {
  .product__preview {
    width: 100%;
    max-width: 530px;
  }
}

.product__preview img {
  width: 100%;
  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
}

.product__preview--loading {
  width: 100%;
  max-width: 300px;
  background-color: var(--color-unavailable-bg);
  animation: loading 1s alternate infinite;
}

.product__information {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 480px;
}

@media screen and (max-width: 1248px) {
  .product__information {
    max-width: inherit;
    min-width: 300px;
  }
}

.product__heading {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}

.product__title {
  font-size: 28px;
  font-weight: 600;
  display: -webkit-box;
  text-wrap: stable;
  line-height: 33px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
}

.product__title--loading {
  width: 500px;
  height: 35px;
  background-color: var(--color-unavailable-bg);
  animation: loading 1s alternate infinite;
}

.product__title--men {
  color: var(--color-men-primary);
}

.product__title--women {
  color: var(--color-women-primary);
}

.product__category, .product__rating-text {
  color: var(--color-subheading);
}

.product__category--loading {
  width: 150px;
  height: 20px;
  background-color: var(--color-unavailable-bg);
  animation: loading 1s alternate infinite;
}

.product__subtitle {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.product__rating {
  display: flex;
  column-gap: 5px;
  align-items: center;
}

.product__rating--loading {
  width: 150px;
  height: 20px;
  background-color: var(--color-unavailable-bg);
  animation: loading 1s alternate infinite;
}

.product__rating-star {
  display: flex;
  column-gap: 2px;
}

.product__description {
  font-weight: 400;
  line-height: 24px;
  color: var(--color-paragraph);
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow-y: auto;
}

.product__description--loading {
  height: 160px;
  background-color: var(--color-unavailable-bg);
  animation: loading 1s alternate infinite;
}

.product__bottom {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  row-gap: 15px;
}

.product__price {
  font-weight: 600;
  font-size: 26px;
}

.product__price--loading {
  width: 120px;
  height: 30px;
  background-color: var(--color-unavailable-bg);
  animation: loading 1s alternate infinite;
}

.product__price--men {
  color: var(--color-men-primary);
}

.product__price--women {
  color: var(--color-women-primary);
}

.product__actions {
  display: flex;
  column-gap: 20px;
}
</style>
