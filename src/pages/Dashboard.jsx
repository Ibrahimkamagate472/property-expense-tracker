import { Container, GridItem, SimpleGrid } from '@chakra-ui/react'
import MainLayout from '../mainLayout/MainLayout'
import { MainDash, RenovationDash } from '../components'
const Dashboard = () => {
  return (
    <Container pt={12} h='100vh'>
      <SimpleGrid columns={{ md: 8 }} spaceX={10}>
        <GridItem colSpan={1} borderWidth='1px' borderColor='blackAlpha.300'>
          <MainLayout />
        </GridItem>
        <GridItem colSpan={{ md: 5 }}>
          <MainDash />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <RenovationDash />
        </GridItem>
      </SimpleGrid>
    </Container>
  )
}
export default Dashboard
