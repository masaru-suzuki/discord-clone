import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import './Chat.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';
import { Message } from '../Types';
import useSubCollection from '../hooks/useSubCollection';

const Chat = () => {
  const [inputText, setInputText] = useState<string>('');
  const channelID = useAppSelector((state) => state.channel.id);
  const user = useAppSelector((state) => state.user.user!);
  const { subDocuments: messages } = useSubCollection('channels', 'messages');

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // channelsコレクションの中にあるmessagesコレクションの中にデータを追加する
    // TODO: ここ見返す
    const collectionRef: CollectionReference<DocumentData> = collection(db, 'channels', String(channelID), 'messages');

    // コレクション参照は奇数個のセグメントを持つ必要がありますが、Redux/messagesは2個です。
    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user,
    });

    setInputText('');
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="chatMessage">
        {messages.map((message, index) => (
          <ChatMessage key={index} timestamp={message.timestamp} message={message.message} user={message.user} />
        ))}
      </div>
      {/* chatInput */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendMessage(e)}>
          <input
            type="text"
            value={inputText}
            placeholder="#Udemyへメッセージを送信"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
