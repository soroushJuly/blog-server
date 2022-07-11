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
      <BaseCard
        v-for="(post, index) in postsVisible"
        :details="post"
        :key="index"
      />
    </section>
    <BaseButton text="More" to="/post" @click="page = page + 1" />
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
  data() {
    return {
      posts: [],
      page: 1,
    };
  },
  computed: {
    postsVisible() {
      return this.$store.getters.postsVisible(this.page);
    },
  },
  created() {
    this.$store.dispatch("getPosts");
  },
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
