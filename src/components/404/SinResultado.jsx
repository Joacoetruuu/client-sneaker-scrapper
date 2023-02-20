
import { Text, Center, Box} from '@chakra-ui/react'

export function SinResultado() {
  return (
    
    <div className="noResult">
            <Text
            bgGradient="linear(to-l, #3182ce, #0064fa)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            className='titleText'
            >
            No se encontraron resultados
            </Text>
    </div>
  )
}
