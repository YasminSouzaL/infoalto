import { Container, Input, Button, Flex, Spacer, Item } from "./styles";
/* Usar LocalStorage */
import { useState } from "react";

function App() {
  const [tarefa,setTarefa] = useState("");
  const [tarefas,setTarefas] = useState([{
    id: 1,
    tarefa: "Estudar React",
    status: false
    
  }]);

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
          <Item checked={true}>
            <p>
              React
            </p>
            <Flex direction="row">
              <button>
                <i class="bx bx-check-circle"></i>
              </button>
              <button>
                <i class="bx bx-trash"></i>
              </button>
            </Flex>
          </Item>  
          <Spacer margin="14px"/>
          <Item>
            <p>
              React
            </p>
            <Flex direction="row">
              <button>
                <i class="bx bx-check-circle"></i>
              </button>
              <button>
                <i class="bx bx-trash"></i>
              </button>
            </Flex>
          </Item>  
          <Spacer margin="12px"/>
      </ul>
    </Container>
  );
}

export default App
