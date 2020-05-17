import React, { Component } from "react";

export default class Tweet extends Component {
  render() {
    const linkText = `"${this.props.data.quote}" ${this.props.data.author}`;
    const link = `https://twitter.com/intent/tweet?text=${linkText}&hashtags=quote`;
    return (
      <a
        id="tweet-quote"
        href={link}
        className="btn btn-secondary px-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter fa-2x"></i>
      </a>
    );
  }
}
