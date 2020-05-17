import React, { Component } from "react";
import Tweet from "./Tweet.js";
import NewQuote from "./NewQuote.js";

export class Quote extends Component {
  state = {
    quote: "loading...",
    author: "loading... ",
  };

  getQuote = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const singleQuote =
          data.quotes[Math.floor(Math.random() * data.quotes.length)];
        this.setState({
          quote: singleQuote.quote,
          author: singleQuote.author,
        });
      });
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="container text-center d-flex align-items-center vh-100 justify-content-center">
        <div className="card" style={{ width: "max-content" }}>
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p id="text">"{this.state.quote}"</p>
              <footer id="author" className="blockquote-footer">
                {this.state.author}
              </footer>
              <div className="d-flex justify-content-between mt-3">
                <Tweet data={this.state} />
                <NewQuote getQuote={this.getQuote} />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
