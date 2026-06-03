import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Container,
} from '@chakra-ui/react'
const Home = () => {
  return (
    <Box mr={5} ml={5}>
      <SimpleGrid columns={{ md: 2 }}>
        <GridItem colSpan={{ md: 1 }} py={150}>
          <Heading size={{ md: '4xl' }}>Rental Property</Heading>
          <Heading textIndent={5} size={{ md: '4xl' }} pb={8}>
            Finance Manager
          </Heading>
          <Container spaceY={3}>
            <Text>Track all of your property expenses</Text>
            <Text>Get estimated revenue generated</Text>
          </Container>
        </GridItem>
        <GridItem></GridItem>
      </SimpleGrid>
    </Box>
  )
}
export default Home
