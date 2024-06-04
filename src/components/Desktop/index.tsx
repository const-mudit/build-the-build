import styled from "styled-components";
import chromeIcons from "../../assets/icons8-chrome-144.png";
import computerIcons from "../../assets/computer-icon.png";
import PdfIcon from "../../assets/icons8-adobe-acrobat-reader-144.png";
import binIcon from "../../assets/icons8-bin-windows-144.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DesktopContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 12px;
  align-content: baseline;
`;

export const DesktopIcon: any = styled.div`
  width: 80px;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  background: ${(props: any) =>
    props.selected ? "rgba(255, 255, 255, 0.1)" : ""};
  border-radius: ${(props: any) => (props.selected ? "10px" : "")};
`;

const IconImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const IconLabel = styled.div`
  margin-top: 5px;
  color: white;
  font-size: 12px;
  text-align: center;
`;

const Desktop = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    localStorage.removeItem("path");
  }, [])

  const handleClick = (name: string, route: string) => {
    if (selected === name) {
      navigate(route);
      if (name === "resume") {
        localStorage.setItem("path", "resume");
      }
      return;
    }
    setSelected(name);
  };
  return (
    <DesktopContainer>
      <DesktopIcon
        selected={selected === "explorer"}
        onClick={() => {
          handleClick("explorer", "/explorer");
        }}
      >
        <IconImage src={computerIcons} alt="App Icon" />
        <IconLabel>This PC</IconLabel>
      </DesktopIcon>
      <DesktopIcon
        selected={selected === "recycle"}
        onClick={() => {
          handleClick("recycle", "/recycle");
        }}
      >
        <IconImage src={binIcon} alt="App Icon" />
        <IconLabel>Recycle Bin</IconLabel>
      </DesktopIcon>
      <DesktopIcon
        selected={selected === "chrome"}
        onClick={() => {
          handleClick("chrome", "/chrome");
        }}
      >
        <IconImage src={chromeIcons} alt="App Icon" />
        <IconLabel>Google Chrome</IconLabel>
      </DesktopIcon>
      <DesktopIcon
        selected={selected === "resume"}
        onClick={() => {
          handleClick("resume", "/chrome");
        }}
      >
        <IconImage src={PdfIcon} alt="App Icon" />
        <IconLabel>Resume Mudit Rajput</IconLabel>
      </DesktopIcon>
    </DesktopContainer>
  );
};

export default Desktop;
