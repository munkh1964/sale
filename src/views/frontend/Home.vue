<template>
  <div>
    <p>Нүүр хуудас</p>
    <Loader v-if="loading" />
  </div>
</template>

<script>
// Get rid of those pesky eslint errors for Materialize-css
// import M from "materialize-css";

export default {
  name: "Home",
  data: () => ({
    loading: true,
  }),
};
</script>

<style scoped></style>
