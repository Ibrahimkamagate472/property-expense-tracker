import { Container, Button, ButtonGroup, Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container spaceX={4} shadow='sm'>
      <Center>
        <ButtonGroup variant='ghost' colorPalette='green' p={2} px={2}>
          <Button color='green.600'>Login</Button>
          <Button color='green.600'>Register</Button>
        </ButtonGroup>
      </Center>
    </Container>
  )
}
export default Footer
