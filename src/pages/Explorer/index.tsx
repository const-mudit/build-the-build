/* eslint-disable react-refresh/only-export-components */
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoCloseSharp, IoReloadOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import computerIcons from "../../assets/computer-icon.png";
import binIcon from "../../assets/icons8-bin-windows-144.png";
import discIcon from "../../assets/icons8-hard-drive-96.png";
import desktopIcon from "../../assets/icons8-desktop-96.png";
import { VscChromeMaximize } from "react-icons/vsc";
import {
  FaAngleDown,
  FaAngleRight,
  FaRegWindowMinimize,
} from "react-icons/fa6";
import { useContext, useState } from "react";
import { FlexBox, Text } from "../../components/StartMenu";
import { DesktopIcon, IconLabel } from "../../components/Desktop";
import apollo from "../../assets/icons8-apollo-96.png";
import bitbucket from "../../assets/icons8-bitbucket-96.png";
import clickup from "../../assets/icons8-clickup-100.png";
import cssIcon from "../../assets/icons8-css-64.png";
import express from "../../assets/icons8-express-js-96.png";
import github from "../../assets/icons8-github-100.png";
import graphql from "../../assets/icons8-graphql-96.png";
import htmlIcon from "../../assets/icons8-html-tag-64.png";
import javascript from "../../assets/icons8-javascript-96.png";
import jira from "../../assets/icons8-jira-96.png";
import mongo from "../../assets/icons8-mongo-db-96.png";
import node from "../../assets/icons8-node-js-96.png";
import reactIcon from "../../assets/icons8-react-64.png";
import reduxIcon from "../../assets/icons8-redux-96.png";
import swagger from "../../assets/icons8-swagger-96.png";
import typescriptIcon from "../../assets/icons8-typescript-96.png";
import photosIcon from "../../assets/icons8-photos-96.png";
import { StartwithMenu } from "../Desktop";
import { configContext } from "../../App";
import Modal from "../../components/Modal";
import { rewardsAndRecognitions } from "../../Utils/constant";

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

const IconImageBig = styled.img`
  width: 50px;
  height: 50px;
`;

const DiscImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const Skills = [
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescriptIcon,
  },
  {
    name: "React js",
    icon: reactIcon,
  },
  {
    name: "Redux Tool Kit",
    icon: reduxIcon,
  },
  {
    name: "Apollo Client",
    icon: apollo,
  },
  {
    name: "Graphql",
    icon: graphql,
  },
  {
    name: "Apollo Server",
    icon: apollo,
  },
  {
    name: "Node js",
    icon: node,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Mongo DB",
    icon: mongo,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Bitbucket",
    icon: bitbucket,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Click up",
    icon: clickup,
  },
  {
    name: "Swagger-API-Documentation",
    icon: swagger,
  },
];
export const achievements = [
  {
    name: "Received a reward and recognition for Blitzkrieg Frontend Pioneer at Zopper in march 2024.",
    icon: photosIcon,
    id: 0,
  },
  {
    name: "Got Reward and Recognition for a great beginning at work.",
    icon: photosIcon,
    id: 1,
  },
  {
    name: "Winner at Product Launch event at Galgotias University.",
    icon: photosIcon,
    id: 2,
  },
];

const Explorer = () => {
  const navigate: NavigateFunction = useNavigate();
  const [selected, setSelected] = useState("pc");
  const [selectedReward, setSelectedReward] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const context = useContext(configContext);
  if (!context) {
    throw new Error("configContext must be used within a ConfigProvider");
  }
  const { config, setConfig } = context;

  const { deletedRewards } = config;

  const handleClickRewards = (id: number) => {
    if (id === selectedReward) {
      setOpen(true);
    }
    setSelectedReward(id);
  };

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
          {selectedReward !== null && (
            <MdDelete
              onClick={() => {
                setConfig({
                  ...config,
                  deletedRewards: [...deletedRewards, { id: selectedReward.toString(), name: "Reward Name" }],
                });
                setSelectedReward(null);
              }}
              fontSize="25px"
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
              padding: " 5px 15px",
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
              setSelected("pc");
              setSelectedReward(null);
            }}
            style={{
              background: selected === "pc" ? "#5f5f5f" : "",
              padding: "5px 15px",
              cursor: "pointer",
            }}
          >
            <FaAngleDown />
            <IconImage src={computerIcons} />
            This PC
          </p>
          <p
            onClick={() => {
              setSelected("C");
              setSelectedReward(null);
            }}
            style={{
              background: selected === "C" ? "#5f5f5f" : "",
              padding: "5px 15px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            <FaAngleRight />
            <IconImage src={discIcon} />
            Skills (C:)
          </p>
          <p
            onClick={() => {
              setSelected("D");
            }}
            style={{
              background: selected === "D" ? "#5f5f5f" : "",
              padding: "5px 15px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            <FaAngleRight />
            <IconImage src={discIcon} />
            Achievements (D:)
          </p>
        </div>
        <hr
          style={{
            borderColor: "#9f9f9f",
          }}
        />
        {selected === "pc" && (
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
                Devices and Drivers
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
            <FlexBox display="flex">
              <FlexBox height="40px" width="300px">
                <div
                  onClick={() => {
                    setSelected("C");
                    setSelectedReward(null);
                  }}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <DiscImage src={discIcon} />
                  <div>
                    <Text fontSize="11px">Skills (C:)</Text>
                    <div
                      style={{
                        width: "190px",
                        display: "flex",
                        height: "15px",
                        borderRadius: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          background: "#43b8ea",
                          width: "46%",
                        }}
                      ></div>
                      <div
                        style={{
                          background: "grey",
                          width: "54%",
                        }}
                      ></div>
                    </div>
                    <Text fontSize="11px">54 GB free of 100 GB</Text>
                  </div>
                </div>
              </FlexBox>
              <FlexBox height="40px" width="300px">
                <div
                  onClick={() => {
                    setSelected("D");
                  }}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <DiscImage src={discIcon} />
                  <div>
                    <Text fontSize="11px">Achievements (D:)</Text>
                    <div
                      style={{
                        width: "190px",
                        display: "flex",
                        height: "15px",
                        borderRadius: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          background: "#43b8ea",
                          width: "65%",
                        }}
                      ></div>
                      <div
                        style={{
                          background: "grey",
                          width: "35%",
                        }}
                      ></div>
                    </div>
                    <Text fontSize="11px">35 GB free of 100 GB</Text>
                  </div>
                </div>
              </FlexBox>
            </FlexBox>
          </div>
        )}
        {selected === "C" && (
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
                Skills
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
              {Skills.map(({ name, icon }) => (
                <DesktopIcon key={name}>
                  <IconImageBig src={icon} />
                  <IconLabel>{name}</IconLabel>
                </DesktopIcon>
              ))}
            </FlexBox>
          </div>
        )}
        {selected === "D" && (
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
                Achievements
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
                deletedRewards.some((reward) => reward.id === id.toString()) ? (
                  ""
                ) : (
                  <FlexBox
                    className={`hoverHighlight ${selectedReward === id ? "selected" : ""}`}
                    justifyContent="space-between"
                    width="70%"
                    alignItems="center"
                    display="flex"
                    key={name}
                    onClick={() => {
                      handleClickRewards(id);
                    }}
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
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setSelectedReward(null);
        }}
        imageSrc={
          selectedReward !== null ? rewardsAndRecognitions[selectedReward] : ""
        }
      />
    </AppContainer>
  );
};

export default Explorer;
