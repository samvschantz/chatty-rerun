import React, { Component } from 'react';

export const ChattyPresentation = props => {

  const navbar = (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
  );

  const messages = (
    <main className="messages">
      props.messages.map((message, i) => (
        <div className="message" key={i}>
          <span className="message-username">{message.username}</span>
          <span className="message-content">{message.content}</span>
        </div>
        ));
{/*
      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>*/}
    </main>
  );

  const chatbar = (
    <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={props.currentUser} />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
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