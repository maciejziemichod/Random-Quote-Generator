import React, { Component } from "react";

export default class NewQuote extends Component {
  render() {
    return (
      <button
        id="new-quote"
        onClick={this.props.getQuote}
        className="btn btn-primary"
      >
        New Quote
      </button>
    );
  }
}
