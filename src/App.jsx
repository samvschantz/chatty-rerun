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
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("onchange", this.onChange);
  }

  onChange(evt){
    let user = evt.target.value;
    this.setState({ currentUser:{name: user} })
  }

  handleKeydown(evt){
    console.log('keydown being handled?')
    let message = evt.target.value;
    let msgObj  = {};
    let oldMsgArray = this.state.messages;
    console.log(typeof oldMsgArray)
    if(evt.key === "Enter"){
      msgObj.username = this.state.currentUser.name;
      msgObj.content  = message;
      let newMsgArray = oldMsgArray.push(msgObj);
      console.log(newMsgArray);
      this.setState({ messages: newMsgArray});
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
