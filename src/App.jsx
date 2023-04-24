import { Container, Input, Button, Flex, Spacer, Item } from "./styles";

function App() {
  return (
    <Container>
      <h1 className="title">
        To Do List
      </h1>
      <Spacer/>

      <Flex direction="row" justify="between">
        <Input placeholder="Digite sua tarefa!"/>
        <Button>Adicionar</Button>
      </Flex>
      <Spacer margin="16px"/>
      <ul>
        <Flex direction="row">
          <Item>REACT</Item>
            <Flex direction="row">
              <i class='bx bx-check-circle' ></i>
              <i class='bx bx-trash' ></i>
            </Flex>
          <Spacer margin="12px"/>
        </Flex>
        <Spacer/>
        <Flex direction="row">
          <Item>REACT </Item>
            <Flex direction="row">
              <i class='bx bx-check-circle' ></i>
              <i class='bx bx-trash' ></i>
            </Flex>
          <Spacer margin="12px"/>
        </Flex>
      </ul>
    </Container>
  );
}

export default App
