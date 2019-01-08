import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    // imageUrl: "https://picsum.photos/200"
  };

  //   constructor() {
  //     super();
  //     console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    console.log("Increment CLicked", this);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count + 1);
  };

  handleDecreament = () => {
    console.log("Decreament CLicked", this);
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
      console.log(this.state.count - 1);
    } else this.setState({ count: this.state.count });
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <button
          onClick={this.handleDecreament}
          className="btn btn-secondary btn-sm m-2"
        >
          Decreament
        </button>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
