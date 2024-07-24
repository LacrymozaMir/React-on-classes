import React, { Component } from 'react';
import { ITask } from '../types/ToDo';


interface ToDoItemState {
  isEditing: boolean;
  editValue: string;
}

interface ToDoItemProps {
  task: ITask;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
  editTask: (id: number, value: string) => void;
}

export class ToDoItem extends Component<ToDoItemProps, ToDoItemState> {
  constructor(props: ToDoItemProps){
    super(props);

    this.state = {
      isEditing: false,
      editValue: this.props.task.title,
    }
  }

  edit = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (this.state.editValue.length) {
      
    }
    this.setState({editValue: event.target.value});
    this.props.editTask(this.props.task.id, this.state.editValue);
  }
  
  render() {
    return (
      <article 
        style={{
          textDecoration: this.props.task.completed ? "line-through" : "none",
          color: this.props.task.completed ? "red" : "black",
        }}
      >
        {this.state.isEditing
          ? <input
              type='text'
              value={this.state.editValue}
              onChange={this.edit}
            />
          : <h3 
              onClick={() => this.props.completeTask(this.props.task.id)}
              style={{cursor: "pointer"}}
            >
              <strong>{this.props.task.id}. </strong>{this.props.task.title}
            </h3>
        }
        <button onClick={() => this.props.deleteTask(this.props.task.id)}>delete</button>
        {this.state.isEditing
          ? <button onClick={() => this.setState({isEditing: false})}>ok</button> 
          : <button onClick={() => this.setState({isEditing: true})}>edit</button>
        }
      </article>
    )
  }
}

export default ToDoItem
