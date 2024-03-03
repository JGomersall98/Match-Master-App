import React from 'react';
import { Button } from '@chakra-ui/react';

const SelectButtonComponent = ({ buttonText, onClick, isSelected }) => {
  return (
    <Button
      onClick={onClick}
      w="25vw"
      h='6vh'
      bg={isSelected ? '#547FE7' : '#DAE6F2'}
      textColor={isSelected ? 'white' : '#547FE7'}
      fontWeight={'bold'}
      fontFamily={'Inter Variable'}
      borderRadius={40}
      borderColor='#547FE7'
      borderWidth={2}
      _hover={{
        bg: isSelected ? '#547FE7' : "#DAE6F2",
        textColor: isSelected ? 'white' : "#547FE7",
      }}>
          {buttonText}
    </Button>
  );
};

export { SelectButtonComponent };