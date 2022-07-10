<template>
  <div class="input-container">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <div class="input__content">
      <input type="text" :id="id" />
      <button v-if="mode === 'tags'" class="input__add">
        <span>Add</span>
        <BaseIcon name="add" viewBox="0 0 24 24" />
      </button>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";
export default {
  name: "BaseInput",
  components: { BaseIcon },
  props: {
    type: {
      type: String,
      default: "text",
    },
    mode: {
      type: String,
      default: "normal",
      validator(value) {
        return ["normal", "tags"].includes(value);
      },
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.input__content {
  position: relative;
}
.input__content > input {
  color: var(--black);
  width: 100%;
  border: 1px solid var(--gray-light);
  background: var(--input-background);
  padding: 12px 16px;
  border-radius: 8px;
}
.input__content > input:hover {
  background: var(--white);
}
.input__content > input:focus {
  outline: none;
  border: 1px solid var(--gray);
}
.input__label {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  margin-left: 8px;
  margin-bottom: 4px;
}
.input__add {
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -50%);

  background: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: var(--blue);
}
.input__add > span {
  margin-right: 12px;
}
</style>
