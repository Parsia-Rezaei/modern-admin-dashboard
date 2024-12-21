import "./Home.css";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import xAxisData from '../../datas.js';
import WidgetSm from "../../components/WidgetSm/WidgetSm.jsx";
import WidgetLg from "../../components/WidgetLg/WidgetLg.jsx";


const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
