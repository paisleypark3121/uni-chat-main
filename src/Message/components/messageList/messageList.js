import { Message } from "../message/message";
import React, { useEffect,useRef } from 'react';
import './messageList.css'

export function MessageList(props) {
    const { messages } = props;
    const messageListRef = useRef(null);
    useEffect(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    }, [messages]);
  
  
    return (
      <div className="message-list" ref={messageListRef}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    );
  }