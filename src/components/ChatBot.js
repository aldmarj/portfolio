import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Pusher from 'pusher-js';

import 'react-chat-widget/lib/styles.css';

class ChatBot extends Component {
    constructor(props) {
        super(props);
        this.state = {
        userMessage: '',
        conversation: []
        };
    }

    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
        const pusher = new Pusher('1c026c5113825e043b38', {
            cluster: 'eu',
            encrypted: true,
        });

    const channel = pusher.subscribe('bot');
    channel.bind('bot-response', data => {
        addResponseMessage(data.message);
      const msg = {
        text: data.message,
        user: 'ai',
      };

      this.setState({
        conversation: [...this.state.conversation, msg],
      });
    });
  }

  handleChange = event => {
    this.setState({ userMessage: event.target.value });
  };

  handleSubmit(newMessage)  {

    const msg = {
      text: newMessage,
      user: 'human',
    };

    this.setState({
      conversation: [...this.state.conversation, msg],
    });

    fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        message: newMessage,
      }),
    });

    this.setState({ userMessage: ''});
  };

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    this.handleSubmit(newMessage);
  }

render (){
    return(
        <Widget 
          handleNewUserMessage={this.handleNewUserMessage}
          title="Weather ChatBot"
          subtitle="Ask me about the weather in your area." />
    )
}

}

export default ChatBot;