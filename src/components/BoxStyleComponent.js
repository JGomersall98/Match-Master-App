import React from 'react';
import { Box } from '@chakra-ui/react'; // replace 'some-library' with the actual library you're using

const BoxStyleComponent = ({children, w, h, marginTop, marginBottom ,alignItems}) => {
    return (
        <Box
            posiion='relative'
            overflow={'scroll'}
            bg='#DAE6F2'
            w={w}
            h={h}
            marginTop={marginTop}
            color='white'
            borderColor='white'
            borderWidth={2}
            borderRadius={20}
            alignItems={alignItems}
            marginBottom={marginBottom}
            padding={1}
            overflowX='hidden'
        >
            {children}
        </Box>
    );
};

export {BoxStyleComponent};
