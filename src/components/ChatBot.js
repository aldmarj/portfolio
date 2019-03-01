import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Pusher from 'pusher-js';

import 'react-chat-widget/lib/styles.css';

class ChatBot extends Component {
 
  componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
        
        const pusher = new Pusher('1c026c5113825e043b38', {
            cluster: 'eu',
            encrypted: true,
        });

        const channel = pusher.subscribe('bot');
        channel.bind('bot-response', data => {
        
        addResponseMessage(data.message);
    });
  }

  handleSubmit(newMessage)  {

    fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        message: newMessage,
      }),
    });
  };

  handleNewUserMessage = (newMessage) => {
    this.handleSubmit(newMessage);
  }

render (){
    return(
        <Widget 
          handleNewUserMessage={this.handleNewUserMessage}
          title="Weather ChatBot"
          subtitle="Ask me about the weather in your area." 
        />
    )
}

}

export default ChatBot;