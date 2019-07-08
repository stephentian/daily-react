import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div>
        这是测试动态路由功能
         动态路由的值为：{this.props.match.params.value}
      </div>
    );
  }
}

export default Info
