import React from 'react';
import { Text} from '@chakra-ui/react';

const ScreenTitleComponent = ({text}) => {
    return (
        <Text
            fontSize="5vw"
            fontWeight="bold"
            fontFamily='Inter Variable'
        >
            {text}
        </Text>
    );
};

export {ScreenTitleComponent};