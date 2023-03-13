import "./style.css";
import Toolbar from "../../component/Toolbar";
import { BurgerBuilder } from "../BurgerPage";
import Sidebar from "../../component/SideBar";

function App() {
  return (
    <div>
      <Toolbar />
      <Sidebar />
      <main className="Content">
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
