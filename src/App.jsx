/* criar um to do list com localstorage */
import React, { useState, useEffect } from 'react';
import { Container, Input, Button, Flex, Spacer, Item } from "./styles";

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }
    , []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
    , [tarefas]);

  function handleAdd() {
    setTarefas([...tarefas, tarefa]);
    setTarefa('');
  }

  

  function handleDelete(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  function checkTarefa(index) {
    const tarefasMapeadas = tarefas.map((tarefa, i) => {
      if (index === i) {
        return {
          ...tarefa,
          checked: !tarefa.checked,
        }
      }
      return tarefa;
    });
    setTarefas(tarefasMapeadas);
  }



  return (
    <Container>
      <h1 className="title">
        To Do List
      </h1>
      <Spacer  margin="16px"/>
      <Flex direction="row">
        <Input 
          type='text'
          placeholder='Digite sua tarefa'
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <Button onClick={handleAdd}>Adicionar</Button>
      </Flex>
      <Spacer />
      <Flex direction="column">
        {tarefas.map((tarefa, index) => (
          <Item key={tarefa}>
            {tarefa}
            <Flex direction="row">
              <button onClick={() => checkTarefa(index)}>
                <i class="bx bx-check-circle"></i>
              </button>
              <button onClick={() => handleDelete(index)}>
                <i class="bx bx-trash"></i>
              </button>
            </Flex>  
          </Item>
        ))}
      </Flex>
    </Container>
  );
}
export default App;