import React, { Component } from "react";

class Button1 extends Component {
    action(e) {
        e.preventDefault()
        console.log("Submit1", this)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.action}>
                <button>Submit1</button>
                </form>
            </div>
        )
    }
}

class Button2 extends Component {
    action(e) {
        e.preventDefault()
        console.log("Submit2", this)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.action.bind(this)}>
                <button>Submit2</button>
                </form>
            </div>
        )
    }
}

export default class App extends Component {
    action(e) {
        e.preventDefault()
        console.log("Submit3", this)
    }

    render() {
        return(
            <div>
                <Button1/>
                <Button2/>
                <form onSubmit={(e) => this.action(e)}>
                <button>Submit3</button>
                </form>
            </div>
        )
    }
}