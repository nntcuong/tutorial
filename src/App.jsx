
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
function App() {
  return (
    <div class="container">
      <div class="navigation">
      <Header />
      </div>
      <div class="main">
        <TopBar />

        <Outlet>

        </Outlet>
      </div>
      
    </div>
  );
}

export default App
