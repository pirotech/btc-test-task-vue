<template>
  <label class="ui-text-field">
    <span class="ui-text-field__label" :class="{'ui-text-field__label_required': required}">{{label}}</span>
    <input
      class="ui-text-field__input"
      :class="{'ui-text-field__input_error': !!error}"
      type="text"
      :value="value"
      :placeholder="disabled ? '-' : placeholder"
      :disabled="disabled"
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
    error: String,
    placeholder: String,
    disabled: Boolean,
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
    &:disabled {
      background-color: white;
      border-color: white;
    }
    &_error {
      border-color: #e78989;
    }
  }
}
</style>
