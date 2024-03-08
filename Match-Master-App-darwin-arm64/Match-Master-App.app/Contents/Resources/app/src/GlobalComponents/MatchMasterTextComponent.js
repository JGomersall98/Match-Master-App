// MatchMasterText.js
import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import '@fontsource-variable/inter';

// Correctly destructure fontSize from props
export function MatchMasterText({ fontSize, justifyContent, align, top, left, paddingTop }) {
    return (
        <Text
        left={left}
        top={top}
        justifyContent={justifyContent}
        align={align}
        fontSize={fontSize} // Use fontSize prop correctly
        fontWeight="bold" 
        fontFamily='Inter Variable' 
        paddingTop={paddingTop}>
            <Box as="span" color="black">Match</Box>
            <Box as="span" color="#547FE7">Master</Box>
        </Text>
    );
}
