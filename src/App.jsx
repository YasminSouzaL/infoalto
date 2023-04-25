import { Container, Input, Button, Flex, Spacer, Item } from "./styles";
/* Usar LocalStorage */
import { useState } from "react";

function App() {
  const [tarefa,setTarefa] = useState("");
  const [tarefas,setTarefas] = useState([
    {
      id: 1,
      tarefa: "Estudar React",
      //status: false,
      checked: true,
    },
    {
      id: 2,
      tarefa: "Estudar React",
      //status: false,
      checked: false,
    }
  ]);

  console.log(tarefas);

  return (
    <Container>
      <h1 className="title">
        To Do List
      </h1>
      <Spacer/>
      <Flex direction="row" justify="between">
        <Input placeholder="Digite sua tarefa!" 
          onChange={(e) => setTarefa(e.target.value)}/>
        <Button>Adicionar</Button>
      </Flex>
      <Spacer margin="16px"/>
      <ul>
        {tarefas.map((tarefa) => (
          <>
          <Item checked={tarefa.checked} key={tarefa.id}>
            <p>
              {tarefa.tarefa}
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
          <Spacer margin="16px"/>
          </>          
        ))}
      </ul>
    </Container>
  );
}

export default App
