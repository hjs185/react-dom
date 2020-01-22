import React from 'react';
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg1: '你好'
    }
  }

  render () {
    return (
      <div>
        <h1>{this.state.msg1}啊！！！！！！！！！！！！</h1>
        <h1>44444444444444</h1>
      </div>
    )
  }
}




