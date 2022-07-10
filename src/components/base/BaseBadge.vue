<template>
  <div class="badge">
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.badge {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  max-width: max-content;
  padding: 4px 12px;
  color: var(--gray);
  border: 1px solid var(--gray-light);
  border-radius: 24px;
}
</style>
