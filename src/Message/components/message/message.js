import './message.css'
export function Message(props) {
    const { text, author, timestamp } = props.message;

  
    return (
      <div className={author==="Bot" ? 'message-bot' : 'message'}>
        <p className={author==="Bot" ? 'message-text-bot' : 'message-text'}>{text}</p>
        <p className="message-details">
          <span className="message-timestamp">{timestamp}</span>
        </p>
      </div>
    );
  }
