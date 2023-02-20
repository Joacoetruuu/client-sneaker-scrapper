import { Text, Center, Box, Stack, SkeletonText } from '@chakra-ui/react'
import "./error.css"

export function Error404() {
  return (
    <div className='error404'>
        <div style={{displ: "block"}}>
            <Text
            bgGradient="linear(to-l, #3182ce, #0064fa)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            className='titleText'
            >
            Esta página no existe.
            </Text>
            <img src="https://i.ibb.co/2t2S1nw/imagen-4040.png" className='jordan1' alt="" />
        </div>

    </div>
  )
}
