import React, { FC } from 'react';
import './Sidebar.scss';
import { Channel } from '../Types';
import { useAppDispatch } from '../app/hooks';
import { activateChannel } from '../features/channelSlice';

const SidebarChannel: FC<Channel> = ({ id, channelName }) => {
  const dispatch = useAppDispatch();
  const changeChannel = (id: string | null, channelName: string | null) =>
    dispatch(activateChannel({ id, channelName }));

  return (
    <div className="sidebarChannel" onClick={() => changeChannel(id, channelName)}>
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
