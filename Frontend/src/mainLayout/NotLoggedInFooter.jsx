import { Container, Button, ButtonGroup, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const NotLoggedInFooter = () => {
  const navigate = useNavigate()
  return (
    <Container spaceX={4} shadow='sm'>
      <Center>
        <ButtonGroup variant='ghost' colorPalette='green' p={2} px={2}>
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
export default NotLoggedInFooter
