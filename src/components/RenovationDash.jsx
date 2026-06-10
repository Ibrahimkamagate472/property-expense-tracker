import { Container, Heading, Flex, Box } from '@chakra-ui/react'
const RenovationDash = () => {
  return (
    <Container borderWidth='1px' rounded='md' h={250} shadow='lg'>
      <Flex alignContent='center' direction='column' spaceY={4}>
        <Heading>Renovation</Heading>
        <Box>
          <Heading size={{ md: 'md' }}>Budget Amount Spent</Heading>
        </Box>
        <Box>
          <Heading size={{ md: 'md' }}>Budget Amount Left</Heading>
        </Box>
      </Flex>
    </Container>
  )
}
export default RenovationDash
