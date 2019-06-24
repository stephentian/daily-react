import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
