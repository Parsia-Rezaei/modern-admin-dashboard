import "./Home.css";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import xAxisData from '../../datas.js';


const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart title="Month Sale" data={xAxisData} dataKey="Sale" />
    </div>
  );
};

export default Home;
