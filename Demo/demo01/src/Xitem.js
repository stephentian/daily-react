import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class XiaoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleClick = this.handleClick.bind(this)
  }
  static propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    name: PropTypes.string.isRequired
  }
  static defaultProps = {
    name: 'stephen'
  }
  // componentDidMount() {
  //   console.log('1111');
  //   axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
  //   .then((res) => {
  //     console.log('res:', res);
  //   }).catch(err => {console.log(err);
  //   })
  // }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>{this.props.content} —— {this.props.name} </div>
     );
  }
}

export default XiaoItem;
