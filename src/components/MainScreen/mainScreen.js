// MainScreen.js
import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { UpdateDatabaseButton } from '../UpdateDatabaseButton';
import { ButtonComponent } from '../ButtonComponent';
import { BackgroundFlexComponent } from '../BackgroundFlexComponent';
import { MatchMasterText } from '../MatchMasterTextComponent';
import { RiTeamFill } from "react-icons/ri";
import '@fontsource-variable/inter';
import { useNavigate } from 'react-router-dom';

function MainScreen() {

  const navigate = useNavigate();

  const goToSquadOverview = () => {
    navigate('/squad-overview');
  };

  return (
    <BackgroundFlexComponent>

      <MatchMasterText fontSize="7vw" paddingTop='40px'/>

      <UpdateDatabaseButton />

      <Text fontSize="1xl" fontWeight='bold' fontFamily='Inter Variable'>Update Database</Text>

      <ButtonComponent //Squad Overview Button
        marginTop='20px'
        height="18vw" 
        onClick={goToSquadOverview}>
        <RiTeamFill color='#547FE7' style={{ fontSize: "140px"}}/>
      </ButtonComponent>
      
      <Text fontSize="1xl" fontWeight='bold' fontFamily='Inter Variable'>Squad Overview</Text>
      
    </BackgroundFlexComponent>
  );
}

export default MainScreen;
