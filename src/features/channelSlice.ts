import { createSlice } from '@reduxjs/toolkit';
import { Channel } from '../Types';

const initialState: Channel = {
  id: null,
  channelName: null,
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    activateChannel: (state, { payload }) => {
      if (payload !== null) {
        state.id = payload.id;
        state.channelName = payload.channelName;
      }
    },
  },
});

export const { activateChannel } = channelSlice.actions;

export default channelSlice.reducer;
