import React, {Component} from 'react';
import {ChattyPresentation} from './ChattyPresentation.jsx'
import {messageList} from './messageList.jsx'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: []
    }

    this.handleKeydown  = this.handleKeydown.bind(this);
    this.onChange       = this.onChange.bind(this);
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://localhost:3001/");
    this.ws.addEventListener('message', (event) => {
      let msgObj = JSON.parse(event.data);
      console.log(msgObj);
      let oldMsgArray = this.state.messages
      this.setState({ messages: [...oldMsgArray, msgObj]});

    })
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("onchange", this.onChange);
  }

  onChange(evt){
    let user = evt.target.value;
    this.setState({ currentUser:{name: user} })
  }

  handleKeydown(evt){
    let message = evt.target.value;
    let msgObj  = {};
    let oldMsgArray = this.state.messages
    msgObj.username = this.state.currentUser.name;
    msgObj.content  = message;
    if(evt.key === "Enter"){
      this.ws.send(JSON.stringify(msgObj));
    }
  }

  render() {
    return (
      <ChattyPresentation
        currentUser={this.state.currentUser}
        messages={this.state.messages}
        handleKeydown={this.handleKeydown}
        onChange={this.onChange}
      />
    );
  }
}

export default App;
