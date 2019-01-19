import React, {Component} from 'react';
import {ChattyPresentation} from './ChattyPresentation.jsx'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: "Anonymous",
      messages: []
    }
  }

  render() {
    return (
      <ChattyPresentation currentUser={this.state.currentUser} messages={this.state.messages} />
    );
  }
}

export default App;
