<template>
  <div class="book" :class="[outerClass]" @click="onSelect">
    <div class="book__cover" :style="{backgroundImage: `url(${cover})`}"></div>
    <h3 class="book__title">{{title}}</h3>
    <p class="book__author">by {{author}}</p>
    <ul class="book-stars">
      <li v-for="star in stars" class="book__star">
        <FontAwesomeIcon v-show="star === '1'" icon="star" />
        <FontAwesomeIcon v-show="star === '-'" icon="star-half-alt" />
        <FontAwesomeIcon v-show="star === '0'" :icon="['far', 'star']" />
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "Book",
  components: {
    FontAwesomeIcon
  },
  props: {
    outerClass: String,
    cover: String,
    title: String,
    author: String,
    starsCount: {
      type: Number,
      default: 0
    },
    onSelect: Function
  },
  data() {
    return {
      stars: []
    };
  },
  created() {
    const full = Math.floor(this.starsCount);
    const halfExist = this.starsCount - full > 0;
    const starsString = '1'.repeat(full) + (halfExist ? '-' : '') + '0'.repeat(5 - (full + halfExist));
    this.stars = starsString.split('');
  }
}
</script>

<style scoped lang="scss">
.book {
  display: flex;
  flex-direction: column;
  width: 200px;
  cursor: pointer;
  &__cover {
    min-width: 100%;
    height: 275px;
    background: no-repeat center center #eef1f7;
    border-radius: 4px;
  }
  &__title {
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #444c63;
  }
  &__author {
    margin-top: 3px;
    font-size: 12px;
    color: #6f7d95;
  }
  &-stars {
    display: flex;
    margin-top: 10px;
  }
  &__star {
    margin-right: 1px;
    color: #ffab00;
    font-size: 12px;
  }
}
</style>
