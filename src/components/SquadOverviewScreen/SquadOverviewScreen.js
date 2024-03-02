import { Text, Box, HStack} from '@chakra-ui/react';
import { BackgroundFlexComponent } from '../BackgroundFlexComponent';
import { useNavigate } from 'react-router-dom';
import { MatchMasterText } from '../MatchMasterTextComponent';
import { SelectButtonComponent } from '../SelectButtonComponent';
import { BoxStyleComponent } from '../BoxStyleComponent';
import {ScreenTitleComponent} from '../ScreenTitleComponent';
import {HomeScreenButton} from '../HomeScreenButtonComponent';
import { FetchPlayersByPosition } from '../services/SquadOverviewHook';
import { PlayerCard} from '../PlayerCardComponent';
import React, { useState } from 'react';
import {SliderSettings} from './SliderSettings';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fontsource-variable/inter';

function SquadOverviewScreen() { 

    const navigate = useNavigate();
    const goToMainScreen = () => {
      navigate('/');
    };

    const [selectedPosition, setSelectedPosition] = useState('');
    const [players, setPlayers] = useState([]);

    const handleSelectPosition = async (position) => {
        setSelectedPosition(position);
        try {
            const playersData = await FetchPlayersByPosition(position);
            setPlayers(playersData.players);
        } catch (error) {
            console.error('Error fetching players:', error);
        }
    };

    // Determine whether players are loaded
    const arePlayersLoaded = players.length > 0;

    // Call getSliderSettings with the arePlayersLoaded flag
    const sliderSettings = SliderSettings(arePlayersLoaded);
    

    const cardWidth = (92 / SliderSettings.slidesToShow) + 'vw';
    
    
    return (
        <BackgroundFlexComponent position="relative">

        <Box position="absolute" top="0" left="0" paddingLeft={'2vw'} paddingTop={'2vw'}>
            <MatchMasterText fontSize="2vw" />
        </Box>

        <ScreenTitleComponent text="Squad Overview"></ScreenTitleComponent>
            
        <BoxStyleComponent w='92vw' h='10%' marginTop='20px' alignItems={'center'}>
            <HStack width="full" justifyContent="space-around" height="full">
                <SelectButtonComponent buttonText="Defenders" isSelected={selectedPosition === 'D'} onClick={() => handleSelectPosition('D')} />
                <SelectButtonComponent buttonText="Midfielders" isSelected={selectedPosition === 'M'} onClick={() => handleSelectPosition('M')} />
                <SelectButtonComponent buttonText="Attackers" isSelected={selectedPosition === 'F'} onClick={() => handleSelectPosition('F')} />
            </HStack>
        </BoxStyleComponent>

        <BoxStyleComponent w='92vw' h='80%' marginTop='25px' marginBottom='1vh'>
          {players.length > 0 ? (
            <Slider {...sliderSettings}>
              {players.map((player) => (
                <PlayerCard key={player.playerId} player={player} cardHeight="55vh"/>
              ))}
            </Slider>
          ) : (
            <Text textAlign="center" fontSize="6vw" mt="20%" color='#547FE7'>Select Position To View Players</Text>
          )}
        </BoxStyleComponent>

        <HomeScreenButton goToMainScreen={goToMainScreen}></HomeScreenButton>

        </BackgroundFlexComponent>

        
    );
}

export default SquadOverviewScreen;