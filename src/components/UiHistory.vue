<template>
  <div class="history">
    <FontAwesomeIcon class="history__icon" :icon="['far', 'clock']"/>
    <div v-if="value.type === ADD_TO_MUST_READ" class="history-text">
      <p>
        You added <a href="#">{{value.book.title}}</a> by
        <a href="#">{{value.book.author}}</a> to your
        <a href="#">Must Read Title</a>
      </p>
      <p>{{preparedDate}}</p>
    </div>
    <div v-if="value.type === ADD_BOOK" class="history-text">
      <p>
        You added new book {{value.book.title}}
      </p>
      <p>{{preparedDate}}</p>
    </div>
  </div>
</template>

<script>
import { ADD_TO_MUST_READ, ADD_BOOK } from '../models/constants';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "UiHistory",
  components: {
    FontAwesomeIcon
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    ADD_TO_MUST_READ: () => ADD_TO_MUST_READ,
    ADD_BOOK: () => ADD_BOOK,
    preparedDate () {
      return this.value.createdDate.fromNow();
    }
  }
}
</script>

<style scoped lang="scss">
.history {
  &__icon {
    font-size: 16px;
    color: #4d586c;
  }
  &-text {
    margin-left: 10px;
    font-size: 12px;
    line-height: 18px;
    color: #4d586c;
    p {
      &:last-child {
        margin-top: 10px;
      }
    }
    a {
      color: #667a8f;
      text-decoration: none;
    }
  }
}
</style>
