import React, { Component } from "react";

class Display extends Component {
    render() {
        return(
            <p>Component currently mounted</p>
        )
    }

    componentDidMount() {
        console.log('component mounted')
    }

    componentWillUnmount() {
        console.log('component unmounted')
    }
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mount: false,
            count: 0,
            display: false,
            del : true
        }
        
    }

    mountButton() {
        this.setState({mount: true, display: true, del: false})
        console.log('OK')
        console.log(this.state.mount)
    }
    
    unmountButton() {
        this.setState({mount: false, display: false, del: true})
        console.log('OK')
        console.log(this.state.mount, this.state.display)
    }

    add() {
        console.log("add")
        this.setState({count: this.state.count + 1})
    }

    sub() {
        console.log("sub")
        this.setState({count: this.state.count - 1})
    }

    componentDidUpdate() {
        console.log('component updated')
    }

    render() {
        let comp;
        if(!this.state.del) comp = <Display/>
        return(
            <div>
                <button onClick={() => this.mountButton()}>mount</button>
                <button onClick={() => this.add()} disabled = {!this.state.mount}>+</button>
                <button onClick={() => this.sub()} disabled = {!this.state.mount}>-</button>
                <button onClick={() => this.unmountButton()} disabled = {!this.state.mount}>unmount</button>
                {comp}
                {this.state.display ? <div>
                    <p>count:{this.state.count}</p>
                </div> : null}
            </div>
        )
    }


}