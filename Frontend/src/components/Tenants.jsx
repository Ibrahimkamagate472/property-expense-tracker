import { Container, Box, Heading, Flex, Button } from '@chakra-ui/react'
const Tenants = () => {
  return (
    <Container borderWidth={1} rounded='md' h={250} shadow='lg' spaceY={2}>
      <Heading textAlign='center' pt={4}>
        Tenants
      </Heading>
      <Flex spaceX={16} justifyContent='center'>
        <Box>
          <Heading>Month Profit</Heading>
          <Button variant='ghost' colorPalette='green'>
            More
          </Button>
        </Box>
        <Box>
          <Heading>Current Profit </Heading>
          <Button variant='ghost' colorPalette='green'>
            More
          </Button>
        </Box>
        <Box>
          <Heading>Estimated Yearly Revenue</Heading>
          <Button variant='ghost' colorPalette='green'>
            More
          </Button>
        </Box>
      </Flex>
    </Container>
  )
}
export default Tenants
