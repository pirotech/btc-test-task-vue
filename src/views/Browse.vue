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
      <UiSearchField
        class="filters-search-field"
        :value="searchString"
        placeholder="Enter keywords"
        :onChange="searchStringChanged"
      />
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
import UiSearchField from '../components/UiSearchField';
import {SELECT_BOOK} from '../store';

const Buttons = Object.freeze({
  ALL_BOOKS: 'All Books',
  MOST_RECENT: 'Most Recent',
  MOST_POPULAR: 'Most Popular',
  FREE_BOOKS: 'Free Books'
});

export default {
  name: 'Browse',
  components: {
    FontAwesomeIcon,
    Book,
    UiSearchField
  },
  data () {
    return {
      buttons: [
        Buttons.ALL_BOOKS,
        Buttons.MOST_RECENT,
        Buttons.MOST_POPULAR,
        Buttons.FREE_BOOKS
      ],
      currentButton: Buttons.ALL_BOOKS,
      searchString: ''
    };
  },
  methods: {
    buttonChanged (value) {
      this.currentButton = value;
    },
    searchStringChanged (event) {
      this.searchString = event.target.value;
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
        case Buttons.ALL_BOOKS: {
          break;
        }
        case Buttons.MOST_RECENT: {
          books = books.filter(item => {
            const date = moment(item.createdDate, 'DD.MM.YYYY');
            return date.isBetween(
              moment().subtract(2, 'month'),
              moment()
            );
          });
          break;
        }
        case Buttons.MOST_POPULAR: {
          books = books.filter(item => {
            return item.starsCount === 5;
          });
          break;
        }
        case Buttons.FREE_BOOKS: {
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
