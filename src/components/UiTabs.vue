<template>
  <ul class="ui-tabs">
    <li
      v-for="item in items"
      class="ui-tabs__item"
      :class="{'ui-tabs__item_selected': item.id === selected.id}"
      @click="onSelect(item)"
    >
      <FontAwesomeIcon class="ui-tabs__icon" :icon="item.icon" />
      <p class="ui-tabs__title">{{item.title}}</p>
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "UiTabs",
  components: {
    FontAwesomeIcon
  },
  props: {
    items: Array,
    selected: Object,
    onSelect: Function
  },
}
</script>

<style scoped lang="scss">
.ui-tabs {
  display: flex;
  flex-direction: column;
  background-color: #eef1f7;
  &__item {
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 38px;
    cursor: pointer;
    &_selected {
      background-color: #97b3ce;
      .ui-tabs__icon {
        color: white;
      }
      .ui-tabs__title {
        color: white;
      }
    }
  }
  &__icon {
    display: inline-block;
    width: 15px;
    height: 15px;
    font-size: 14px;
    color: #78829d;
  }
  &__title {
    margin-left: 9px;
    font-size: 13px;
    color: #78829d;
  }
}
</style>
