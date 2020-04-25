<template>
  <div class="ui-search-field">
    <input
      type="text"
      class="ui-search-field__input"
      :value="value"
      :placeholder="placeholder"
      @keyup="onChange"
    />
    <FontAwesomeIcon class="ui-search-field__icon" icon="search"/>
  </div>
</template>

<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

export default {
  name: "UiSearchField",
  components: {
    FontAwesomeIcon
  },
  props: {
    value: String,
    placeholder: String,
    onChange: Function
  }
}
</script>

<style scoped lang="scss">
.ui-search-field {
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
</style>
