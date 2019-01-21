import React, {Component} from 'react';
import {ChattyPresentation} from './ChattyPresentation.jsx'
import {messageList} from './messageList.jsx'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [],
      newName: '',
      connectedUsers: 0
    }

    this.handleKeyup  = this.handleKeyup.bind(this);
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://localhost:3001/");
    this.ws.addEventListener('message', (event) => {
      let msgObj = JSON.parse(event.data);
      if (msgObj.type === 'connectCount'){
        this.setState({ connectedUsers: msgObj.num });
      } else {
        if(msgObj.type === 'notification'){
          msgObj.username = msgObj.newName;
          this.setState({ currentUser:{ name:msgObj.newName }});
        }
        let oldMsgArray = this.state.messages
        this.setState({ messages: [...oldMsgArray, msgObj] });
      }
    })
    document.addEventListener("keyup", this.handleKeyup);
    document.addEventListener("onchange", this.onChange);
  }

  handleKeyup(evt){
    let message        = '';
    if(evt.target.className === 'chatbar-username'){
      this.setState({ newName: evt.target.value });
    }
    if(evt.target.className === 'chatbar-message'){
      message = evt.target.value;
    }
    let msgObj         = {};
    let oldMsgArray    = this.state.messages
    msgObj.username    = this.state.currentUser.name;
    msgObj.content     = message;
    msgObj.newName     = this.state.newName;
    if(evt.key === "Enter"){
      if(evt.target.className === 'chatbar-message'){
        evt.target.value = '';
      }
      this.ws.send(JSON.stringify(msgObj));
    }
  }

  render() {
    return (
      <ChattyPresentation
        currentUser    = { this.state.currentUser }
        messages       = { this.state.messages }
        handleKeyup    = { this.handleKeyup }
        newName        = { this.state.newName }
        connectedUsers = { this.state.connectedUsers }
      />
    );
  }
}

export default App;
