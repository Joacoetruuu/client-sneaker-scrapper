
import { Text, Center, Box, Stack, SkeletonText } from '@chakra-ui/react'

export function SkeletonRecomendados() {
  return (
    <>
      <div className="cardLanding">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>

      <div className="cardLanding">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>

      <div className="cardLanding">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>

      <div className="cardLanding">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>

      <div className="cardLanding">
        <Stack>
          <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="2" />
        </Stack>
      </div>
    </>
  );
}
