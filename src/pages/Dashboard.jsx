import { Container, GridItem, SimpleGrid } from '@chakra-ui/react'
import MainLayout from '../mainLayout/MainLayout'
import { MainDash, RenovationDash, DashNoti, Tenants } from '../components'
const Dashboard = () => {
  return (
    <Container pt={12} h='100vh'>
      <SimpleGrid columns={{ md: 8 }} spaceX={6}>
        <GridItem>
          <MainLayout />
        </GridItem>
        <GridItem colSpan={{ md: 7 }}>
          <SimpleGrid columns={{ md: 8 }}>
            <GridItem colSpan={{ md: 6 }} pr={4}>
              <MainDash />
            </GridItem>
            <GridItem colSpan={2}>
              <DashNoti />
            </GridItem>
            <GridItem colSpan={{ md: 6 }} pr={4}>
              <Tenants />
            </GridItem>
            <GridItem colSpan={2}>
              <RenovationDash />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Container>
  )
}
export default Dashboard
