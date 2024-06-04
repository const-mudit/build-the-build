import { useContext, useRef, useState } from "react";
import Taskbar from "../../components/Taskbar";
import Desktop from "../../components/Desktop";
import StartMenu from "../../components/StartMenu";
import styled from "styled-components";
import { useOnClickOutside } from "../../components/Hooks/useClickOutside";
import { configContext } from "../../App";


const DesktopPage = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const { config } = useContext(configContext)
  
  const ref: any = useRef();
  useOnClickOutside(ref, () => {
    setStartMenuOpen((prev) => !prev);
  });
  const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${config.wall});
    overflow: hidden;
    background-size: cover;
  `;

  return (
    <AppContainer>
      <Desktop />
      <Taskbar setStartMenuOpen={setStartMenuOpen} />
      {startMenuOpen && (
        <div ref={ref}>
          <StartMenu />
        </div>
      )}
    </AppContainer>
  );
}


export default DesktopPage;
