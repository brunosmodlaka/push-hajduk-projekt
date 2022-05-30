import "./styles.css";
import Naslovna from "./Naslovna.js";
import Igraci from "./Igraci";
import Roditelj from "./Roditelj";
import Povijest from "./Povijest";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Pretplata from "./Pretplata.js";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna />}></Route>

          <Route path="/roditelj" element={<Roditelj />}></Route>
          <Route path="/igraci" element={<Igraci />}></Route>
          <Route path="/povijest" element={<Povijest />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
