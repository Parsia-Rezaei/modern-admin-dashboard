import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Topbar />
       <div className="container">
      <Sidebar />
      {router}
      </div>
    </>
  );
}

export default App;
