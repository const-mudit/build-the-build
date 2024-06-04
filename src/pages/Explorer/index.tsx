import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import computerIcons from "../../assets/computer-icon.png";
import binIcon from "../../assets/icons8-bin-windows-144.png";
import discIcon from "../../assets/icons8-hard-drive-96.png";
import desktopIcon from "../../assets/icons8-desktop-96.png";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #3f3f3f;
  overflow: hidden;
  background-size: cover;
`;

const IconImage = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

const Explorer = () => {
  const navigate: any = useNavigate();

  return (
    <AppContainer>
      <div className="top-bar">
        <div className="tabs">
          <div className="tab active">This PC</div>
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
        <div
          style={{
            height: "35px",
            alignItems: "center",
            display: "flex",
            background: "#6f6f6f",
            margin: "10px",
            gap: "20px",
            width: "60vw",
            padding: "0px 10px",
            borderRadius: "5px",
          }}
        >
          <RiComputerLine />
          <p>{" >"}</p>
          <p>This PC</p>
          <p>{">"}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p style={{
            padding: " 5px 15px",
          }}>
            <IconImage src={desktopIcon} />
            Desktop</p>
          <p style={{
            padding: " 5px 15px",
          }}>
            <IconImage src={binIcon} />
            Recycle Bin
          </p>
          <hr
            style={{
              borderColor: "#9f9f9f",
            }}
          />
          <p style={{
            background: '#5f5f5f',
            padding: " 5px 15px",
          }}>
            <IconImage src={computerIcons} />
            This PC
          </p>
          <p style={{
            padding: " 5px 15px",
          }}>
            <IconImage src={discIcon} />
            New Volume (C:)
          </p>
          <p style={{
            padding: " 5px 15px",
          }}>
            <IconImage src={discIcon} />
            New Volume (D:)
          </p>
        </div>
        <hr
          style={{
            borderColor: "#9f9f9f",
          }}
        />
        <div></div>
      </div>
    </AppContainer>
  );
};

export default Explorer;
