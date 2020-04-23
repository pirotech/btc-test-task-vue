<template>
  <div class="add-book-modal-wrapper">
    <div class="add-book-modal">
      <div class="add-book-modal-header">
        <h2 class="header__title">Add New Books</h2>
        <FontAwesomeIcon class="header__close-button" icon="times" @click="onModalClose"/>
      </div>
      <div class="add-book-modal-main">
        <UiTabs
          class="add-book-modal__tabs"
          :items="tabs"
          :selected="selectedTab"
          :onSelect="onSelectTab"
        />
        <div v-show="selectedTab.id === 0" class="add-book-modal-form">
          <UiTextField
            class="form__field"
            label="Title"
            required
            :value="title"
            placeholder="Enter Title"
            :onChange="e => onFieldChange('title', e.target.value)"
          />
          <UiTextField
            class="form__field"
            label="Author"
            required
            :value="author"
            placeholder="Enter Author"
            :onChange="e => onFieldChange('author', e.target.value)"
          />
          <UiTextField
            class="form__field"
            label="Publisher"
            required
            :value="publisher"
            placeholder="Enter Publisher"
            :onChange="e => onFieldChange('publisher', e.target.value)"
          />
          <div class="row row_space-between">
            <UiTextField
              class="form__field form__field_small"
              label="Paperback"
              :value="paperback"
              placeholder="Enter Paperback"
              :onChange="e => onFieldChange('paperback', e.target.value)"
            />
            <UiTextField
              class="form__field form__field_small"
              required
              label="ISBN"
              :value="isbn"
              placeholder="Enter ISBN"
              :onChange="e => onFieldChange('isbn', e.target.value)"
            />
          </div>
          <UiTextField
            class="form__field"
            label="Summary"
            :value="summary"
            placeholder="Enter Summary"
            :onChange="e => onFieldChange('summary', e.target.value)"
          />
        </div>
        <div v-show="selectedTab.id === 1" class="add-book-modal-form">
          <UiTextField
            class="form__field"
            label="Genre"
            :value="genre"
            placeholder="Enter Genre"
            :onChange="e => onFieldChange('genre', e.target.value)"
          />
        </div>
        <div v-show="selectedTab.id === 2" class="add-book-modal-form"></div>
        <div v-show="selectedTab.id === 3" class="add-book-modal-form"></div>
      </div>
      <div class="add-book-modal-footer">
        <button class="footer__cancel-button" @click="onModalClose">Cancel</button>
        <button class="footer__action-button">Add book</button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import UiTabs from './UiTabs';
import UiTextField from './UiTextField';

export default {
  name: "AddBookModal",
  components: {
    FontAwesomeIcon,
    UiTabs,
    UiTextField
  },
  props: {
    onModalClose: Function
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
      author: '',
      publisher: '',
      paperback: '',
      isbn: '',
      summary: '',
      genre: ''
    };
  },
  methods: {
    onSelectTab (tab) {
      this.selectedTab = tab;
    },
    onFieldChange (name, value) {
      this[name] = value;
    }
  }
}
</script>

<style scoped lang="scss">
.add-book-modal {
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
