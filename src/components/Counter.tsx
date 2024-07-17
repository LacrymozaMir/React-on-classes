import { count } from "console";
import { Component } from "react";
import React from "react";

type CounterState = {
    readonly count: number;
}

type CounterProps = {
    readonly title?: string;
}

export class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps){
        super(props)
        
        this.state = {
            count: 0,
        }
    }

    static getDrivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
        return true ? {count: 2} : null;
    }

    componentDidMount(): void {
        
    }

    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
        return true;
    }
    
    

    handleClickInc = (e: React.MouseEvent<HTMLButtonElement>): void => {
        this.setState(({count}) => ({
            count: ++count,
        }))
    }

    handleClickDec = () => {
        this.setState(({count}) => ({
            count: --count,
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClickInc}>+1</button>
                <button onClick={this.handleClickDec}>-1</button>
            </div>
        )
    }
}