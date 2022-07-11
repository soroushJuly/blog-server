<template>
  <main class="page new-post">
    <section class="new-post__header">
      <div>
        <BaseButton tag="router-link" color="secondary" to="/">
          <BaseIcon name="arrow-back" />
        </BaseButton>
        <h1 class="new-post__title">New post</h1>
      </div>
      <BaseButton text="Publish post" type="submit" form="postForm" />
    </section>
    <form id="postForm" @submit.prevent="submitForm">
      <BaseInput
        :value="title"
        label="Title"
        class="form__input"
        @update="(val) => (title = val)"
      />
      <BaseInput
        :value="description"
        label="Description"
        class="form__input"
        @update="(val) => (description = val)"
      />
      <BaseInput
        :value="tag"
        :tags="tags"
        label="Tags"
        mode="tags"
        class="form__input"
        @update="(val) => (tag = val)"
        @updateTags="tags.push(tag)"
      />
    </form>
  </main>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  components: { BaseInput, BaseButton, BaseIcon },
  data() {
    return {
      title: "",
      description: "",
      tag: "",
      tags: [],
    };
  },
  methods: {
    submitForm() {
      this.$store
        .dispatch("createPost", {
          payload: {
            title: this.title,
            description: this.description,
            tags: this.tags,
          },
        })
        .then(() => {
          this.title = "";
          this.description = "";
          this.tag = "";
          this.tags = [];
        });
    },
  },
};
</script>

<style scoped>
.new-post__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.new-post__header > div {
  display: flex;
  align-items: center;
}
.new-post__title {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  margin-left: 24px;
}

.form__input {
  margin-bottom: 24px;
}
</style>
