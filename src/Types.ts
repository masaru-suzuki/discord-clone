import { Timestamp } from 'firebase/firestore';

export interface InitialUserState {
  user: null | {
    uid: string;
    photoURL: string;
    email: string;
    displayName: string;
  };
}

export interface Channel {
  id: string | null;
  channelName: string | null;
}

export interface Message {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photoURL: string;
    email: string;
    displayName: string;
  };
}
