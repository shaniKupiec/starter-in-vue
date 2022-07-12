import { taskService } from "../../services/task-service.service";

export default {
  state: {
    tasks: [],
  },
  getters: {
    tasks(state) {
      return JSON.parse(JSON.stringify(state.tasks));
    },
  },
  mutations: {
    setTasks(state, { tasks }) {
      state.tasks = tasks;
    },
    addTask(state, { task }) {
      state.tasks.push(task);
    },
    updateTask(state, { task }) {
      const idx = state.tasks.findIndex((t) => t.id === task.id);
      state.tasks.splice(idx, 1, task);
    },
    removeTask(state, { id }) {
      const idx = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(idx, 1);
    },
  },
  actions: {
    async loadTasks({ commit }) {
      commit({ type: "setIsLoading", isLoading: true });
      try {
        setTimeout(async () => {
          const tasks = await taskService.query({});
          commit({ type: "setTasks", tasks });
        }, 1000);
      } catch (err) {
        console.error("Cannot Load tasks", err);
        throw err;
      } finally {
        setTimeout(() => {
          commit({ type: "setIsLoading", isLoading: false });
        }, 1000);
      }
    },
    async getTaskById(_, { id }) {
      try {
        return await taskService.getTaskById(id);
      } catch (err) {
        console.error("Cannot Edit/Add task", err);
        throw err;
      }
    },
    async saveTask({ commit }, { taskToSave }) {
      try {
        const task = await taskService.saveTask(taskToSave);
        if (taskToSave.id) {
          commit({ type: "updateTask", task });
        } else {
          commit({ type: "addTask", task });
        }
        return task;
      } catch (err) {
        console.error("Cannot Edit/Add task", err);
        throw err;
      }
    },
    async removeTask({ commit }, { id }) {
      try {
        await taskService.removeTask(id);
        commit({ type: "removeTask", id });
      } catch (err) {
        console.error("Cannot remove task", err);
        throw err;
      }
    },
  },
};
