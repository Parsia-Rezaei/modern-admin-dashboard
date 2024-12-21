import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MessageIcon from "@mui/icons-material/Message";
import { Link , NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <NavLink className="link" to="/">
              <li className="sidebar-list-item">
                <LineStyleIcon className="sidebar-icon" />
                Home
              </li>
            </NavLink>
            <li className="sidebar-list-item">
              <TimelineIcon className="sidebar-icon" />
              Ananlytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUpIcon className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <NavLink className="link" to="/usersList">
              <li className="sidebar-list-item">
                <PermIdentityIcon className="sidebar-icon" />
                Users
              </li>
            </NavLink>
            <NavLink className="link" to="/newUsers">
              <li className="sidebar-list-item">
                <StorefrontIcon className="sidebar-icon" />
                New user
              </li>
            </NavLink>
            <NavLink className="link" to="products">
              <li className="sidebar-list-item">
                <AttachMoneyIcon className="sidebar-icon" />
                Products
              </li>
            </NavLink>
            <li className="sidebar-list-item">
              <BarChartIcon className="sidebar-icon" />
              Transaction
            </li>
            <li className="sidebar-list-item">
              <MailOutlineIcon className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notification</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <PermIdentityIcon className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <AttachMoneyIcon className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <MessageIcon className="sidebar-icon" />
              Message
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
