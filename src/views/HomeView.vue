<template>
  <main class="page home">
    <header class="home__header">
      <div>input</div>
      <BaseButton text="Add new post" />
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
import BaseCard from "@/components/base/BaseCard.vue";

export default {
  name: "HomeView",
  components: { BaseButton, BaseCard },
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
  gap: 10px;
}
</style>
