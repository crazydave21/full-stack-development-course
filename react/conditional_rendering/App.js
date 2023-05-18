import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {display: true}

        this.clickButton = () => {this.setState({display: false})}
        this.clickButtonDisable = () => {this.setState({display: true})}
    }

    render() {
        let comp;
        if(this.state.display) comp = <p>Hello</p>
        return(
            <div>
                <button onClick={this.clickButton}>Disable</button>
                <button onClick={this.clickButtonDisable} disabled = {this.state.display}>Enable</button>
                {comp}
            </div>
        )
    }
}