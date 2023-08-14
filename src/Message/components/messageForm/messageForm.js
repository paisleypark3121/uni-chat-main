import React, { useState } from 'react';
import './messageForm.css'

export function MessageForm(props) {
  const { onMessageSubmit } = props
    
  const [text,setText] = useState("");
  
    const handleSubmit = event => {
      event.preventDefault();
      onMessageSubmit(text);
      setText("");
    }
  
    const handleChange = event => {
      setText(event.target.value)
    }
      return (
        <form className="message-form" onSubmit={handleSubmit}>
          <input
            className="message-form-input"
            type="text"
            placeholder="Type a message..."
            value={text}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      );
  }