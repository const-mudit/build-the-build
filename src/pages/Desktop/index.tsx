import { useContext, useRef, useState } from "react";
import Taskbar from "../../components/Taskbar";
import Desktop from "../../components/Desktop";
import StartMenu from "../../components/StartMenu";
import styled from "styled-components";
import { useOnClickOutside } from "../../components/Hooks/useClickOutside";
import { configContext } from "../../App";

export const StartwithMenu = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    setStartMenuOpen((prev) => !prev);
  });
  return (
    <>
      <Taskbar setStartMenuOpen={setStartMenuOpen} />
      {startMenuOpen && (
        <div ref={ref}>
          <StartMenu />
        </div>
      )}
    </>
  );
};

const DesktopPage = () => {
  const context = useContext(configContext);
  if (!context) {
    throw new Error("configContext is null. Please ensure it is properly initialized.");
  }
  const { config } = context;

  const AppContainer = styled.div`
    height: 100vh;
    background: url(${config.wall});
    overflow: hidden;
    background-size: cover;
    box-sizing: border-box;
  `;

  return (
    <AppContainer>
      <Desktop />
      <StartwithMenu />
    </AppContainer>
  );
};

export default DesktopPage;
