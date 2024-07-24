import React, { Component } from 'react'

interface ToDoControlPanelProps {
    completeAllTasks: () => void;
    deleteAllTasks: () => void;
}

interface ToDoControlPanelState {

}

export class ToDoControlPanel extends Component<ToDoControlPanelProps, ToDoControlPanelState> {
    constructor(props: ToDoControlPanelProps) {
        super(props);

        this.state = {}
    }


  render() {
    return (
      <section>
        <button onClick={this.props.completeAllTasks}>
            Complete all
        </button>
        <button onClick={this.props.deleteAllTasks}>
            Remove completed tasks
        </button>
      </section>
    )
  }
}

export default ToDoControlPanel
