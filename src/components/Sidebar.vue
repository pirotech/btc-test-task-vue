<template>
  <div class="sidebar">
    <button class="sidebar__add-book-button">
      ADD A BOOK
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
    <ul class="sidebar-histories">
      <li class="sidebar-history">
        <div class="history__icon"></div>
        <div class="history-text">
          <p>
            You added <a href="#">Fight Club</a> by
            <a href="#">Chuck Palahniuk</a> to your
            <a href="#">Must Read Title</a>
          </p>
          <p>24 minutes ago</p>
        </div>
      </li>
      <li class="sidebar-history">
        <div class="history__icon"></div>
        <div class="history-text">
          <p>
            You added <a href="#">The Trial</a> by
            <a href="#">Franz Kafka</a> to your
            <a href="#">Must Read Titles</a>.
          </p>
          <p>48 minutes ago</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "Sidebar",
  components: {
    FontAwesomeIcon
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
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 200px;
  background-color: #1f2637;
  &__add-book-button {
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
    padding: 30px 20px 0;
    .history {
      &__icon {
        font-size: 12px;
        color: #4d586c;
      }
      &-text {
        margin-left: 10px;
        font-size: 12px;
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
  }
}
</style>
