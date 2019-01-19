import React, {Component} from 'react';
import {ChattyPresentation} from './ChattyPresentation.jsx'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <ChattyPresentation />
    );
  }
}

export default App;
