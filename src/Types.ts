export interface InitialUserState {
  user: null | {
    uid: string;
    photoURL: string;
    email: string;
    displayName: string;
  };
}

export interface Channel {
  id: string;
  channelName: string;
}
