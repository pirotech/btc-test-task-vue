<template>
  <div class="browse">
    <h2 class="browse__title">Browse Available Books</h2>
    <div class="browse__line"></div>
    <div class="browse-filters">
      <ul class="filters-buttons">
        <li
          v-for="button in buttons"
          :key="button"
          class="filters__button"
          :class="{'filters__button_active': button === currentButton}"
          @click="fieldChanged('currentButton', button)"
        >
          {{button}}
        </li>
      </ul>
      <div class="filters-search-field">
        <input
          type="text"
          class="filters-search-field__input"
          :value="searchString"
          placeholder="Enter keywords"
          @change="e => fieldChanged('searchString', e.target.value)"
        />
        <FontAwesomeIcon class="filters-search-field__icon" icon="search"/>
      </div>
    </div>
    <div class="browse__line"></div>
    <div class="browse-books">
      <Book
        v-for="book in books"
        :key="book.id"
        outerClass="browse__book"
        :cover="book.cover"
        :title="book.title"
        :author="book.author"
        :starsCount="book.starsCount"
      />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Book from "../components/Book";
import loadedBooks from '../../public/books.json';

export default {
  name: 'Home',
  components: {
    FontAwesomeIcon,
    Book
  },
  data () {
    return {
      buttons: [
        'All Books',
        'Most Recent',
        'Most Popular',
        'Free Books'
      ],
      currentButton: 'All Books',
      searchString: '',
      books: []
    };
  },
  created () {
    this.books = loadedBooks;
  },
  methods: {
    fieldChanged (name, value) {
      this[name] = value;
    }
  }
}
</script>

<style lang="scss">
.browse {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__title {
    width: 100%;
    line-height: 70px;
    padding: 0 20px;
    font-size: 22px;
    color: #444c63;
    background-color: #eef1f7;
  }
  &__line {
    width: 100%;
    height: 1px;
    background-color: #dadfea;
  }
  &-filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    background-color: #eef1f7;
  }
  .filters {
    &-buttons {
      display: flex;
    }
    &__button {
      padding: 0 10px;
      margin-right: 5px;
      font-family: 'Myriad Pro', Arial, sans-serif;
      font-size: 12px;
      line-height: 20px;
      color: #8c97b2;
      border-radius: 10px;
      cursor: pointer;
      &_active {
        color: white;
        background-color: #97b3ce;
      }
    }
    &-search-field {
      position: relative;
      display: flex;
      align-items: center;
      &__input {
        width: 200px;
        height: 32px;
        padding: 0 20px;
        font-size: 13px;
        line-height: 32px;
        color: #8c97b2;
        border: 1px solid #c7cddb;
        border-radius: 16px;
        background-color: white;
        &::placeholder {
          font-size: 13px;
          line-height: 32px;
          color: #8c97b2;
        }
      }
      &__icon {
        position: absolute;
        right: 20px;
        font-size: 13px;
        line-height: 32px;
        color: #8c97b2;
      }
    }
  }
  &-books {
    display: flex;
    flex-wrap: wrap;
  }
  &__book {
    margin-top: 28px;
    margin-left: 20px;
  }
}
</style>
