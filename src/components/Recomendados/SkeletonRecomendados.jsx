
import { Text, Center, Box, Stack, SkeletonText } from '@chakra-ui/react'

export function SkeletonRecomendados() {
  return (
    <>
          <Center>

                <div className="cardLanding">
            
            <Stack>
              <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
            </Stack>  
          </div>

      </Center>


      <Center>
      <div className="cardLanding" margin="auto">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>
      </Center>

      <Center>

      <div className="cardLanding" margin="auto">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>

      </Center>


      <Center>

      <div className="cardLanding" margin="auto">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>

      </Center>

      <Center>

        
      <div className="cardLanding" margin="auto">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>

      </Center>

      
    </>
  );
}
