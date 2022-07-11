<template>
  <component
    :is="tag"
    class="btn"
    :class="'btn__' + color"
    :to="to"
    v-on="$listeners"
  >
    <span v-if="!$slots.default">
      {{ text }}
    </span>
    <slot />
    <div v-if="$slots['icon-right']" class="btn__icon btn__icon--right">
      <slot name="icon-right" />
    </div>
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    tag: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
    to: {
      type: String,
      default: null,
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

.btn__secondary {
  /* Blue */
  border: 1px solid var(--gray-light);
  background: transparent;
  color: var(--black);
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
