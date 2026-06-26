import { Container, Button, ButtonGroup, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container spaceX={4} shadow='sm' w={60} rounded='lg' mt={4}>
      <Center>
        <ButtonGroup variant='ghost' colorPalette='green' py={2} px={2}>
          <Button
            color='green.600'
            onClick={() => {
              navigate('/login')
            }}
          >
            Login
          </Button>
          <Button
            color='green.600'
            onClick={() => {
              navigate('/register')
            }}
          >
            Register
          </Button>
        </ButtonGroup>
      </Center>
    </Container>
  )
}
export default Navbar
