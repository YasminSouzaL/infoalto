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
        <Item>REACT</Item>
          <Flex>
            <i class='bx bx-check-circle' ></i>
            <i class='bx bx-trash' ></i>
          </Flex>
        <Spacer margin="12px"/>
        <Item>REACT </Item>
          <Flex>
            <i class='bx bx-check-circle' ></i>
            <i class='bx bx-trash' ></i>
          </Flex>
        <Spacer margin="12px"/>
        <Item>REACT</Item>
          <Flex>
            <i class='bx bx-check-circle' ></i>
            <i class='bx bx-trash' ></i>
          </Flex>
        <Spacer margin="12px"/>
      </ul>
    </Container>
  );
}

export default App
