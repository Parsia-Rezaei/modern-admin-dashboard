import "./Topbar.css";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import avatar from '/public/avatar.jpg';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">Parsia</span>
        </div>
        <div className="top-right">
            <div className="topbar-icon-container">
                <NotificationsActiveIcon />
                <span className="top-icon-badge">2</span>
            </div>
            <div className="topbar-icon-container">
                <LanguageIcon />
                <span className="top-icon-badge">3</span>
            </div>
            <div className="topbar-icon-container">
                <SettingsIcon />
                <span className="top-icon-badge">4</span>
            </div>
            {/* avatart */}
            <img className="top-avatar" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
