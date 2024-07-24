import { ITask } from "../types/ToDo";

async function http(request: string): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}

export function fetchTasksAPI() {
    const response = http('https://jsonplaceholder.typicode.com/todos?userId=1');
    return response;
}

export function addTaskAPI(task: ITask) {
    const response = fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
          title: task.title,
          completed: false,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });

    return response;
}

export function deleteTaskAPI(id: number) {
    const response = fetch('https://jsonplaceholder.typicode.com/todos' + id, {
        method: 'DELETE',
      });

    return response;
}

export function updateTaskAPI(task: ITask) {
  const response = fetch('https://jsonplaceholder.typicode.com/todos/' + task.id, {
    method: 'PUT',
    body: JSON.stringify({
      title: task.title,
      completed: task.completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}
