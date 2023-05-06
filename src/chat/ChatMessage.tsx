import { FC } from 'react';
import './ChatMessage.scss';
import { Avatar } from '@mui/material';
import { Message } from '../Types';

const ChatMessage: FC<Message> = ({ timestamp, message, user }) => {
  return (
    <div className="message">
      <Avatar src={user?.photoURL} />
      <div className="messageInfo">
        <h4>
          {user?.displayName}
          <span className="messageTimestamp">{new Date(timestamp?.toDate()).toLocaleDateString()}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
