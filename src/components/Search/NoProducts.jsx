import { Text, Box, Center } from "@chakra-ui/react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

function NoProducts() {
  return (
    <Alert status='error' width={"300px"} height={"100px"} position={"relative"} justifyContent={"center"}>
        <AlertIcon />
        
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
    </Alert>
  );
}

export default NoProducts;
