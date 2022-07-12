<template>
  <section>task edit id: {{ taskId }}</section>
  <form @submit.prevent="saveForm">
    <label for="title"> Title </label>
    <input type="text" id="title" v-model="task.title" />
    <label for="isDone"> is done ? </label>
    <input type="checkbox" id="isDone" v-model="isDone" />
    <button type="submit">save</button>
  </form>
  <button @click="back">back</button>
  <pre>{{ task }}</pre>
  <pre>isDone {{ isDone }}</pre>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      taskId: 0,
      task: {},
      title: null,
      isDone: false,
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
      if (this.task.doneAt) this.isDone = true;
    },
    async saveForm() {
      if (!!this.task.doneAt !== this.isDone) this.task.doneAt = this.isDone ? Date.now() : null;
      await this.$store.dispatch({ type: "saveTask", taskToSave: this.task });
      this.back();
    },
  },
  computed: {},
};
</script>
