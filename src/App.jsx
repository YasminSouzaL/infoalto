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
    setTarefas(tarefas.filter((t, i) => i !== index));
  }

  function checkTarefa(index) {
    setTarefas(tarefas.map((t, i) => {
      if (i === index) {
        return {
          ...t,
          checked: !t.checked,
        }
      }
      return t;
    }));
  }



  return (
    <Container>
      <h1 className="title">
        To Do List
      </h1>
      <Spacer />
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
            <Button onClick={() => checkTarefa(index)}>
              <i class="bx bx-check-circle"></i>
            </Button>
            <Button onClick={() => handleDelete(index)}>
              <i class="bx bx-trash"></i>
            </Button>
          </Item>
        ))}
      </Flex>
    </Container>
  );
}
export default App;