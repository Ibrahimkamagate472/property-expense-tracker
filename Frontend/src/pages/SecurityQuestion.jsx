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
const SecurityQuestion = () => {
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
          <Heading>Create Account</Heading>

          <Field.Root alignItems='center'>
            <Field.Label>1. Security question</Field.Label>
            <Field.RequiredIndicator />
            <select style={{ width: '300px' }}>
              <option>What is your first pet name?</option>
              <option>What’s your favorite teacher name?</option>
              <option>What’s your mother's maiden name?</option>
              <option>What’s your street of childhood home?</option>
            </select>
            <Input placeholder='Please enter your answer' w='300px' />
          </Field.Root>

          <Field.Root alignItems='center'>
            <Field.Label>2. Security question</Field.Label>
            <Field.RequiredIndicator />
            <Field.RequiredIndicator />
            <select style={{ width: '300px' }}>
              <option>What is your oldest sibling’s middle name?</option>
              <option>What was the first concert you attended?</option>
              <option>What was the make and model of your first car?</option>
              <option>What’s your favorite movie?</option>
            </select>
            <Input placeholder='Please enter your answer' w='300px' />
          </Field.Root>

          <ButtonGroup>
            <Button
              variant='subtle'
              color='green.600'
              onClick={() => {
                navigate('/dashboard')
              }}
            >
              Create
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Container>
  )
}
export default SecurityQuestion
