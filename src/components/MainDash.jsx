import { Container, Heading, Box, Flex, Button } from '@chakra-ui/react'
const MainDash = () => {
  return (
    <Container borderWidth='1px' rounded='md' h={250} mb={8} shadow='lg'>
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
export default MainDash
