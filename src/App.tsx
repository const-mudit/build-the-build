import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DesktopPage from "./pages/Desktop";
import ChromePage from "./pages/Chrome";
import Explorer from "./pages/Explorer";
import Theme from "./pages/Theme";
import { createContext, useState } from "react";
import wallpaper6 from "./assets/windows-11-6.jpg";
import Recycle from "./pages/Recycle";

export const configContext = createContext<any>(null);

const ConfigProvider = configContext.Provider;

const App: React.FC = () => {
  const [config, setConfig] = useState({
    wall: wallpaper6,
    color: "#0491cb",
    deletedRewards: []
  });

  return (
    <ConfigProvider
      value={{
        config,
        setConfig,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<DesktopPage />} />
          <Route path="/chrome" element={<ChromePage />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/recycle" element={<Recycle />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
