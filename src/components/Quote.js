import React, { Component } from "react";
import Twitter from "./Twitter";

export class Quote extends Component {
  render() {
    return (
      <div className="container text-center d-flex align-items-center vh-100 justify-content-center">
        <div class="card" style={{ width: "max-content" }}>
          <div class="card-header">Quote</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
              <Twitter />
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
