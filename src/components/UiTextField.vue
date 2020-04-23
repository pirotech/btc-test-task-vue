<template>
  <label class="ui-text-field">
    <span class="ui-text-field__label" :class="{'ui-text-field__label_required': required}">{{label}}</span>
    <input
      class="ui-text-field__input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @keyup="onChange"
    />
  </label>
</template>

<script>
export default {
  name: "UiTextField",
  props: {
    label: String,
    required: Boolean,
    value: String,
    placeholder: String,
    onChange: Function
  }
}
</script>

<style scoped lang="scss">
.ui-text-field {
  display: flex;
  flex-direction: column;
  &__label {
    font-size: 13px;
    font-weight: bold;
    color: #444c63;
    &_required:after {
      content: '*';
      color: #e78989;
    }
  }
  &__input {
    height: 32px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 13px;
    line-height: 32px;
    color: #8c97b2;
    border-radius: 2px;
    border: 1px solid #d1d5e0;
    &::placeholder {
      color: #8c97b2;
    }
  }
}
</style>
