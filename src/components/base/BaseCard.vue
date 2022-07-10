<template>
  <div class="card">
    <div class="card__content">
      <img v-if="img" src="" alt="" />
      <div v-else class="card__img card__img--empty" />
      <h3>Title</h3>
      <p>Description</p>
      <div class="card__tags"></div>
    </div>
    <div class="card__author card__footer">
      <div>name</div>
      <div>likes</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  max-width: 245px;
  height: 352px;
  padding: 12px;
  border: 1px solid var(--gray-light);
  border-radius: 4px;
}
.card__content {
  display: grid;
  row-gap: 10px;
  grid-template-rows: 1fr;
}
.card__img {
  width: 100%;
  height: 123px;
}
.card__img--empty {
  background: var(--empty);
}
.card__author {
  display: flex;
  justify-content: space-between;
}
</style>
