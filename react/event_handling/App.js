import React, { Component } from "react";

class Button extends Component {
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

export default class App extends Component {
    action(e) {
        e.preventDefault()
        console.log("Submit2", this)
    }

    render() {
        return(
            <div>
                <Button/>
                <form onSubmit={(e) => this.action(e)}>
                <button>Submit2</button>
                </form>
            </div>
        )
    }
}