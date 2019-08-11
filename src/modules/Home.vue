<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
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
