import React, { FC } from 'react';
import './Sidebar.scss';
import { Channel } from '../Types';

const SidebarChannel: FC<Channel> = ({ id, channelName }) => {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
