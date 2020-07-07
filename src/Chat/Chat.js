import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  addMessage = (message) => {
    this.setState((prevState) => ({
      messages: prevState.messages.concat(message),
    }));

    answersData.map((answer) => {
      const { tags: keyWords } = answer;
      if (new RegExp(keyWords.join('|')).test(message.text)) {
        this.setState((prevState) => ({
          messages: prevState.messages.concat(answer),
        }));
        return null;
      }
      return null;
    });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput addMessage={this.addMessage} />
      </main>
    );
  }
}

export default Chat;
