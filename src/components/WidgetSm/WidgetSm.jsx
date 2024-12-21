import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../datas";

const WidgetSm = () => {
  return (
    <div className="widget-sm">
      <span className="widget-sm-title">New joined memebers</span>
      <ul className="widget-sm-list">
        {newMembers &&
          newMembers.map((item) => (
            <li key={item.id} className="widget-sm-list-item">
              <img className="widget-sm-img" src={item.img} alt={item.userName} />
              <div className="widget-sm-user">
                <span className="widget-sm-user-name">{item.userName}</span>
                <span className="widget-sm-user-title">
                  {item.title}
                </span>
              </div>
              <button className="widget-sm-button">
                <VisibilityIcon className="widget-sm-icon" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
