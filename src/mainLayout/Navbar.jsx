import { Container, Button, ButtonGroup } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Container spaceX={4}>
      <ButtonGroup variant='ghost'>
        <Button>Home</Button>
        <Button>Expenses</Button>
        <Button></Button>
        <Button>Login</Button>
      </ButtonGroup>
    </Container>
  )
}
export default Navbar
