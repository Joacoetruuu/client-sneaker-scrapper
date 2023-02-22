import { Skeleton, SkeletonCircle, SkeletonText,Stack } from '@chakra-ui/react'
import "./productGrid.css"
export function SkeletonDescription() {
  return (
    <div className='description'>
        <Stack className="skeleton">
                      <Skeleton height='20px' />
                      <Skeleton height='20px' />
                      <Skeleton height='20px' />
        </Stack>
    </div>
  )
}

export function SkeletonTitle() {
    return (
        <div className='titleSkeleton'>
                        <Skeleton height='20px'/>

        </div>
          
    )
  }
  
  export function SkeletonPrice() {
    return (
        <div className='priceSkeleton'>
                        <Skeleton height='20px' />

        </div>
          
    )
  }
  
  export function SkeletonSizes() {
    return (
        <div className='sizeSkeleton'>
                        <Skeleton height='20px' />

        </div>
          
    )
  }
  
  export function SkeletonImage() {
    return (
        
          <Skeleton height='300px' margin="auto" paddingLeft={"20px"}/>

       
          
    )
  }
  


