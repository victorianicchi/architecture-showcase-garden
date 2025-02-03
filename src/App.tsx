import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TravelPhotography from "./pages/TravelPhotography";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/travel-photography" element={<TravelPhotography />} />
      </Routes>
    </Router>
  );
}

export default App;