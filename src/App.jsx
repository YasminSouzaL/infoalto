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
    },{
      id: 2,
      tarefa: "Estudar React",
      //status: false,
      checked: false,
    }
  ]);

  const addTarefa = () => {
    if(!tarefa) return alert("Digite uma tarefa!");
    const novaTarefa = {
      id: Math.random(),
      tarefa: tarefa,
      //status: false,
      checked: false,
    }

    setTarefas([...tarefas, novaTarefa]);
    setTarefa("");    
  };

  const removeTarefa = (id) => {
    const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  };

  const checkTarefa = (id) => {
    const tarefasMapeadas = tarefas.map((tarefa) => {
      if(tarefa.id === id) {
        return {
          ...tarefa,
          checked: !tarefa.checked,
        }
      }
      return tarefa;
    });
    setTarefas(tarefasMapeadas);
  };
  

  return (
    <Container>
      <h1 className="title">
        To Do List
      </h1>
      <Spacer/>
      <Flex direction="row">
        <Input
          value={tarefa} 
          placeholder="Digite sua tarefa!" 
          onChange={
            (e) => setTarefa(e.target.value)
          }/>
        <Button onClick={addTarefa}>Adicionar</Button>
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
              <button onClick={() => removeTarefa(tarefa.id)}>
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
