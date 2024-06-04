import { useRef, useState } from "react";
import Taskbar from "../../components/Taskbar";
import Desktop from "../../components/Desktop";
import StartMenu from "../../components/StartMenu";
import styled from "styled-components";
import windowsWallpaper from "../../assets/windows-11-logo.jpg";
import { useOnClickOutside } from "../../components/Hooks/useClickOutside";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${windowsWallpaper});
  overflow: hidden;
  background-size: cover;
`;

const DesktopPage = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const ref: any = useRef();
  useOnClickOutside(ref, () => {
    setStartMenuOpen((prev) => !prev);
  });

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
