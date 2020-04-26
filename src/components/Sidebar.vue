<template>
  <div class="sidebar">
    <button class="sidebar__add-book-button" @click="addBookModal">
      <FontAwesomeIcon icon="plus"/>
      <p>ADD A BOOK</p>
    </button>
    <div class="sidebar__line"></div>
    <ul class="sidebar-links">
      <li
        v-for="item in sidebarItems"
        class="sidebar-link"
        :class="{'sidebar-link_active': $route.path === item.link}"
        @click="() => $router.push(item.link)"
      >
        <FontAwesomeIcon class="sidebar-link__icon" :icon="item.icon"/>
        <p class="sidebar-link__title">{{item.title}}</p>
      </li>
    </ul>
    <div class="sidebar__line"></div>
    <div class="sidebar-histories">
      <UiHistory
        v-for="history in histories"
        :key="history.id"
        class="sidebar-history"
        :value="history"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import UiHistory from './UiHistory';

export default {
  name: "Sidebar",
  components: {
    FontAwesomeIcon,
    UiHistory
  },
  props: {
    addBookModal: Function
  },
  data () {
    return {
      sidebarItems: [
        {
          icon: 'book',
          title: 'Now Reading',
          link: '/now-reading'
        },
        {
          icon: 'globe-asia',
          title: 'Browse',
          link: '/'
        },
        {
          icon: 'shopping-cart',
          title: 'Buy Books',
          link: '/buy-books'
        },
        {
          icon: 'star',
          title: 'Favourite Books',
          link: '/favourite-books'
        },
        {
          icon: 'th-list',
          title: 'Wishlist',
          link: '/wishlist'
        },
      ]
    };
  },
  computed: {
    ...mapState([
      'histories'
    ])
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 200px;
  background-color: #1f2637;
  &__add-book-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 44px;
    margin: 38px 20px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    border-radius: 4px;
    background-color: #f2795a;
    &:hover {
      background-color: #f58a6e;
    }
    p {
      margin-left: 10px;
    }
  }
  &__line {
    width: 100%;
    height: 1px;
    background-color: #323949;
  }
  &-links {
    display: flex;
    flex-direction: column;
  }
  &-link {
    display: flex;
    align-items: center;
    width: 100%;
    height: 38px;
    padding: 0 20px;
    font-size: 13px;
    color: #78829d;
    background-color: transparent;
    cursor: pointer;
    &_active {
      color: white;
      background-color: #15a4fa;
    }
    &__icon {
    }
    &__title {
      margin-left: 10px;
    }
  }
  &-histories {
    display: flex;
    flex-direction: column;
  }
  &-history {
    display: flex;
    padding: 28px 20px 0;
  }
}
</style>
