import React, { Component } from 'react';

export const ChattyPresentation = props => {

  const navbar = (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
  );


  let messages = <div/>

  if(props.messages.length > 0){
    messages = (
      props.messages.map((message, i) => (
        <div className="message" key={i}>
          <span className="message-username">{message.username}</span>
          <span className="message-content">{message.content}</span>
        </div>
      ))
    )
  }

  const chatbar = (
    <form className="chatbar" >
      <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={props.currentUser.name} />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" handleKeydown={(evt) => props.handleKeyup(evt)}/>
    </form>
  );

  return (
    <div>
    {navbar}
    <main className="messages">
      {messages}
    </main>
    {chatbar}
    </div>
  );
};