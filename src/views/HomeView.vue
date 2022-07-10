<template>
  <main class="page home">
    <header class="home__header">
      <BaseSearchBox />
      <BaseButton tag="router-link" text="Add new post" to="/post">
        <template #icon-right>
          <BaseIcon name="add-circle" viewBox="0 0 22 22" />
        </template>
      </BaseButton>
    </header>
    <section class="home__posts" id="posts">
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
    </section>
  </main>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import BaseSearchBox from "@/components/base/BaseSearchBox.vue";
import BaseCard from "@/components/base/BaseCard.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  name: "HomeView",
  components: { BaseButton, BaseCard, BaseIcon, BaseSearchBox },
};
</script>

<style scoped>
.home__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.home__posts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 24px;
}
</style>
