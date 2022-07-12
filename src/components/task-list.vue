<template>
  <section class="task-list">
    <taskPreview v-for="task in tasks" :task="task" :key="task.id" />
  </section>
</template>

<script>
import taskPreview from "./task-preview.vue";

export default {
  props: {
    tasks: Object,
  },
  components: {
    taskPreview,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>
