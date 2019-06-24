import React, { Component } from 'react'

class Xiao extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [
        '基础按摩',
        '头部按摩',
        '精油推背'
      ]
    }
    this.addList = this.addList.bind(this)
    // this.deleteItem = this.deleteItem.bind(this)
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  deleteItem(index) {
    // 先声明一个局部变量,
    // 记住 React 是禁止直接操作 state 的
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <div>
        {/** JSX中 正确的注释写法 */}
        <input value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
        <span>输入的值为：{this.state.inputValue}</span>
        <br/>
        <br />
        <button onClick={this.addList}>增加服务</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.deleteItem.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Xiao
