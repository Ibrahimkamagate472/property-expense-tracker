import { Container, Heading, Box, Flex, Button } from '@chakra-ui/react'
const MainDash = () => {
  return (
    <Container borderWidth='1px'>
      <Flex spaceX={16} justifyContent='center'>
        <Box>
          <Heading>Current Revenue</Heading>
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
        <Box>
          <Heading>Upcoming </Heading>
          <Button variant='ghost' colorPalette='green'>
            More
          </Button>
        </Box>
      </Flex>
    </Container>
  )
}
export default MainDash
