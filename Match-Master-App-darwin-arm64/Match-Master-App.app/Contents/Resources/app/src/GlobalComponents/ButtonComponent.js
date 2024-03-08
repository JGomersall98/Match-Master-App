
import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';


class ButtonComponent extends React.Component {
  render() {
    const { isLoading, children, width, height, marginTop, borderColor, ...props } = this.props;
    return (
      <Button 
        isLoading={isLoading}
        variant={'outline'}
        colorScheme='blue'
        bg="#DAE6F2"  
        borderColor={borderColor}
        borderWidth={2}
        borderRadius={20}
        style={{
            aspectRatio: 1,
            height: height,
            width: width,
            marginTop: marginTop
        }}
        {...props}
        >
          {children}
      </Button>
    );
  }
}

export { ButtonComponent };
