import React, {Component} from 'react';
import {ChattyPresentation} from './ChattyPresentation.jsx'
import {messageList} from './messageList.jsx'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: "Anonymous",
      messages: []
    }
  }

  componentWillMount(){
    this.setState({
      currentUser: messageList.currentUser,
      messages: messageList.messages
    });
  }

  componentDidMount() {
  console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  render() {
    return (
      <ChattyPresentation currentUser={this.state.currentUser} messages={this.state.messages} />
    );
  }
}

export default App;
