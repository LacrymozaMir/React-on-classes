import { Component } from "react";
import { ITask } from "../types/ToDo";
import ToDoList from "./ToDoList";
import { addTaskAPI, deleteTaskAPI, fetchTasksAPI, updateTaskAPI } from "../api/toDo";
import ToDoForm from "./ToDoForm";
import ToDoControlPanel from "./ToDoControlPanel";
import { toASCII } from "punycode";

interface ToDoState {
    tasks: ITask[];
}

interface ToDoProps {}

export class ToDo extends Component<ToDoProps, ToDoState> {
    constructor(props: ToDoProps) {
        super(props);

        this.state = {
            tasks: [],
        }
    }

    componentDidMount(): void {
        console.log('ToDo is mount!');

        fetchTasksAPI().then(resp => this.setState(({tasks: resp})));
    }

    componentWillUnmount(): void {
        console.log('unmount ToDo!');
    }

    addTask = (newTask: ITask): void => {
        this.setState(({tasks}) => ({tasks: [...tasks, newTask]}));

        addTaskAPI(newTask); // fake request
    }

    deleteTask = (id: number): void => {
        this.setState(({tasks}) => ({tasks: tasks.filter(t => t.id !== id)}));

        deleteTaskAPI(id); // fake request
    }

    completeTask = (id: number): void => { 
        this.setState(prevState => ({ 
            tasks: prevState.tasks.map(task =>
                task.id === id 
                ? { ...task, completed: !task.completed } 
                : task
            )
        })); 
    }

    editTask = (id: number, value: string): void => {
        this.setState(prevState => ({ 
            tasks: prevState.tasks.map(task =>
                task.id === id 
                ? { ...task, title: value } 
                : task
            )
        })); 

        const task = this.state.tasks.find(t => t.id === id);
        if (task) {
            updateTaskAPI(task);
        }
    }

    completeAllTasks = (): void => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => (
                task.completed 
                ? task 
                : {
                    ...task,
                    completed: true
                    }))
        }));
    }

    deleteAllTasks = (): void => {
        this.setState(({tasks}) => ({tasks: tasks.filter(t => t.completed === false)}));
    }

    render() {

        return (
            <section>
                <ToDoControlPanel 
                    deleteAllTasks={this.deleteAllTasks} 
                    completeAllTasks={this.completeAllTasks}
                />
                <ToDoForm addTask={this.addTask}/>
                {this.state.tasks.length
                    ? <ToDoList 
                        editTask={this.editTask} 
                        completeTask={this.completeTask} 
                        deleteTask={this.deleteTask} 
                        tasks={this.state.tasks}
                       />
                    : <div>Постов нет!</div>
                }
            </section>
        )
    }
}