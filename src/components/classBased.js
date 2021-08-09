import React, { Component } from 'react'

export default class classBased extends Component {

    constructor(props) {
        super(props);
        this.state = { data: new Data() .toUTCString() };
        this.setData = this.setData.bind(this);
    }
    componentDidMount() {
        console.log ('class mount :> ');
    }

    setData() {
        this.setState({ data: "changed" })
    }

    render() {
        return (
            <div>
                <h2>Class based</h2>
                <p>{this.state.data</p>
                <button onClick={this.setData}>add</button>
            </div>
        )
    }
}
