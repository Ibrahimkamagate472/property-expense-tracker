import { Container, Button, ButtonGroup, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const LoggedInSideBar = () => {
  const navigate = useNavigate()
  return (
    <Container
      colSpan={1}
      borderWidth='1px'
      rounded='md'
      shadow='lg'
      shadowColor='red'
    >
      <ButtonGroup variant='ghost' colorPalette='green'>
        <Flex direction='column' spaceY={2}>
          <Button color='green.600' onClick={() => navigate('/Dashboard')}>
            Dashboard
          </Button>
          <Button color='green.600' onClick={() => navigate('/properties')}>
            Properties
          </Button>
          <Button color='green.600' onClick={() => navigate('/renovations')}>
            Renovation
          </Button>
          <Button color='green.600' onClick={() => navigate('/tenants')}>
            Tenants
          </Button>
          <Button color='green.600' onClick={() => navigate('/')}>
            Logout
          </Button>
        </Flex>
      </ButtonGroup>
    </Container>
  )
}
export default LoggedInSideBar
