import React, { Component } from "react";

export default class Question extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>{this.props.question.question}</p>
      </div>
    );
  }
}
