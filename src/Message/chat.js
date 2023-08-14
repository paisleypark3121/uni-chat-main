import React, { useState, useEffect,useRef } from 'react';
import { MessageForm } from './components/messageForm/messageForm'
import { MessageList } from './components/messageList/messageList'
import { Header } from '../Generics/header';
import './chat.css'

export function Chat() {

  const [messages, setMessages] = useState([]);

  const createNewMessage = (text,author) => {
    return { text, author, timestamp: new Date().toLocaleString()};
  }

  const updateMessages = (text,author) => {
    const newMessage = createNewMessage(text, author);
    setMessages(messages => [...messages,newMessage]);
    return;
  }

  const handleMessageSubmit = (text) => {
    updateMessages(text,'Me');
    sendMessageToServer(text);
  }


  const sendMessageToServer = (message) => {
    console.log('message sent '+message);
    fetch('http://127.0.0.1:3002/question', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ QUESTION: message })
    }).then(async value => {
      const data = await value.json();
      console.log('value received '+data);
      updateMessages(data.response,'Bot');
    }).catch(error => {
      alert(error);
    })
  }

  return (
    <div className="chat">
      <Header />
      <MessageList messages={messages} />
      <MessageForm onMessageSubmit={handleMessageSubmit} />
    </div>
  );

}