<template>
  <button class="btn" :class="'btn__' + color">
    <span>
      {{ text }}
    </span>
    <div class="btn__icon--right">
      <slot name="icon-right" />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="css" scoped>
.btn {
  border-radius: 24px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
.btn__primary {
  /* Blue */
  background: #4f73d0;
  color: #ffffff;
  padding: 16px 12px;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
}
</style>
