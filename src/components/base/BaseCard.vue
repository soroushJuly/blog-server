<template>
  <div class="card">
    <div class="card__content">
      <img v-if="details.image" :src="details.image" alt="" class="card__img" />
      <div v-else class="card__img card__img--empty" />
      <h3 class="card__title">{{ details.userId }}</h3>
      <p class="card__description">{{ details.text }}</p>
      <div class="card__tags">
        <BaseBadge
          v-for="(tag, index) in details.tags"
          :text="tag"
          :key="index"
        />
      </div>
    </div>
    <div class="card__footer">
      <div class="card__author">
        <img
          v-if="details.user.avatar"
          :src="details.user.avatar"
          class="card__avatar"
          alt="user-avatar"
        />
        <div v-else class="card__avatar" />
        <div class="card__author__text">
          <span>{{ details.user.firstName }} {{ details.user.lastName }}</span>
          <span class="card__author__date">{{ details.publishDate }}</span>
        </div>
      </div>
      <div>
        <span>{{ details.likes }}</span>
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
  props: {
    details: {
      type: Object,
      default: () => {
        return {
          userId: "",
          text: "",
          likes: "",
          publishDate: "",
          tags: [],
          user: {
            firstName: "",
            lastName: "",
            avatar: "",
          },
        };
      },
    },
  },
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
  align-items: center;
}
.card__avatar {
  background: #c4c4c4;
  border-radius: 9999px;
  width: 28px;
  height: 28px;
}
.card__author {
  display: flex;
  justify-content: space-between;
}
.card__author__text {
  display: flex;
  flex-direction: column;
  justify-items: center;

  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  margin-left: 8px;
}
.card__author__date {
  color: var(--gray);
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  line-clamp: 5;
  -webkit-box-orient: vertical;
}

.card__tags {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.card__tags > div {
  margin-right: 4px;
}
.card__tags::-webkit-scrollbar {
  display: none;
}
</style>
