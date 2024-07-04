import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Temperature from "./Pages/Temperature";
import HistoryEntry from "./Pages/HistoryEntry";
import Fan from "./Pages/Fan";
import UserContextProvider from "./context/UserContextProvider";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temperature" element={<Temperature />} />
            <Route path="/entry" element={<HistoryEntry />} />
            <Route path="/fan" element={<Fan />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  )
}

export default App;