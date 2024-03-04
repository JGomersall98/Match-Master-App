// SinglePlayerCard.js
import React from 'react';
import { Box, Image, Text, VStack, HStack } from '@chakra-ui/react';

const SinglePlayerCard = ({ playerData }) => {
  return (
    <VStack
      bg='#DAE6F2'
      padding={0}
      paddingBottom={5}
      borderColor='white'
      borderWidth={2}
      borderRadius={20}
      boxShadow='md'
      width="26%"
      height="auto"
    >
      <Text fontWeight='bold' fontFamily='Inter Variable' textColor='black' fontSize='2vw' marginTop={2}>{playerData.playerName}</Text>
      <Image src={playerData.playerPhoto} alt={playerData.playerName} borderRadius={10} aspectRatio={1} height='20vh'/>

      <HStack spacing={7}>

        <Box bg='#DAE6F2' borderRadius={20} borderWidth={2} borderColor='white' aspectRatio={1} height='12vh' marginTop={1} display="flex" alignItems="center" justifyContent="center">
          <VStack>
            <Text color={playerData.playerRating.textColor} fontFamily='Inter Variable' fontWeight='bold' fontSize='2vw'>{playerData.playerRating.playerRating}</Text>
            <Text fontFamily='Inter Variable' color='black' fontSize='1vw'>Rating</Text>
          </VStack>
        </Box>

        <Box bg='#DAE6F2' borderRadius={20} borderWidth={2} borderColor='white' aspectRatio={1} height='12vh' marginTop={1} display="flex" alignItems="center" justifyContent="center">
          <VStack>
            <Text fontFamily='Inter Variable' fontWeight='bold' fontSize='2vw' color={playerData.adaptabilityPercentage.textColor}>{playerData.adaptabilityPercentage.adaptabilityPercentage}%</Text>
            <Text fontFamily='Inter Variable' color='black' fontSize='1vw'>Adaptability</Text>
          </VStack>
        </Box>

      </HStack>
      
    </VStack>
  );
};

export { SinglePlayerCard };
