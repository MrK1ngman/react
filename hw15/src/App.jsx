import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DriftPage from "./Component/DriftPage";
import ForzaPage from "./Component/ForzaPage";
import HomePage from "./Component/HomePage";
import TimeAttackPage from "./Component/TimeAttackPage";
import Menu from "./Component/Menu";


function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App