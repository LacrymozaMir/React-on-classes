import { Component } from "react";

export class Form extends Component<{}, {}> {


    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget)
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log(e.target);
    }


    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <label>
                    Random text:
                    <input 
                        type="text" 
                        onFocus={this.handleFocus}
                        onCopy={this.handleCopy}
                        name="text"
                    />
                    <button
                        type="submit"
                    >Submit</button>
                </label>
            </form>
        )
    }
}