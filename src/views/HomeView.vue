<template>
  <main class="page home">
    <section>
      <BaseButton text="Add new post" />
    </section>
    <section id="posts"></section>
  </main>
</template>

<script>
// @ is an alias to /src
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "HomeView",
  components: { BaseButton },
};
</script>
