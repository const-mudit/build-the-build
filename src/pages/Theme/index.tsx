import { FaRegWindowMinimize } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { VscChromeMaximize } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox, Text } from "../../components/StartMenu";
import themeIcons from "../../assets/icons8-brush-96.png";
import { colors, wallpapers } from "../../Utils/constant.js";
import { useContext } from "react";
import { configContext } from "../../App";

const Theme = () => {
  const navigate = useNavigate();
  const { config, setConfig } = useContext(configContext);
  const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-size: cover;
  `;

  const IconImage = styled.img`
    width: 20px;
    height: 20px;
  `;

  return (
    <AppContainer>
      <FlexBox display="flex" justifyContent="space-between">
        <div className="tabs">
          <Text margin="5px 10px">Settings</Text>
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
      </FlexBox>
      <br />
      <br />
      <FlexBox padding="10px" display="flex" justifyContent="space-between">
        <FlexBox
          background="#efefef3f"
          borderRadius="5px"
          padding="5px 10px"
          borderLeft={`3px solid ${config.color}`}
          width="20%"
          height="20px"
        >
          <FlexBox display="flex" gap="10px" alignItems="center">
            <IconImage src={themeIcons} />
            <Text>Personalization</Text>
          </FlexBox>
        </FlexBox>
        <FlexBox width="60%">
          <Text margin="10px 0px">Select Wallpaper</Text>
          <FlexBox display="flex" gap="10px">
            <FlexBox>
              <img
                style={{
                  height: "200px",
                }}
                src={config.wall}
              />
            </FlexBox>
            <FlexBox display="flex" flexWrap="wrap" gap="10px">
              {wallpapers.map((image: any) => (
                <img
                  onClick={() => {
                    setConfig({
                      ...config,
                      wall: image,
                    });
                  }}
                  style={{
                    height: "90px",
                  }}
                  src={image}
                />
              ))}
            </FlexBox>
          </FlexBox>
          <br />
          <Text margin="10px 0px">Select Theme Color</Text>
          <FlexBox display="flex" flexWrap="wrap" gap="20px">
            {colors.map((color: any) => (
              <div
                onClick={() => {
                  setConfig({
                    ...config,
                    color,
                  });
                }}
                style={{
                  height: "50px",
                  width: "50px",
                  background: color,
                  borderRadius: '3px',
                  border: config.color === color ? "2px solid white" : `2px solid ${color}`,
                }}
              ></div>
            ))}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </AppContainer>
  );
};

export default Theme;
