import React, { useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { IoHome } from "react-icons/io5";

const HomeScreenButton = ({ goToMainScreen }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Box  w='full' h='7%' alignItems='center' justifyContent='center' marginBottom='1vh' display='flex'>
            <IconButton
                aspectRatio={1}
                h='full'
                variant='outline'
                bg='#DAE6F2'
                borderRadius={10}
                borderColor='#547FE7'
                borderWidth={2}
                icon={<IoHome fontSize={'2vw'} color={isHovering ? 'white' : '#547FE7'}/>}
                onClick={goToMainScreen}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                _hover={{
                    bg: "#547FE7",
                }}
            />
        </Box>
    );
};

export  {HomeScreenButton};
