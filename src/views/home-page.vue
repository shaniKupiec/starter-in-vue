<template>
  <taskList :tasks="tasks" />
</template>

<script>
import taskList from "../components/task-list.vue";

export default {
  components: {
    taskList,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("loadTasks");
  },
  methods: {},
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
