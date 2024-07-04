import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Temperature from "./Pages/Temperature";
import HistoryEntry from "./Pages/HistoryEntry";
import Fan from "./Pages/Fan";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/historyEntry" element={<HistoryEntry />} />
          <Route path="/fan" element={<Fan />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;