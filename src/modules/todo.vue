<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "todo",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      window.apis
        .get("/user?ID=12345")
        .then(function() {
          // console.log(response);
        })
        .catch(function() {
          // console.log(error);
        });
    }
  }
};
</script>
