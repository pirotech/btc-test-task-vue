<template>
  <div class="book-modal-wrapper" @click="onModalClose">
    <div class="book-modal" @click.stop="() => {}">
      <div class="book-modal-header">
        <h2 class="header__title">Add New Books</h2>
        <FontAwesomeIcon class="header__close-button" icon="times" @click="onModalClose"/>
      </div>
      <div class="book-modal-main">
        <UiTabs
          class="book-modal__tabs"
          :items="tabs"
          :selected="selectedTab"
          :onSelect="onSelectTab"
        />
        <div v-show="selectedTab.id === 0" class="book-modal-form">
          <UiTextField
            class="form__field"
            label="Title"
            required
            :value="title"
            :error="titleError"
            placeholder="Enter Title"
            :disabled="!!book"
            :onChange="e => onFieldChange('title', e.target.value)"
          />
          <UiTextField
            class="form__field"
            label="Author"
            required
            :value="author"
            :error="authorError"
            placeholder="Enter Author"
            :disabled="!!book"
            :onChange="e => onFieldChange('author', e.target.value)"
          />
          <UiTextField
            class="form__field"
            label="Publisher"
            required
            :value="publisher"
            :error="publisherError"
            placeholder="Enter Publisher"
            :disabled="!!book"
            :onChange="e => onFieldChange('publisher', e.target.value)"
          />
          <div class="row row_space-between">
            <UiTextField
              class="form__field form__field_small"
              label="Paperback"
              :value="paperback"
              placeholder="Enter Paperback"
              :disabled="!!book"
              :onChange="e => onFieldChange('paperback', e.target.value)"
            />
            <UiTextField
              class="form__field form__field_small"
              required
              label="ISBN"
              :value="isbn"
              :error="isbnError"
              placeholder="Enter ISBN"
              :disabled="!!book"
              :onChange="e => onFieldChange('isbn', e.target.value)"
            />
          </div>
          <UiTextField
            class="form__field"
            label="Summary"
            :value="summary"
            placeholder="Enter Summary"
            :disabled="!!book"
            :onChange="e => onFieldChange('summary', e.target.value)"
          />
        </div>
        <div v-show="selectedTab.id === 1" class="book-modal-form">
          <UiTextField
            class="form__field"
            label="Genre"
            :value="genre"
            placeholder="Enter Genre"
            :disabled="!!book"
            :onChange="e => onFieldChange('genre', e.target.value)"
          />
        </div>
        <div v-show="selectedTab.id === 2" class="book-modal-form"></div>
        <div v-show="selectedTab.id === 3" class="book-modal-form"></div>
      </div>
      <div class="book-modal-footer">
        <button class="footer__cancel-button" @click="onModalClose">Cancel</button>
        <button v-if="!book" class="footer__action-button" @click="action">Add book</button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import UiTabs from './UiTabs';
import UiTextField from './UiTextField';

export default {
  name: "BookModal",
  components: {
    FontAwesomeIcon,
    UiTabs,
    UiTextField
  },
  props: {
    // edit mode
    onModalClose: Function,
    onAction: Function,
    // read mode
    book: {
      type: Object,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const tabs = [
      {
        id: 0,
        icon: 'align-center',
        title: 'General'
      },
      {
        id: 1,
        icon: 'tags',
        title: 'Genre'
      },
      {
        id: 2,
        icon: ['far', 'file-image'],
        title: 'Poster'
      },
      {
        id: 3,
        icon: 'info-circle',
        title: 'Info'
      }
    ];
    return {
      tabs,
      selectedTab: tabs[0],
      title: '',
      titleError: '',
      author: '',
      authorError: '',
      publisher: '',
      publisherError: '',
      paperback: '',
      isbn: '',
      isbnError: '',
      summary: '',
      genre: ''
    };
  },
  created() {
    if (this.book) {
      this.title = this.book.title;
      this.author = this.book.author;
      this.publisher = this.book.publisher;
      this.paperback = this.book.paperback;
      this.isbn = this.book.isbn;
      this.summary = this.book.summary;
      this.genre = this.book.genre;
    }
  },
  methods: {
    onSelectTab (tab) {
      this.selectedTab = tab;
    },
    onFieldChange (name, value) {
      this[name] = value;
      this[name + 'Error'] = '';
    },
    action () {
      if (!this.title) {
        this.titleError = 'Field is required'
      }
      if (!this.author) {
        this.authorError = 'Field is required'
      }
      if (!this.publisher) {
        this.publisherError = 'Field is required'
      }
      if (!this.isbn) {
        this.isbnError = 'Field is required'
      }
      const handledIsbn = parseInt(this.isbn) + '';
      if (handledIsbn !== this.isbn) {
        this.isbnError = 'ISBN must be a number';
      }

      if (this.titleError || this.authorError || this.publisherError || this.isbnError) {
        return;
      }
      this.onAction({
        title: this.title,
        author: this.author,
        publisher: this.publisher,
        paperback: this.paperback,
        isbn: this.isbn,
        summary: this.summary,
        genre: this.genre
      });
    }
  }
}
</script>

<style scoped lang="scss">
.book-modal {
  display: flex;
  flex-direction: column;
  width: 700px;
  &-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
  }
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    background-color: #eef1f7;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #dadfea;
  }
  .header {
    &__title {
      font-size: 20px;
      color: #444c63;
    }
    &__close-button {
      font-size: 16px;
      color: #78829d;
      cursor: pointer;
    }
  }
  &-main {
    display: flex;
  }
  &__tabs {
    min-width: 200px;
    width: 200px;
  }
  &-form {
    width: 500px;
    min-height: 430px;
    background-color: white;
  }
  .form {
    &__field {
      margin: 25px 20px 0;
      &:last-child {
        margin-bottom: 25px;
      }
      &_small {
        min-width: 220px;
        width: 220px;
        margin-right: 0;
        &:last-child {
          margin-bottom: 0;
          margin-right: 20px;
        }
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    background-color: #eef1f7;
    border-radius: 0 0 4px 4px;
    border-top: 1px solid #dadfea;
  }
  .footer {
    &__cancel-button, &__action-button {
      padding: 0 10px;
      font-size: 14px;
      font-weight: bold;
      line-height: 34px;
      text-transform: uppercase;
      color: white;
      border-radius: 4px;
    }
    &__cancel-button {
      background-color: #97b3ce;
      &:hover {
        background-color: #acc5dd;
      }
    }
    &__action-button {
      margin-left: 10px;
      background-color: #f2795a;
      &:hover {
        background-color: #f58a6e;
      }
    }
  }
}
</style>
