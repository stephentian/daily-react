import React, { Component } from 'react'
import XiaoItem from './Xitem';
import CoolComponent from './components/CoolComponent'

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
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    }, () => {
      // 这样写就正常了
      console.log(this.ul.querySelectorAll('div').length);
    })
    // setState 是异步的，故会打印的 length 少了 1，打印的是上一步的 length
    // console.log(this.ul.querySelectorAll('div').length);
    // 需要去调用 setState 提供的回调函数
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
      <div className="App">
        <CoolComponent name={'Stephen'}></CoolComponent>
        {/* JSX中 正确的注释写法 */}
        <input value={this.state.inputValue} onChange={this.handleChange.bind(this)}
        // ref 的使用
        ref={(input) => {this.input = input}}
        />
        <span>输入的值为：{this.state.inputValue}</span>
        <br/>
        <br />
        <button onClick={this.addList}>增加服务</button>
        <ul ref={(ul) => {this.ul = ul}}>
          {
            this.state.list.map((item, index) => {
              return (
                  <XiaoItem index={index} content={item} key={index} deleteItem={this.deleteItem.bind(this)} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Xiao
