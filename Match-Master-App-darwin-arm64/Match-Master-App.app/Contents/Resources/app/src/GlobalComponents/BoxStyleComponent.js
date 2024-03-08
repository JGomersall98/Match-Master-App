import React from 'react';
import { Box } from '@chakra-ui/react'; // replace 'some-library' with the actual library you're using

const BoxStyleComponent = ({children, w, h, marginTop, marginBottom ,alignItems, aspectRatio, margin, padding, paddingTop, paddingBottom, paddingLeft, paddingRight}) => {
    return (
        <Box
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            padding={padding}
            margin={margin}
            aspectRatio={aspectRatio}
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
            overflowX='hidden'
        >
            {children}
        </Box>
    );
};

export {BoxStyleComponent};
