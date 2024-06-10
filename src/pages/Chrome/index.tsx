import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useOnClickOutside } from "../../components/Hooks/useClickOutside";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoCloseSharp, IoReloadOutline } from "react-icons/io5";
import resumeMudit from "../../assets/MuditRajputResume.pdf";
import { Text } from "../../components/StartMenu";
import { VscChromeMaximize } from "react-icons/vsc";
import { FaRegWindowMinimize } from "react-icons/fa6";
import { StartwithMenu } from "../Desktop";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, black, #0e0321);
  overflow: hidden;
  background-size: cover;
`;

const CenterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChromePage = () => {
  const ref: any = useRef();
  const navigate: any = useNavigate();
  const [search, setSearch] = useState<string>("https://google.com");
  useOnClickOutside(ref, () => {
    // setStartMenuOpen((prev) => !prev);
  });

  useEffect(() => {
    const path =
      localStorage.getItem("path") === "resume"
        ? resumeMudit
        : localStorage.getItem("path");
    setSearch(path || "https://google.com");
  }, [localStorage.getItem("path")]);

  const refInput: any = useRef();
  refInput.current = document.getElementById("gsc-i-id1");
  if (refInput.current) {
    refInput.current.placeholder = "Search Google or type a URL";
  }

  return (
    <AppContainer>
      <div className="top-bar">
        <div className="tabs">
          <div className="tab active">
            {localStorage.getItem("path") === "resume"
              ? "Resume Mudit Rajput"
              : "New Tab"}
          </div>
        </div>
        <div className="controls">
          <button className="control-btn">
            <FaRegWindowMinimize />
          </button>
          <button className="control-btn">
            <VscChromeMaximize />
          </button>
          <button
            onClick={() => {
              navigate("/");
              localStorage.removeItem("path");
            }}
            className="control-btn"
          >
            <IoCloseSharp />
          </button>
        </div>
      </div>
      <div
        style={{
          display: localStorage.getItem("path") !== "resume" ? "flex" : "none",
        }}
        className="search-container"
      >
        <IoMdArrowRoundBack color="#6f6f6f" />
        <IoMdArrowForward color="#6f6f6f" />  
        <IoReloadOutline
          cursor="pointer"
          onClick={() => {
            window.location.reload();
          }}
        />
        <div className="gcse-search"></div>
      </div>
      <div>
        {localStorage.getItem("path") === "resume" ? (
          <iframe
            frameBorder="0"
            src={search}
            style={{ width: "100vw", height: "100vh" }}
          />
        ) : (
          <CenterContainer>
            <Text marginBottom="200px" fontSize="150px">
              Google
            </Text>
          </CenterContainer>
        )}
      </div>
      <StartwithMenu />
    </AppContainer>
  );
};

export default ChromePage;
