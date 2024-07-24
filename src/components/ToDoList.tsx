import React, { Component } from 'react'
import ToDoItem from './ToDoItem';
import { ITask } from '../types/ToDo';

interface ToDoListState {

}

interface ToDoListProps {
    tasks: ITask[] | null;
    deleteTask: (id: number) => void;
    completeTask: (id: number) => void;
    editTask: (id: number, value: string) => void;
}

export class ToDoList extends Component<ToDoListProps, ToDoListState> {
  constructor(props: ToDoListProps) {
    super(props);

    this.state = {

    }
  }
  
  
    render() {
    return (
      <ul>
        {this.props.tasks?.map((task) => 
            <li key={task.id}><ToDoItem editTask={this.props.editTask} completeTask={this.props.completeTask} deleteTask={this.props.deleteTask} key={task.id} task={task}/></li>
        )}
      </ul>
    )
  }
}

export default ToDoList
