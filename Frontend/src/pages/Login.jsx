import {
  Container,
  Stack,
  Heading,
  Button,
  ButtonGroup,
  Input,
  Field,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  return (
    <Container my={{ md: 28 }} w={450} h='100vh'>
      <form>
        <Stack
          alignItems='center'
          colorPalette='green'
          borderWidth={1}
          borderColor='black'
          spaceY={2}
          pt={4}
          pb={4}
          shadow='lg'
        >
          <Heading>Login</Heading>

          <Field.Root alignItems='center'>
            <Field.Label>Username</Field.Label>
            <Field.RequiredIndicator />
            <Input placeholder='Enter your username' w='300px' />
          </Field.Root>

          <Field.Root alignItems='center'>
            <Field.Label>Password</Field.Label>
            <Field.RequiredIndicator />
            <Input placeholder='Enter your password' w='300px' />
          </Field.Root>

          <ButtonGroup>
            <Button
              variant='ghost'
              color='green.600'
              onClick={() => {
                navigate('/register')
              }}
            >
              Register
            </Button>
            <Button variant='subtle' color='green.600'>
              Login
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Container>
  )
}
export default Login
