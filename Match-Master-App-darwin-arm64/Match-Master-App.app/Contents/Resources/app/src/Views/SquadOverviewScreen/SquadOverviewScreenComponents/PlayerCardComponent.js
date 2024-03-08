// PlayerCard.js
import React from 'react';
import { Box, Image, Text, VStack, HStack } from '@chakra-ui/react';
import '@fontsource-variable/inter';
import { ButtonComponent } from '../../../GlobalComponents/ButtonComponent';

const PlayerCard = ({ player, cardHeight, onViewMetrics }) => {
  const handleViewMetrics = () => {
    onViewMetrics(player.playerId); // Call the function passed via props
  };
  
  return (
    <VStack
      style={{ height: cardHeight}}
      bg='#DAE6F2'
      padding={0}
      borderColor='white'
      borderWidth={2}
      borderRadius={20}
      boxShadow='md'
      width="90%"
      height="100%" 
      margin={5}
    >
      <Text fontWeight='bold' fontFamily='Inter Variable' textColor='black' fontSize='2vw' marginTop={2}>{player.playerName}</Text>
      <Image src={player.playerPhoto} alt={player.playerName} borderRadius={10}  aspectRatio={1} height='20vh'/>

      <HStack spacing={7}>

      <Box bg='#DAE6F2' borderRadius={20} borderWidth={2} borderColor='white' aspectRatio={1} height='15vh' marginTop={1} display="flex" alignItems="center" justifyContent="center">
        <VStack>
          <Text color={player.playerRating.textColor} fontFamily='Inter Variable' fontWeight='bold' fontSize='3vw'>{player.playerRating.playerRating}</Text>
          <Text fontFamily='Inter Variable' color='black' fontSize='1.2vw'>Rating</Text>
        </VStack>
      </Box>


      <Box bg='#DAE6F2' borderRadius={20} borderWidth={2} borderColor='white' aspectRatio={1} height='15vh' marginTop={1} display="flex" alignItems="center" justifyContent="center">
        <VStack>
          <Text fontFamily='Inter Variable' fontWeight='bold' fontSize='3vw' color={player.adaptabilityPercentage.textColor}>{player.adaptabilityPercentage.adaptabilityPercentage}%</Text>
          <Text fontFamily='Inter Variable' color='black' fontSize='1.2vw'>Adaptability</Text>
        </VStack>
      </Box>
      </HStack>

      <ButtonComponent 
        width='15vw' 
        height='3vw' 
        marginTop={3} 
        borderRadius='full'
        borderColor='#547FE7'
        _hover={{ bg: '#547FE7', color: 'white' }}
        fontSize='1vw'
        color='black'
        fontFamily='Inter Variable'
        fontWeight='bold'
        onClick={handleViewMetrics}>
        View In-Depth Metrics
        
      </ButtonComponent>
      
      <VStack flex="1" justify="space-around"> 
        
        
      </VStack>
      
    </VStack>
    
  );
};

export {PlayerCard};
