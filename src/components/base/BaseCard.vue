<template>
  <div class="card">
    <div class="card__content">
      <img v-if="img" src="" alt="" />
      <div v-else class="card__img card__img--empty" />
      <h3 class="card__title">Title</h3>
      <p class="card__description">Description</p>
      <div class="card__tags">
        <BaseBadge text="Tag" />
      </div>
    </div>
    <div class="card__footer">
      <div class="card__author">
        <div>avatar</div>
        <div>
          <span>Ahamd</span>
          <span>2020 Jult</span>
        </div>
      </div>
      <div>
        <span>25</span>
        <BaseIcon viewBox="0 0 22 18" name="favorite-border" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseBadge from "@/components/base/BaseBadge.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
export default {
  name: "BaseCard",
  components: { BaseBadge, BaseIcon },
};
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
.card__footer {
  display: flex;
  justify-content: space-between;
}
.card__author {
  display: flex;
}
.card__author {
  display: flex;
  justify-content: space-between;
}
.card__title {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}
.card__description {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
</style>
