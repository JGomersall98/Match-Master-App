// CustomArrows.js
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconButton } from '@chakra-ui/react';

export const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    aria-label="Next"
    icon={<IoIosArrowForward color='white'/>}
    position="absolute"
    top="50%"
    right="0px"
    zIndex="1"
    transform="translateY(-50%)"
    variant="outline"
    //colorScheme="teal"
    bg="#547FE7"
  />
);

export const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    aria-label="Previous"
    icon={<IoIosArrowBack color="white"/>}
    position="absolute"
    top="50%"
    left="0px"
    zIndex="1"
    transform="translateY(-50%)"
    variant="outline"
    //colorScheme="teal"
    bg="#547FE7"
    
  />
);



