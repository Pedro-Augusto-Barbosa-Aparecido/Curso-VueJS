<template>
  <footer>
    <a v-for="(socialLink, index) in socialLinks" class="socialLink" target="_blank" :href="socialLink.link" :key="index">
      <img :src="socialLink.icon" :alt="socialLink.label" :title="socialLink.label">
    </a>
  </footer>
</template>

<script>

import api from "@/services/api.js";

export default {
  name: "Footer",
  data () {
    return {
      socialLinks: []

    }

  },
  mounted() {
    api.get("/social-links.json").then((response) => {
      this.socialLinks = response.data;

    });

  }

}

</script>

<style scoped>
  footer {
    width: 100%;
    height: 60px;

    background-color: var(--color-background-nav);

    display: flex;

    justify-content: center;
    align-items: center;

  }

  .socialLink {
    border: 2px solid var(--color-text-light);

    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 50%;

    height: 40px;
    width: 40px;

    margin: 0 10px;

  }

  .socialLink img {
    width: 20px;

  }

</style>