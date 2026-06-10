import Mainlayout from '../mainLayout/MainLayout'
import { Container, SimpleGrid, GridItem } from '@chakra-ui/react'

const Properties = () => {
  return (
    <Container pt={12} h='100vh'>
      <SimpleGrid columns={{ md: 8 }}>
        <GridItem>
          <Mainlayout />
        </GridItem>
      </SimpleGrid>
    </Container>
  )
}
export default Properties
