import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BackgroundFlexComponent } from '../../GlobalComponents/BackgroundFlexComponent';
import { ScreenTitleComponent } from '../../GlobalComponents/ScreenTitleComponent';
import { HomeScreenButton } from '../../GlobalComponents/HomeScreenButtonComponent';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Flex, Text, Box } from '@chakra-ui/react';
import { MatchMasterTopLeft } from '../../GlobalComponents/MatchMasterTopLeftTextComponent';
import { BoxStyleComponent } from '../../GlobalComponents/BoxStyleComponent';
import { SinglePlayerCard } from './In-DepthScreenComponents/SinglePlayerCard';
import { FetchRatingByTemperature } from '../../Webhooks/FetchRatingByTemperatureHook';
import { FetchStaticPerformanceMetric } from '../../Webhooks/FetchStaticPerformanceMetricsHook'; 
import { FetchInteractivePerformanceMetric } from '../../Webhooks/FetchInteractivePerformanceMetricsHook';
import { RadarSection } from './In-DepthScreenComponents/RadarSection';
import { Button } from '@chakra-ui/react';
import { BackButton } from '../../GlobalComponents/BackButton';

const InDepthScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ratings, setRatings] = useState([]);

    const playerCardData = location.state?.playerCardData;

    const [metricData, setMetricData] = useState({ staticMetric: null, interactiveMetric: null });

    const handleTemperatureClick = async (lowTemp, highTemp, selectedRange) => {
        try {
            const metrics = await FetchInteractivePerformanceMetric(playerCardData.playerId, lowTemp, highTemp);
            setMetricData({
                staticMetric: metrics.staticMetric,
                interactiveMetric: metrics.interactiveMetric
            });
            setSelectedTemperatureRange(selectedRange); 
        } catch (error) {
            console.error('Failed to fetch interactive metrics:', error);
        }
    };

    const temperatureRanges = [
        "<3°C",
        "≥3°C < 10°C",
        "≥10°C < 17°C",
        "≥17°C"
    ];

    // Simplified example for button click handler
    const temperatureRangeMappings = {
        "<3°C": () => handleTemperatureClick(-20, 3, "<3°C"),
        "≥3°C < 10°C": () => handleTemperatureClick(3, 10, "≥3°C < 10°C"),
        "≥10°C < 17°C": () => handleTemperatureClick(10, 17, "≥10°C < 17°C"),
        "≥17°C": () => handleTemperatureClick(17, 50, "≥17°C"),
    };

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

    useEffect(() => {
        const fetchStaticMetrics = async () => {
            try {
                const staticMetrics = await FetchStaticPerformanceMetric(playerCardData.playerId);
                console.log("Static metrics:", staticMetrics);
                setMetricData(prevData => ({
                    ...prevData,
                    staticMetric: staticMetrics
                }));
            } catch (error) {
                console.error('Failed to fetch static metrics:', error);
            }
        };
    
        if (playerCardData) {
            fetchStaticMetrics();
        }
    }, [playerCardData]);

    const [selectedTemperatureRange, setSelectedTemperatureRange] = useState(null);


    const goToSquadOverview = () => {
        navigate('/squad-overview'); // Adjust the path as necessary
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
                        <BoxStyleComponent w='70%' h='16vw' marginTop={0}>  
                            <Flex direction="column" height="100%" justify="flex-end">
                                <Text fontSize='2vw' fontWeight='bold' fontFamily='Inter Variable' textColor='black' align='center' paddingBottom={1}>Average Rating By Temperature</Text>
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
                <RadarSection 
                    metricData={metricData} 
                    temperatureRanges={temperatureRanges} 
                    temperatureRangeMappings={temperatureRangeMappings} 
                    selectedTemperatureRange={selectedTemperatureRange}
                />
            </VStack>
            <HStack spacing={10}>
            <BackButton goToSquadOverview={goToSquadOverview} />
            <HomeScreenButton goToMainScreen={goToMainScreen}></HomeScreenButton>
            </HStack>
        </BackgroundFlexComponent>
    );
};

export default InDepthScreen;
