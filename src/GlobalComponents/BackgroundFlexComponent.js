// BackgroundFlex.js
import React from 'react';
import { Flex } from '@chakra-ui/react';

const BackgroundFlexComponent = ({ children, ...props }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="top"
      h="100vh"
      bgGradient="linear(to-b, #CEDAE4, #A3BDD1, #CEDAE4)"
      opacity={0.9}
      {...props} 
    >
      {children}
    </Flex>
  );
};

export { BackgroundFlexComponent};