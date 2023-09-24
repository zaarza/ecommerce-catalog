<script lang='ts'>
import { defineComponent } from 'vue'
import './assets/css/global.css'

export default defineComponent({
  name: 'MainPage',
  components: {},
  data () {
    return {
      isProductAvailable: true,
      category: 'men'
    }
  }
})
</script>

<template>
  <div class="product" v-if='isProductAvailable'>
    <div class="foreground" :class="'foreground--' + category" />
    <div class="product__preview">
      <img src="./assets/images/product-sample.png" alt="" />
    </div>
    <div class="product__information">
      <div>
        <div class="product__heading">
          <h1 title='Mens Casual Slim Fit' class="product__title" :class="'product__title--' + category">Mens Casual Slim Fit</h1>
          <div class="product__subtitle">
            <div title='Product category' class="product__category">men's clothing</div>
            <div class="product__rating">
              <div title='Product rating' class="product__rating-text">2.9/5</div>
              <div class="product__rating-star">
                <div
                  class="product__star product__star--fill"
                  :class="'product__star--' + category"
                />
                <div
                  class="product__star product__star--fill"
                  :class="'product__star--' + category"
                />
                <div
                  class="product__star product__star--fill"
                  :class="'product__star--' + category"
                />
                <div
                  class="product__star product__star--fill"
                  :class="'product__star--' + category"
                />
                <div
                  class="product__star product__star--fill"
                  :class="'product__star--' + category"
                />
              </div>
            </div>
          </div>
        </div>
        <hr style="border-color: rgba(0, 0, 0, 20%)" />
      </div>
      <p class="product__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse non necessitatibus sunt quia dolores facilis cupiditate harum soluta unde odit, consequuntur culpa. Fugiat delectus, odio maxime a placeat, natus velit necessitatibus quas voluptate sed minima ex quidem quasi, hic quis cum obcaecati vitae laborum vero tempora tenetur laudantium non exercitationem. Veniam molestias necessitatibus, at hic non porro tempora commodi officiis maxime aliquam assumenda quos explicabo ad voluptatem animi nisi nesciunt nulla doloribus architecto repellat corporis cumque dolorem facere sed. Enim quia quidem dolorem itaque illo fugiat rem, voluptas cum provident, autem architecto perferendis. Error sunt odit, ratione accusantium totam corporis? Inventore maiores adipisci fugit ab molestias deserunt quibusdam voluptatem! Dolorum ut doloribus explicabo culpa autem optio id numquam nihil labore, debitis amet veritatis vitae maxime praesentium rerum quam aliquam dolores accusantium quaerat consequatur, suscipit quos dicta tenetur sequi. Quibusdam nulla et eum laudantium rem cum ipsam eligendi, odio optio delectus nobis illo distinctio id magni! Alias, voluptatum omnis! Minus sequi reprehenderit corporis quibusdam repudiandae rerum eos voluptates, consequatur blanditiis delectus, doloribus optio in beatae inventore id. Vero, soluta hic deserunt esse repellat numquam eum, incidunt dolores illum atque asperiores reprehenderit nihil non exercitationem nemo saepe sunt pariatur nulla est autem harum quam accusantium voluptatibus maxime. In doloribus amet fugiat rerum perferendis sunt vero architecto beatae provident ad ullam, sed sequi magni reiciendis cum fugit obcaecati aut et corrupti nulla, repellendus non expedita reprehenderit totam. Repudiandae modi beatae quibusdam architecto est accusamus explicabo odio minima, iure dolor nulla perspiciatis eligendi maxime magni eaque cupiditate consequuntur saepe fugiat, corrupti aperiam molestias facilis culpa iste? Eum nostrum ratione fuga labore autem, quisquam deleniti soluta est, consequatur eligendi aperiam aliquam voluptas ducimus placeat sint quaerat velit quidem blanditiis sed obcaecati nisi voluptate impedit optio. Ea eveniet architecto vel at natus nemo minima perspiciatis asperiores, nostrum quasi. Ab cum exercitationem laborum deserunt laudantium, quis voluptates rerum necessitatibus iste, delectus dolore corrupti commodi sed laboriosam, numquam alias quibusdam cumque consectetur quam impedit odio. Beatae ullam quam quos, ipsam neque voluptates consequuntur sint cum quisquam animi quis eveniet, vitae tempore temporibus tempora, omnis distinctio aliquid impedit provident ea quo sequi numquam. Laboriosam quasi ea neque officia quo odio consequatur accusantium voluptas, expedita ipsam perspiciatis nulla excepturi praesentium, iusto earum ab atque itaque quam dolore, dicta placeat molestiae rerum soluta. Natus vel consectetur repellat voluptas earum quae magni saepe veritatis. Dolor numquam sit similique sint aliquam sunt repudiandae itaque natus repellendus soluta facere incidunt, totam aspernatur quidem. Autem, ad ipsa odio est iure architecto culpa, dolor, esse illo ea magnam. Eos odio quis, illum officia tempora a sint quae inventore enim aut? Asperiores labore consequuntur sequi, ea dolor distinctio fugit totam exercitationem perspiciatis in iste pariatur quidem repellat. Quibusdam natus quas non perferendis quod dignissimos, nesciunt cupiditate, hic tempore pariatur maxime sit aliquid dolore inventore blanditiis ipsa voluptas officiis culpa. Blanditiis, reiciendis rerum iure ad id voluptate reprehenderit debitis. Odit velit esse modi accusantium reprehenderit atque illo error dolor quas. Fugiat qui tenetur maiores? Atque nulla illum eaque!</p>
      <div class='product__bottom'>
          <hr style="width: 100%; border-color: rgba(0, 0, 0, 20%)" />
          <strong class='product__price' :class="'product__price--' + category">$29.95</strong>
        <div class="product__actions">
          <button class="product__action product__action--fill product__action--men" :class="'product__action--' + category">Buy now</button>
          <button class="product__action product__action--border" :class="'product__action--' + category">Next product</button>
        </div>
      </div>
    </div>
  </div>

  <div class="product" v-else>
    <div class="foreground foreground--unavailable" />
    <div class='product__unavailable'>
      <span class='product__unavailable-title'>This product is unavailable to show</span>
      <button class="product__action product__action--border product__action--unavailable">Next product</button>
    </div>
  </div>
</template>

<style>
body {
  position: relative;
  padding-inline: 120px;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  flex-wrap: wrap;
  gap: 68px;
  justify-content: center;
  margin: auto;
  padding: 50px 60px;
  background-color: var(--color-bg);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 25%);
  border-radius: 10px;
  max-width: 1035px;
}

@media screen and (max-width: 1248px) {
  .product {
    margin-top: 50px;
  }
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
  min-width: 300px;
}

.product__information {
  min-width: 520px;
  display: flex;
  flex-direction: column;
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
  max-width: 500px;
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

.product__rating-star {
  display: flex;
  column-gap: 2px;
}

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

.product__description {
  min-width: 200px;
  max-width: 520px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-paragraph);
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow-y: auto;
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
