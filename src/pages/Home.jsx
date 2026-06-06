import { Box, Heading, Text, Center, VStack, Highlight } from '@chakra-ui/react'
const Home = () => {
  return (
    <Box mr={5} ml={5}>
      <Center h='100vh'>
        <VStack>
          <Heading size={{ md: '7xl' }}>Rental Property</Heading>
          <Heading textIndent={5} size={{ md: '7xl' }} pb={8}>
            Manager
          </Heading>
          <Text fontSize='xl'>
            <Highlight
              query={['homeowners', 'homeowner']}
              styles={{ px: '0.5', bg: 'green.100' }}
            >
              Made by a homeowner, for homeowners
            </Highlight>
          </Text>
        </VStack>
      </Center>
    </Box>
  )
}
export default Home
