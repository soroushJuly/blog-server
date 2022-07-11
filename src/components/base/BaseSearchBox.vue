<template>
  <div class="search-container">
    <BaseIcon
      name="search"
      class="search__icon"
      :class="{ 'search__icon--active': value }"
    />
    <input
      v-model="value"
      type="text"
      :id="id"
      class="search"
      placeholder="Search"
      @input="doSearch"
    />
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";
export default {
  name: "BaseDearchBox",
  components: { BaseIcon },
  data() {
    return {
      value: "",
      delay: null,
    };
  },
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
  methods: {
    doSearch() {
      if (this.delay) {
        clearTimeout(this.delay);
      }
      this.delay = setTimeout(() => {
        this.$emit("doSearch", this.value);
        this.delay = null;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.search-container {
  position: relative;
  color: var(--gray);
}

.search {
  position: relative;
  border: 1px solid var(--gray-light);
  border-radius: 24px;
  padding: 12px 0 12px 48px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.search:focus,
.search:hover {
  outline: none;
  border: 1px solid var(--gray);
  color: var(--black);
}
.search__icon {
  position: absolute;
  left: 19px;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;
}
.search__icon--active {
  color: var(--black);
}
</style>
