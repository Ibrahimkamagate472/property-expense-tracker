import { Container, Button, ButtonGroup, Center } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Container spaceX={4} shadow='sm' w={60} rounded='lg' mt={4}>
      <Center>
        <ButtonGroup variant='ghost' colorPalette='green' py={2} px={2}>
          <Button color='green.600'>Login</Button>
          <Button color='green.600'>Register</Button>
        </ButtonGroup>
      </Center>
    </Container>
  )
}
export default Navbar
