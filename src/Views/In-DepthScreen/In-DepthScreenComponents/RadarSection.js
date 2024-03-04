// In-DepthScreenComponents/RadarSection.js

import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { RadarPlotComponent } from './RadarPlotComponent';
import { TemperatureRangeButtons } from './TemperatureRangeButtons';
import { BoxStyleComponent } from '../../../GlobalComponents/BoxStyleComponent';

const RadarSection = ({ metricData, temperatureRanges, temperatureRangeMappings, selectedTemperatureRange }) => {
    return (
        <BoxStyleComponent w='100%' h='70%' marginTop={5} marginBottom={2} padding={5}>
            <Text fontSize='2vw' fontWeight='bold' fontFamily='Inter Variable' textColor='black' align='center' paddingBottom={1}>
                Specific Performance Metric Analysis
            </Text>
            <HStack w="100%" justifyContent="space-between">
                <Box aspectRatio={1} w='50vw'>
                    <RadarPlotComponent staticMetric={metricData.staticMetric} interactiveMetric={metricData.interactiveMetric} />
                </Box>
                <TemperatureRangeButtons
                    temperatureRanges={temperatureRanges}
                    temperatureRangeMappings={temperatureRangeMappings}
                    selectedTemperatureRange={selectedTemperatureRange}
                />
            </HStack>
        </BoxStyleComponent>
    );
};

export {RadarSection};
