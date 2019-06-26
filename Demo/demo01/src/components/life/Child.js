import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    console.log('component will mount!')
  }
  componentDidMount() {
    console.log('component did mount!')
  }
  componentWillReceiveProps(newProps) {
    console.log(`component will receive ${newProps.count}`)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.count === 5) {
      return true
    } else {
      console.log(`should component not update`)
      return false
    }
  }
  componentWillUpdate() {
    console.log('component will update')
  }
  componentDidUpdate() {
    console.log('component did update')
  }
  render() {
    return (
      <div>
        <p>这是个子组件，测试生命周期</p>
        <p>{ this.props.count}</p>
      </div>
    )
  }
}

export default Child
