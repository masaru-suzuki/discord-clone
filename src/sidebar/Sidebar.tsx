import React from 'react';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarChannel from './SidebarChannel';
import { login } from '../features/usersSlice';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon -nobg">
          <img src="/discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="/logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* sidebar channel */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src="./icon.png" alt="" />
              <div className="accountName">
                <h4>Masaru</h4>
                <span>#8154</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <KeyboardVoiceIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
