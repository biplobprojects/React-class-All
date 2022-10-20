import React, { Component } from "react";

class Message extends Component {
  state = {
    msg: "hello",
  };

  messageHandler = (msg) => {
    this.setState({ msg: msg });
  };

  render() {
    return (
      <div>
        <h2>wish component: {this.state.msg}</h2>

        <button onClick={this.messageHandler.bind(this, "GoodM")}>GM</button>
        <button onClick={this.messageHandler.bind(this, "GoodA")}>GA</button>
        <button onClick={() => {
            this.setState({ msg: "goodnight go for dinner" });
          }} >GN</button>
      </div>
    );
  }
}

export default Message;
