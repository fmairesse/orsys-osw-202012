import React from "react";

export class StateComponent extends React.Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <>
        {this.state.counter}
        <button onClick={this.handleClick}>Clic me</button>
      </>
    );
  }

  handleClick = () => this.setState({ counter: this.state.counter + 1 });
}
