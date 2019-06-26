import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  handleClick = () => {
    let count = this.state.count
    count ++
    this.setState({
      count: count
    })
  }
  render() {
    return (
      <div>
        <h2>React 生命周期</h2>
        <button onClick={this.handleClick}>点击 + 1，并且触发 componentReceiveProps</button>
        <p>{this.state.count}</p>
        <Child count={this.state.count} />
      </div>
    )
  }
}

export default Parent
