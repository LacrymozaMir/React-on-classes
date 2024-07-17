import { http } from "../components/ToDo";

export function fetchTasks() {
    const response = http('https://jsonplaceholder.typicode.com/todos?userId=1');
    return response;
}