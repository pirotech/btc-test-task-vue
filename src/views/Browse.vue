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
          @click="buttonChanged(button)"
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
          @keyup="e => searchStringChanged(e.target.value)"
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
        :onSelect="() => onSelectBook(book)"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Book from '../components/Book';
import {SELECT_BOOK} from '../store';

export default {
  name: 'Browse',
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
      searchString: ''
    };
  },
  methods: {
    buttonChanged (value) {
      this.currentButton = value;
    },
    searchStringChanged (value) {
      this.searchString = value;
    },
    onSelectBook (item) {
      this.$store.commit({
        type: SELECT_BOOK,
        selectedBook: item
      })
    }
  },
  computed: {
    books () {
      // ... should be api call ...
      let books = this.$store.state.books;

      switch (this.currentButton) {
        case 'All Books': {
          break;
        }
        case 'Most Recent': {
          books = books.filter(item => {
            const date = moment(item.createdDate, 'DD.MM.YYYY');
            return date.isBetween(
              moment().subtract(2, 'month'),
              moment()
            );
          });
          break;
        }
        case 'Most Popular': {
          books = books.filter(item => {
            return item.starsCount === 5;
          });
          break;
        }
        case 'Free Books': {
          books = books.filter(item => {
            return item.price === 0;
          });
          break;
        }
      }

      books = this.searchString ? books.filter(item => {
        return item.title.toLowerCase().includes(this.searchString.toLowerCase());
      }) : books;

      return books;
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
      @media (max-width: 1120px) {
        margin-right: 0;
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
        @media (max-width: 1120px) {
          width: 190px;
        }
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
