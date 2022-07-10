<template>
  <button class="btn" :class="'btn__' + color">
    <span>
      {{ text }}
    </span>
    <div class="btn__icon btn__icon--right">
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
  display: flex;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 16px;
}

.btn__primary {
  /* Blue */
  background: var(--blue);
  color: var(--white);
}

.btn__primary:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.btn__primary:active {
  background: var(--blue-dark);
}
.btn__icon {
  display: flex;
}
.btn__icon--right {
  margin-left: 10px;
}
</style>
