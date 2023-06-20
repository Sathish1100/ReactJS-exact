import React, { useState } from 'react';
import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        id: Date.now(),
        text: inputText,
        user: randomUser,
        likes: 0
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleLikeClick = (id) =>
      if (message.id === id) {
        return {
          ...message,
          likes: message.likes + 1
        };
      }
      return message;
    });
    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      <div className="message-container">
        {messages.map(message => (
          <div className="message" key={message.id}>
            <div className="message-info">
              <span className="username">{message.user}</span>
              <button className="like-button" onClick={() => handleLikeClick(message.id)}>
                Like ({message.likes})
              </button>
            </div>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
}

export default App;
