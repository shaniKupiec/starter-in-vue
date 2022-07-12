<template>
  <button @click="back">back</button>
  <pre>{{ task }}</pre>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      taskId: 0,
      task: {},
    };
  },
  created() {
    this.taskId = this.$route.params.taskId;
    this.loadTask();
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    async loadTask() {
      this.task = await this.$store.dispatch({ type: "getTaskById", id: this.taskId });
    },
  },
  computed: {},
};
</script>
