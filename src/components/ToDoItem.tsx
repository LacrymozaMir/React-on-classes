import React, { Component } from 'react'
import { ITask } from '../types/ToDo';
// import cl from 

interface ToDoItemState {

}

interface ToDoItemProps {
    task: ITask;
}

export class ToDoItem extends Component<ToDoItemProps, ToDoItemState> {
  constructor(props: ToDoItemProps){
    super(props);


    this.state = {

    }

  }
  
    render() {
    return (
      <article>
        <h3><strong>{this.props.task.id}. </strong>{this.props.task.title}</h3>
        <button>delete</button>
      </article>
    )
  }
}

export default ToDoItem
