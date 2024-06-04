import styled from "styled-components";
import windowsicon from "../../assets/icons8-windows-11-48.png";
import chromeIcons from "../../assets/icons8-chrome-144.png";
import { LiaBatteryThreeQuartersSolid } from "react-icons/lia";
import { HiOutlineSpeakerWave, HiWifi } from "react-icons/hi2";
import { FaChevronUp } from "react-icons/fa6";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const TaskbarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: #1e1e1eed;
  font-size: 12px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const StartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskBarIcons = styled.img`
  height: 30px;
  width: 30px;
`;
const FlexBoxColumn: any = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlexBoxRight: any = styled.div`
  display: flex;
  justify-content: right;
  width: ${(props: any) => props.width};
`;

const Taskbar = ({ setStartMenuOpen }: any) => {
  const navigate = useNavigate();
  return (
    <>
      <TaskbarContainer>
        <FlexBoxRight width="53%">
          <StartButton onClick={() => setStartMenuOpen(true)}>
            <TaskBarIcons src={windowsicon} />
          </StartButton>
          <StartButton
            onClick={() => {
              navigate("/chrome");
            }}
          >
            <TaskBarIcons src={chromeIcons} />
          </StartButton>
        </FlexBoxRight>
        <FlexBoxRight width="46%">
          <StartButton>
            <FaChevronUp />
          </StartButton>
          <StartButton>ENG IN</StartButton>
          <StartButton>
            <HiWifi />
          </StartButton>
          <StartButton>
            <HiOutlineSpeakerWave />
          </StartButton>
          <StartButton>
            <LiaBatteryThreeQuartersSolid />
          </StartButton>
          <StartButton>
            <FlexBoxColumn>
              <p>{format(new Date(), "H:mm aa")}</p>
              <p>{format(new Date(), "dd/MM/yyyy")}</p>
            </FlexBoxColumn>
          </StartButton>
        </FlexBoxRight>
      </TaskbarContainer>
    </>
  );
};

export default Taskbar;
