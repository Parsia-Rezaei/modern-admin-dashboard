import "./Features.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Features = () => {
  return (
    <div className="features">
      <div className="feature-item">
        <span className="feature-title">Revenue</span>
        <div className="feature-container">
          <span className="feature-money">
          $2,415
          </span>
          <span className="feature-rate">
            <ArrowDownwardIcon className="feature-icon negative" />
            -11.5
          </span>
        </div>
        <span className="feature-sub">
            Compared to last month
        </span>
      </div>
      <div className="feature-item">
        <span className="feature-title">Sales</span>
        <div className="feature-container">
          <span className="feature-money">
          $3,500
          </span>
          <span className="feature-rate">
            <ArrowUpwardIcon className="feature-icon " />
            +20.5
          </span>
        </div>
        <span className="feature-sub">
            Compared to last month
        </span>
      </div>
      <div className="feature-item">
        <span className="feature-title">Investment</span>
        <div className="feature-container">
          <span className="feature-money">
          $5000
          </span>
          <span className="feature-rate">
            <ArrowUpwardIcon className="feature-icon" />
            +20
          </span>
        </div>
        <span className="feature-sub">
            Compared to last month
        </span>
      </div>
    </div>
  );
};

export default Features;
