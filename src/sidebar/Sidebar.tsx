import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarChannel from './SidebarChannel';
import { auth } from '../firebase';
import { useAppSelector } from '../app/hooks';
import useCollection from '../hooks/useCollection';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user!);
  const { displayName, uid, photoURL } = user;
  // TODO: この書き方参考にする
  const { documents: channels } = useCollection('channels');

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
            {channels.map((channel) => (
              <SidebarChannel key={channel.id} id={channel.id} channelName={channel.channelName} />
            ))}
          </div>

          <div className="sidebarFooter">
            {/* onClickでlogoutを呼ぶわけではない */}
            <div className="sidebarAccount" onClick={() => auth.signOut()}>
              <img src={photoURL} alt="" />
              <div className="accountName">
                <h4>{displayName}</h4>
                <span>#{uid.substring(0, 4)}</span>
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
