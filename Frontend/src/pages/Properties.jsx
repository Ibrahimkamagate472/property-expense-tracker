import { Container, SimpleGrid, GridItem } from '@chakra-ui/react'
import LoggedInSideBar from '../mainLayout/LoggedInSideBar'

const Properties = () => {
  return (
    <Container pt={12} h='100vh'>
      <SimpleGrid columns={{ md: 8 }}>
        <GridItem>
          <LoggedInSideBar />
        </GridItem>
      </SimpleGrid>
    </Container>
  )
}
export default Properties
