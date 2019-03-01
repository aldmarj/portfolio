import React, {Component} from 'react'
import Pusher from 'pusher-js';
import {Launcher} from 'react-chat-window'

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: []
    };
  }

  componentDidMount() {
    const pusher = new Pusher('1c026c5113825e043b38', {
      cluster: 'eu',
      encrypted: true,
    });

    const channel = pusher.subscribe('bot');
    channel.bind('bot-response', data => {
      this._sendMessage(data.message);
    });
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })

    fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        message: message.data.text,
      }),
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'ai',
          type: 'text',
          data: { text } 
        }]
      }) 
    }
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
      />
    </div>)
  }
}

export default ChatBot