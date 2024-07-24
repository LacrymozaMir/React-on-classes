import React, { Component } from 'react'
import { ITask } from '../types/ToDo';
import { error } from 'console';


interface ToDoFormState {
    title: string;
    error: boolean;
}

interface ToDoFormProps {
    addTask: (newTask: ITask) => void;
}

export default class ToDoForm extends Component<ToDoFormProps, ToDoFormState> {
  constructor(props: ToDoFormProps) {
    super(props);

    this.state = {
      title: '',
      error: false,
    }
  }

  setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({title: event.target.value});
  }

  createTask = (event: React.MouseEvent) => {
    event.preventDefault();

    if(this.state.title.length !== 0) {
      const newTask: ITask = {id: Date.now(), title: this.state.title, completed: false, userId: 1}
      this.props.addTask(newTask);
      this.setState({title: ''});
    } else {
      this.setState(({error: true}));
    }
  }
  
    render() {
    return (
        <section>
            <h1>Create new task</h1>
            <form>
                <input 
                    type="text" 
                    value={this.state.title}
                    onChange={this.setValue}
                    onBlur={() => this.setState(({error: false}))}
                    onFocus={() => this.setState(({error: false}))}
                />
                <button onClick={(event: React.MouseEvent) => this.createTask(event)}>Create</button>
            </form>
            {this.state.error &&
            <div>You cannot create task with empty title!</div>
            }
        </section>
    )
  }
}

