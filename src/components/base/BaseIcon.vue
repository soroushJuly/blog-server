<template>
  <svg
    width="18"
    height="18"
    :viewBox="viewBox"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="getPath(name)" fill="currentColor" />
  </svg>
</template>

<script>
import iconPaths from "@/constants/icons";
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    viewBox: {
      type: String,
      default: "0 0 18 18",
    },
  },
  methods: {
    getPath(name) {
      return iconPaths[name];
    },
  },
};
</script>

<style></style>
