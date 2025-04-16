import { useEffect, useRef, useState } from "react";
declare global {
  interface Window {
    google?: {
      search?: {
        cse?: {
          element: {
            render: (options: { div: string; tag: string }) => void;
          };
        };
      };
    };
  }
}
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("https://google.com");
  const [, setIsSearchInitialized] = useState(false);
  const [path, setPath] = useState<string | null>(localStorage.getItem("path")); // Track path in state

  useEffect(() => {
    const resolvedPath = path === "resume" ? resumeMudit : path;
    setSearch(resolvedPath || "https://google.com");

    // Initialize the search box immediately if the script is already loaded
    if (window.google && window.google.search) {
      window.google?.search?.cse?.element?.render({
        div: "gcse-search",
        tag: "search",
      });
      setIsSearchInitialized(true); // Mark as initialized
    }
  }, [path]); // Depend on `path` state

  const refInput = useRef<HTMLInputElement | null>(null);
  refInput.current = document.getElementById(
    "gsc-i-id1"
  ) as HTMLInputElement | null;
  if (refInput.current) {
    refInput.current.placeholder = "Search Google or type a URL";
  }

  return (
    <AppContainer>
      <div className="top-bar">
        <div className="tabs">
          <div className="tab active">
            {path === "resume" ? "Resume Mudit Rajput" : "New Tab"}
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
              setPath(null); // Update state when path is cleared
            }}
          >
            <IoCloseSharp />
          </button>
        </div>
      </div>
      <div
        style={{
          display: path !== "resume" ? "flex" : "none",
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
        <div className="gcse-search" id="gcse-search"></div>
      </div>
      <div>
        {path === "resume" ? (
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
