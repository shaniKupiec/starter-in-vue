<template>
  <section class="task">
    <div class="task__desc">
      <span class="task__desc__title"> {{ task.title }}</span>
      <span class="task__desc__doneAt"> {{ doneAt }}</span>
    </div>
    <div class="task__actions">
      <button @click="moveToEdit">edit</button>
      <button @click="moveToDetails">details</button>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    task: Object,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    moveToDetails() {
      this.$router.push(`/task/${this.task.id}`);
    },
    moveToEdit() {
      this.$router.push(`/task/edit/${this.task.id}`);
    },
  },
  computed: {
    doneAt() {
      return this.task.doneAt ? new Date(this.task.doneAt).toUTCString() : "not done yet";
    },
  },
};
</script>
