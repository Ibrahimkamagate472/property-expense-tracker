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
            <select>
              <option>First pet name</option>
              <option>Favorite teacher name</option>
              <option>Mother's maiden name </option>
              <option>Street of childhood home</option>
            </select>
            <Input placeholder='Please enter your answer' w='300px' />
          </Field.Root>

          <Field.Root alignItems='center'>
            <Field.Label>2. Security question</Field.Label>
            <Field.RequiredIndicator />
            <Field.RequiredIndicator />
            <select>
              <option>First pet name</option>
              <option>Favorite teacher name</option>
              <option>Mother's maiden name </option>
              <option>Street of childhood home</option>
            </select>
            <Input placeholder='Please enter your answer' w='300px' />
          </Field.Root>

          <ButtonGroup>
            <Button variant='subtle' color='green.600'>
              Create
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Container>
  )
}
export default SecurityQuestion
