import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DesktopPage from "./pages/Desktop";
import ChromePage from "./pages/Chrome";
import Explorer from "./pages/Explorer";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopPage />} />
        <Route path="/chrome" element={<ChromePage />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </Router>
  );
};

export default App
