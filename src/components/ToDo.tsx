import { Component } from "react";
import { ITask } from "../types/ToDo";
import ToDoList from "./ToDoList";
import { fetchTasks } from "../api/toDo";

interface ToDoState {
    tasks: ITask[];
}

interface ToDoProps {

}

export async function http(request: string): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}



export class ToDo extends Component<ToDoProps, ToDoState> {
    constructor(props: ToDoProps) {
        super(props);

        this.state = {
            tasks: [
                {id: 1, title: 'dasda', completed: true, userId: 1},
                {id: 2, title: 'dasda 2', completed: true, userId: 5},
                {id: 3, title: 'dasda 3', completed: false, userId: 2},
            ],
        }
    }

    componentDidMount(): void {
        this.addTask();
        console.log('ToDo is mount!');

        fetchTasks().then(resp => this.setState(({tasks: resp})));
    }

    componentWillUnmount(): void {
        console.log('unmount ToDo!')
    }

    addTask() {
        this.setState(({tasks}) => ({
            tasks: [...tasks, {id: 4, title: '121212', completed: true, userId: 1}]
        }));
    }

    render() {
        return (
            <section>
                <ToDoList tasks={this.state.tasks}/>
            </section>
        )
    }


}