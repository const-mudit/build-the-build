import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useOnClickOutside } from "../../components/Hooks/useClickOutside";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import resumeMudit from "../../assets/MuditRajputResume.pdf";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, black, #0e0321);
  overflow: hidden;
  background-size: cover;
`;

const ChromePage = () => {
  const ref: any = useRef();
  const navigate: any = useNavigate();
  const [path, setPath] = useState<string>("https://google.com");
  const [search, setSearch] = useState<string>("https://google.com");
  useOnClickOutside(ref, () => {
    // setStartMenuOpen((prev) => !prev);
  });

  useEffect(() => {
    const path =
      localStorage.getItem("path") === "resume"
        ? resumeMudit
        : localStorage.getItem("path");
    setPath(path || "https://google.com");
    setSearch(path || "https://google.com");
  }, [localStorage.getItem("path")]);

  return (
    <AppContainer
      onKeyDown={(e: any) => {
        if (e.keyCode === 13) {
          if (path.includes("https://")) {
            setSearch(path);
          } else {
            setSearch("https://" + path);
          }
        }
      }}
    >
      <div className="top-bar">
        <div className="tabs">
          <div className="tab active">New Tab</div>
        </div>
        <div className="controls">
          <button className="control-btn">_</button>
          <button className="control-btn">[ ]</button>
          <button
            onClick={() => {
              navigate("/");
              localStorage.removeItem("path");
            }}
            className="control-btn"
          >
            X
          </button>
        </div>
      </div>
      <div className="search-container">
        <IoMdArrowRoundBack />
        <IoMdArrowForward />
        <IoReloadOutline />
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="search-bar"
          value={path}
          onChange={(event: any) => {
            setPath(event.target.value);
          }}
        />
      </div>
      <div>
        <iframe
          frameBorder="0"
          src={search}
          style={{ width: "100vw", height: "100vh" }}
        />
        {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="mudit-rajput-0974a8198" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/mudit-rajput-0974a8198?trk=profile-badge">Mudit Rajput</a></div> */}
      </div>
    </AppContainer>
  );
};

export default ChromePage;
