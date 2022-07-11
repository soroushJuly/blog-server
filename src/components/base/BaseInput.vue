<template>
  <div class="input-container">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <div class="input__content">
      <input
        :value="value"
        type="text"
        :id="id"
        v-on="$listeners"
        @input="setValue($event.target.value)"
      />
      <button
        v-if="mode === 'tags'"
        class="input__add"
        :class="{ 'input__add--active': value }"
        @click.prevent="addTag(value)"
      >
        <span>Add</span>
        <BaseIcon name="add" viewBox="0 0 24 16" />
      </button>
    </div>
    <div class="input__tags">
      <BaseBadge v-for="(tag, index) in tags" :key="index" :text="tag" />
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";
import BaseBadge from "@/components/base/BaseBadge.vue";
export default {
  name: "BaseInput",
  components: { BaseIcon, BaseBadge },
  data() {
    return {};
  },
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
    value: {
      type: String,
      default: null,
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addTag() {
      this.$emit("updateTags");
      this.$emit("update", "");
    },
    setValue(val) {
      if (this.mode === "tags") {
        this.$emit("update", val);
        return;
      }
      console.log(val);
      this.$emit("update", val);
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
  z-index: 10;

  background: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: var(--gray-light);
}
.input__add--active {
  color: var(--blue);
}
.input__add > span {
  margin-right: 12px;
}
.input__tags {
  display: flex;
  flex-wrap: wrap;
}
.input__tags > * {
  margin-top: 12px;
  margin-right: 4px;
}
</style>
