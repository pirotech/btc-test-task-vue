<template>
  <div class="message-modal-wrapper">
    <div class="message-modal">
      <h2 class="message-modal__title">
        The book "{{bookTitle}}" successfully added
      </h2>
      <div class="message-modal-footer">
        <button class="message-modal__close-button" @click="onModalClose">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageModal",
  props: {
    bookTitle: String,
    onModalClose: Function
  }
}
</script>

<style scoped lang="scss">
.message-modal {
  display: flex;
  flex-direction: column;
  width: 500px;
  &-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
  }
  &__title {
    width: 100%;
    padding: 50px 20px 36px;
    font-size: 22px;
    font-weight: bold;
    color: #444c63;
    text-align: center;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #dadfea;
    background-color: white;
  }
  &-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border-radius: 0 0 4px 4px;
    background-color: #eef1f7;
  }
  &__close-button {
    padding: 0 10px;
    font-size: 14px;
    font-weight: bold;
    line-height: 34px;
    text-transform: uppercase;
    color: white;
    border-radius: 4px;
    background-color: #f2795a;
    &:hover {
      background-color: #f58a6e;
    }
  }
}
</style>
