import React, { Component } from 'react'
import ToDoItem from './ToDoItem';
import { ITask } from '../types/ToDo';

interface ToDoListState {

}

interface ToDoListProps {
    tasks: ITask[] | null;
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
        {this.props.tasks?.map((task, key) => 
            <ToDoItem key={key} task={task}/>
        )}
      </ul>
    )
  }
}

export default ToDoList
