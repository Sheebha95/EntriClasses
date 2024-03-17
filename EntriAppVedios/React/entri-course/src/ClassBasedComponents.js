import React, { Component } from 'react'

export default class ClassBasedComponents extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }
    buttonClickHandler = () => {
        alert(this.props.data);
    }

  render() {
    return (
      <div>
        <h1>This is a Class Based Components. Data is {this.props.data}</h1>
        <button type='button' onClick={this.buttonClickHandler}>Clck Here</button>
      </div>
    )
  }
}
