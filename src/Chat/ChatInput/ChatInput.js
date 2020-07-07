import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  sendMessage = () => {
    const messageContent = document.getElementById('inputMessage').value;
    const message = { text: messageContent, role: ROLE.CUSTOMER };
    this.props.addMessage(message);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input id="inputMessage" type="text" />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
