<template>
  <div class="input-container">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <div class="input__content">
      <input type="text" :id="id" class="input" />
      <button class="input__add">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  border: 1px solid var(--gray-light);
  padding: 12px 16px;
  border-radius: 8px;
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
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -50%);

  background: transparent;
}
</style>
