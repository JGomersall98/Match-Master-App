// In-DepthScreenComponents/TemperatureRangeButtons.js

import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { SelectButtonComponent } from '../../../GlobalComponents/SelectButtonComponent';
import { BoxStyleComponent } from '../../../GlobalComponents/BoxStyleComponent';

const TemperatureRangeButtons = ({ temperatureRanges, temperatureRangeMappings, selectedTemperatureRange }) => {
    return (
        <BoxStyleComponent paddingTop={0} paddingLeft={5} paddingRight={5} paddingBottom={5}>
            <Text fontSize='1.5vw' fontWeight='bold' fontFamily='Inter Variable' align='center' textColor='black' paddingBottom={10} paddingTop={5}>
                Temperature Selection
            </Text>
        <VStack spacing={10} align="stretch">
            {temperatureRanges.map((range, index) => (
                <SelectButtonComponent
                    buttonText={range}
                    key={index}
                    onClick={temperatureRangeMappings[range]}
                    isSelected={selectedTemperatureRange === range}
                />
            ))}
        </VStack>
        </BoxStyleComponent>
    );
};

export {TemperatureRangeButtons};
