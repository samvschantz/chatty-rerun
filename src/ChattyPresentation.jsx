const ChattyPresentation = props => {

  const navbar = (
    <nav class="navbar">
      <a href="/" class="navbar-brand">Chatty</a>
    </nav>
  );

  const messages = (
    <main class="messages">
      <div class="message">
        <span class="message-username">Anonymous1</span>
        <span class="message-content">I won't be impressed with technology until I can download food.</span>
      </div>
      <div class="message system">
        Anonymous1 changed their name to nomnom.
      </div>
    </main>
  );

  const chatbar = (
    <footer class="chatbar">
      <input class="chatbar-username" placeholder="Your Name (Optional)" />
      <input class="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
  );

  return (
    {navbar}
    {messages}
    {chatbar}
  );
};

export ChattyPresentation;