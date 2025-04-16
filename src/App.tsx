import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DesktopPage from "./pages/Desktop";
import ChromePage from "./pages/Chrome";
import Explorer from "./pages/Explorer";
import Theme from "./pages/Theme";
import { createContext, useState } from "react";
import wallpaper6 from "./assets/windows-11-6.jpg";
import Recycle from "./pages/Recycle";

interface ConfigContextType {
  config: {
    wall: string;
    color: string;
    deletedRewards: { id: string; name: string }[];
  };
  setConfig: React.Dispatch<React.SetStateAction<{
    wall: string;
    color: string;
    deletedRewards: { id: string; name: string }[];
  }>>;
}

export const configContext = createContext<ConfigContextType | null>(null);

const ConfigProvider = configContext.Provider;

const App: React.FC = () => {
  const [config, setConfig] = useState<{
    wall: string;
    color: string;
    deletedRewards: { id: string; name: string }[];
  }>({
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
