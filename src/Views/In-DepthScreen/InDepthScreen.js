import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BackgroundFlexComponent } from '../../GlobalComponents/BackgroundFlexComponent';
import { ScreenTitleComponent } from '../../GlobalComponents/ScreenTitleComponent';
import { HomeScreenButton } from '../../GlobalComponents/HomeScreenButtonComponent';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Flex, Text } from '@chakra-ui/react';
import { MatchMasterTopLeft } from '../../GlobalComponents/MatchMasterTopLeftTextComponent';
import { BoxStyleComponent } from '../../GlobalComponents/BoxStyleComponent';
import { SinglePlayerCard } from './In-DepthScreenComponents/SinglePlayerCard';
import { FetchRatingByTemperature } from '../../Webhooks/FetchRatingByTemperatureHook';

const InDepthScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ratings, setRatings] = useState([]);

    const playerCardData = location.state?.playerCardData;

    const temperatureRanges = [
        "<3°C",
        "≥3°C < 10°C",
        "≥10°C < 17°C",
        "≥17°C"
    ];

    useEffect(() => {
        if (!playerCardData) {
            console.log("No player card data found.");
            return;
        }
        // Fetching the ratings by temperature
        const fetchRatings = async () => {
            try {
                const fetchedRatings = await FetchRatingByTemperature(playerCardData.playerId);
                setRatings(fetchedRatings);
            } catch (error) {
                console.error('Failed to fetch ratings by temperature:', error);
            }
        };

        fetchRatings();
    }, [playerCardData]);

    const goToMainScreen = () => {
        navigate('/');
    };

    return (
        <BackgroundFlexComponent paddingLeft={10} paddingRight={10} h='full'>
            <MatchMasterTopLeft></MatchMasterTopLeft>
            <ScreenTitleComponent text="In-Depth Analysis"></ScreenTitleComponent>
            <VStack spacing={4} width='full' align='stretch' height='full' justifyContent="center">
                <BoxStyleComponent w='100%' h='50vh'>
                    <HStack justify="left" align="center" width="full" height="full" p={5} spacing={10}>
                        {playerCardData ? (
                            <SinglePlayerCard playerData={playerCardData} />
                        ) : (
                            <p>No player data available</p>
                        )}
                        <BoxStyleComponent w='70%' h='60%' marginTop={5}>  
                            <Flex direction="column" height="100%" justify="flex-end">
                                <Text fontSize='2vw' fontWeight='bold' fontFamily='Inter Variable' textColor='black' align='center'>Average Rating By Temperature</Text>
                                <HStack width="100%" justify="center" spacing={10} paddingBottom={1}>
                                    {ratings.sort((a, b) => a.order - b.order).map((rating, index) => (
                                        <BoxStyleComponent key={index} h='12vw' aspectRatio={1}>
                                            <VStack spacing={2}>
                                                <Text fontSize='1vw' fontWeight='bold' color='#547FE7'>
                                                    {temperatureRanges[index]}
                                                </Text>
                                                <Text fontSize='4vw' fontWeight='bold' color={rating.textColor}>
                                                    {rating.rating}
                                                </Text>
                                            </VStack>
                                        </BoxStyleComponent>
                                    ))}
                                </HStack>
                            </Flex>
                        </BoxStyleComponent>
                    </HStack>
                </BoxStyleComponent>
                <BoxStyleComponent w='100%' h='80vh' marginTop={5}></BoxStyleComponent>
            </VStack>
            <HomeScreenButton goToMainScreen={goToMainScreen}></HomeScreenButton>
        </BackgroundFlexComponent>
    );
};

export default InDepthScreen;
