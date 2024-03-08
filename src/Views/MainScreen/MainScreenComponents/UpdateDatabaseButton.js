import React, { useState } from 'react';
import { ButtonComponent } from '../../../GlobalComponents/ButtonComponent';
import { HiRefresh } from "react-icons/hi";
import { updateDatabase } from '../../../Webhooks/updateDatabaseHook';
import { useToast } from '@chakra-ui/react';

export function UpdateDatabaseButton() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast(); // Initialize toast

  const handleUpdateDatabase = async () => {
    setIsLoading(true); // Start loading animation

    // Create a promise that rejects in 120 seconds
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Request timed out. Please check your connection.')), 120000);
    });

    try {
      // Attempt to fetch data but also race against the timeout
      const data = await Promise.race([updateDatabase(), timeoutPromise]);
      console.log(data);
      // Use toast to show success message
      toast({
        title: 'Database Update',
        description: data.test,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      // Use toast to show error message
      toast({
        title: 'Update Failed',
        description: error.message || 'Failed to update database.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // Stop loading animation
    }
  };

  return (
    <>
      <ButtonComponent
        height="8vw"
        marginTop="70px"
        p={5}
        onClick={handleUpdateDatabase}
        isLoading={isLoading}
      >
        <HiRefresh color='#547FE7' style={{ fontSize: "130px"}}/>
      </ButtonComponent>
    </>
  );
}
