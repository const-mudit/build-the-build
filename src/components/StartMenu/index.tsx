import styled from "styled-components";
import { IoPersonCircle, IoPower } from "react-icons/io5";
import mailIcon from "../../assets/icons8-mail-96.png";
import wordIcon from "../../assets/icons8-microsoft-word-2019-96.png";
import storeIcon from "../../assets/icons8-microsoft-store-96.png";
import photosIcon from "../../assets/icons8-photos-96.png";
import calendarIcon from "../../assets/icons8-windows-calendar-96.png";
import explorerIcon from "../../assets/icons8-file-explorer-new-96.png";
import settingIcon from "../../assets/icons8-setting-96.png";
import chromeIcons from "../../assets/icons8-chrome-144.png";
import linkedInIcons from "../../assets/icons8-linkedin-96.png";
import instagramIcons from "../../assets/icons8-instagram-96.png";
import themeIcons from "../../assets/icons8-brush-96.png";
import { useNavigate } from "react-router-dom";

const StartMenuContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
  width: 600px;
  height: 82vh;
  background: #1e1e1eed;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
`;

const StartMenuItemsContainer: any = styled.div`
  height: ${(props: any) => props.height};
  padding: 10px 50px;
  display: ${(props: any) => props.display};
  background: ${(props: any) => props.background};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
  flex-direction: ${(props: any) => props.flexDirection};
`;
export const FlexBox: any = styled.div`
  height: ${(props: any) => props.height};
  width: ${(props: any) => props.width};
  display: ${(props: any) => props.display};
  background: ${(props: any) => props.background};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
  align-content: ${(props: any) => props.alignContent};
  gap: ${(props: any) => props.gap};
  flex-wrap: ${(props: any) => props.flexWrap};
  padding: ${(props: any) => props.padding};
  border-radius: ${(props: any) => props.borderRadius};
  border-left: ${(props: any) => props.borderLeft};
`;

const IconImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const Text: any = styled.p`
  height: ${(props: any) => props.height};
  width: ${(props: any) => props.width};
  display: ${(props: any) => props.display};
  background: ${(props: any) => props.background};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
  gap: ${(props: any) => props.gap};
  flex-wrap: ${(props: any) => props.flexWrap};
  font-weight: ${(props: any) => props.fontWeight};
  font-size: ${(props: any) => props.fontSize};
  margin-bottom: ${(props: any) => props.marginBottom};
  margin: ${(props: any) => props.margin};
`;

const StartMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 70px;
  font-size: 10px;
`;

const handleMailClick = () => {
  window.open("mailto:muditrajput1@gmail.com?subject=I am awesome");
};

const StartMenu = () => {
  const navigate = useNavigate();
  return (
    <StartMenuContainer>
      <StartMenuItemsContainer
        flexDirection="column"
        display="flex"
        height="92%"
      >
        <Text fontWeight="bold">Pinned</Text>
        <FlexBox
          width="100%"
          height="50%"
          padding="30px 0px 0px 0px"
          gap="40px"
          display="flex"
          flexWrap="wrap"
        >
          <StartMenuIcon onClick={handleMailClick}>
            <IconImage src={mailIcon} />
            <Text>Mail</Text>
          </StartMenuIcon>
          <StartMenuIcon>
            <IconImage src={wordIcon} />
            <Text>Word</Text>
          </StartMenuIcon>
          <StartMenuIcon>
            <IconImage src={storeIcon} />
            <Text>Store</Text>
          </StartMenuIcon>
          <StartMenuIcon>
            <IconImage src={photosIcon} />
            <Text>Photos</Text>
          </StartMenuIcon>
          <StartMenuIcon>
            <IconImage src={calendarIcon} />
            <Text>Calendar</Text>
          </StartMenuIcon>
          <StartMenuIcon
            onClick={() => {
              navigate("/explorer");
            }}
          >
            <IconImage src={explorerIcon} />
            <Text>Explorer</Text>
          </StartMenuIcon>
          <StartMenuIcon
            onClick={() => {
              navigate("/chrome");
            }}
          >
            <IconImage src={chromeIcons} />
            <Text>Google Chrome</Text>
          </StartMenuIcon>
        </FlexBox>
        <Text fontWeight="bold">Recommended</Text>
        <FlexBox
          width="100%"
          height="50%"
          padding="30px 0px 0px 0px"
          gap="40px"
          display="flex"
          flexWrap="wrap"
        >
          <StartMenuIcon
            onClick={() => {
              navigate("/theme");
            }}
          >
            <IconImage src={settingIcon} />
            <Text>Settings</Text>
          </StartMenuIcon>
          <StartMenuIcon
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/mudit-rajput-0974a8198/",
                "_self"
              );
            }}
          >
            <IconImage src={linkedInIcons} />
            <Text>LinkedIn</Text>
          </StartMenuIcon>
          <StartMenuIcon
            onClick={() => {
              window.open("https://www.instagram.com/muditrajput_/", "_self");
            }}
          >
            <IconImage src={instagramIcons} />
            <Text>Instagram</Text>
          </StartMenuIcon>
          <StartMenuIcon
            onClick={() => {
              navigate("/theme");
            }}
          >
            <IconImage src={themeIcons} />
            <Text>Personalize</Text>
          </StartMenuIcon>
        </FlexBox>
      </StartMenuItemsContainer>
      <StartMenuItemsContainer
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        height="8%"
        background="#1e1e1ef6"
      >
        <FlexBox
          gap="10px"
          alignItems="center"
          justifyContent="space-between"
          display="flex"
        >
          <IoPersonCircle fontSize="40px" />
          <p>Mudit Rajput</p>
        </FlexBox>
        <div>
          <IoPower />
        </div>
      </StartMenuItemsContainer>
    </StartMenuContainer>
  );
};

export default StartMenu;
