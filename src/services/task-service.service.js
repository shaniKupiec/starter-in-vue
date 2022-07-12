import { storageService } from "./storage.service";

export const taskService = {
  query,
  saveTask,
  removeTask,
  getTaskById,
};

async function query() {
//   try {
    var tasks = storageService.loadFromStorage("TASKS");
    if (!tasks) {
      tasks = [
        {
          id: "sdfgh",
          title: "todo",
          doneAt: null,
        },
        {
          id: "dfgh",
          title: "todo2",
          doneAt: 1651956154,
        },
      ];
      storageService.saveToStorage("TASKS", tasks);
    }
    return tasks;
//   } catch (err) {
//     throw err;
//   }
}

async function saveTask(task) {
//   try {
    return task.id ? _updateTask(task) : _addTask(task);
//   } catch (err) {
//     throw err;
//   }
}

async function removeTask(taskId) {
//   try {
    const tasks = await query();
    const idx = tasks.findIndex((task) => task.id === taskId);
    tasks.splice(idx, 1);
    storageService.saveToStorage("TASKS", tasks);
//   } catch (err) {
//     throw err;
//   }
}

async function getTaskById(id) {
//   try {
    const tasks = await query();
    return tasks.find((task) => task.id === id);
//   } catch (err) {
//     throw err;
//   }
}

async function _updateTask(task) {
//   try {
    const tasks = await query();
    const idx = tasks.findIndex((t) => t.id === task.id);
    tasks.splice(idx, 1, task);
    storageService.saveToStorage("TASKS", tasks);
    return task;
//   } catch (err) {
//     throw err;
//   }
}

async function _addTask(task) {
//   try {
    task.id = _makeId();
    const tasks = query();
    tasks.push(task);
    storageService.saveToStorage("TASKS", tasks);
    return task;
//   } catch (err) {
//     throw err;
//   }
}

function _makeId(length = 5) {
  var txt = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
