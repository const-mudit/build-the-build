import { useContext, useState } from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { FaAngleRight, FaRegWindowMinimize } from "react-icons/fa6";
import { IoMdArrowForward, IoMdArrowRoundBack } from "react-icons/io";
import { IoCloseSharp, IoReloadOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { VscChromeMaximize } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { configContext } from "../../App";
import computerIcons from "../../assets/computer-icon.png";
import binIcon from "../../assets/icons8-bin-windows-144.png";
import desktopIcon from "../../assets/icons8-desktop-96.png";
import { FlexBox, Text } from "../../components/StartMenu";
import { StartwithMenu } from "../Desktop";
import { achievements } from "../Explorer";

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

const Recycle = () => {
  const navigate: ReturnType<typeof useNavigate> = useNavigate();
  const [selected] = useState("bin");

  const context = useContext(configContext);

  if (!context) {
    throw new Error("configContext is null. Ensure the provider is set.");
  }

  const { config, setConfig } = context;
  const { deletedRewards } = config;

  return (
    <AppContainer>
      <div className="top-bar">
        <div className="tabs">
          <div className="tab active">This PC</div>
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
      <div className="search-container">
        <IoMdArrowRoundBack onClick={() => navigate(-1)} />
        <IoMdArrowForward onClick={() => navigate(1)} />
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
          <p>{selected !== "pc" && selected}</p>
        </div>
        <div>
          {deletedRewards?.length >= 1 && (
            <FaTrashRestoreAlt
              fontSize="25px"
              onClick={() => {
                setConfig({
                  ...config,
                  deletedRewards: [],
                });
              }}
            />
          )}
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
          <br />
          <p
            onClick={() => {
              navigate("/");
            }}
            style={{
              padding: "5px 15px",
            }}
          >
            <IconImage src={desktopIcon} />
            Desktop
          </p>
          <p
            onClick={() => {
              navigate("/recycle");
            }}
            style={{
              background: selected === "bin" ? "#5f5f5f" : "",
              padding: "5px 15px",
              cursor: "pointer",
            }}
          >
            <IconImage src={binIcon} />
            Recycle Bin
          </p>
          <hr
            style={{
              borderColor: "#9f9f9f",
            }}
          />
          <p
            onClick={() => {
              navigate("/explorer");
            }}
            style={{
              background: selected === "pc" ? "#5f5f5f" : "",
              padding: "5px 15px",
              cursor: "pointer",
            }}
          >
            <FaAngleRight />
            <IconImage src={computerIcons} />
            This PC
          </p>
        </div>
        <hr
          style={{
            borderColor: "#9f9f9f",
          }}
        />
        {selected === "bin" && (
          <div
            style={{
              padding: "30px 0px 0px 30px",
              width: "82%",
            }}
          >
            <FlexBox
              gap="10px"
              padding="10px 0px"
              alignItems="center"
              display="flex"
            >
              <Text
                style={{
                  whiteSpace: "noWrap",
                }}
                fontSize="12px"
              >
                Recycle Bin
              </Text>
              <div
                style={{
                  width: "100%",
                  color: "#6f6f6f",
                }}
              >
                <hr />
              </div>
            </FlexBox>
            <FlexBox
              gap="15px"
              style={{
                padding: "30px 0px 0px 30px",
                width: "95%",
              }}
              flexWrap="wrap"
              alignContent="baseline"
              display="flex"
            >
              {achievements.map(({ name, icon, id }) =>
                !deletedRewards.some((reward) => reward.id === id.toString()) ? (
                  ""
                ) : (
                  <FlexBox
                    // className={`hoverHighlight ${selectedReward === id ? "selected" : ""}`}
                    justifyContent="space-between"
                    width="70%"
                    alignItems="center"
                    display="flex"
                    key={name}
                  >
                    <FlexBox display="flex" alignItems="center">
                      <IconImage src={icon} />
                      <Text fontSize="13px">{name}</Text>
                    </FlexBox>
                    <p
                      style={{
                        marginLeft: "100px",
                        fontSize: "12px",
                      }}
                    >
                      Image/Jpg
                    </p>
                  </FlexBox>
                )
              )}
            </FlexBox>
          </div>
        )}
      </div>
      <StartwithMenu />
    </AppContainer>
  );
};

export default Recycle;
