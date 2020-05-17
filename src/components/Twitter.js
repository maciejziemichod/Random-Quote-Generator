import React, { Component } from "react";

export class Twitter extends Component {
  render() {
    return (
      <a
        href="https://twitter.com/"
        class="btn btn-secondary px-2 float-left"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-twitter fa-2x"></i>
      </a>
    );
  }
}

export default Twitter;
