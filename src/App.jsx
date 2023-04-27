import React, { useState, useEffect } from 'react';
import { Container, Input, Button, Flex, Spacer, Item } from "./styles";

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefas = localStorage.getItem('tarefas');
    if (tarefas) {
      setTarefas(JSON.parse(tarefas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd() {
    setTarefas([...tarefas, { tarefa: tarefa, marcada: false }]);
    setTarefa('');
  }

  function handleDelete(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  function editTarefa(index, novaTarefa) {
    const tarefasMapeadas = tarefas.map((tarefa, i) => {
      if (index === i) {
        return {
          ...tarefa,
          tarefa: novaTarefa,
        }
      }
      return tarefa;
    });
    setTarefas(tarefasMapeadas);
  }

  function checkTarefa(index) {
    const tarefasMapeadas = tarefas.map((tarefa, i) => {
      if (index === i) {
        return {
          ...tarefa,
          marcada: !tarefa.marcada,
        };
      }
      return tarefa;
    });
    setTarefas(tarefasMapeadas);
    localStorage.setItem('tarefas', JSON.stringify(tarefasMapeadas));
  }
  
  return (
    <Container>
      <h1 className="title">
        To Do List
      </h1>
      <Spacer margin="16px"/>
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
        <Item key={index} className={tarefa.marcada ? 'marcada' : ''}>
          {tarefa.tarefa}
          <Flex direction="row">
            <button onClick={() => checkTarefa(index)}>
              <i className="bx bx-check-circle"></i>
            </button>
            <button onClick={() => handleDelete(index)}>
              <i className="bx bx-trash"></i>
            </button>
            <button onClick={() => {
              const novaTarefa = prompt("Digite a nova tarefa:", tarefa.tarefa);
              if (novaTarefa !== null && novaTarefa !== '') {
                editTarefa(index, novaTarefa);
              }
            }}>
              <i className="bx bx-pencil"></i>
            </button>
          </Flex>  
        </Item>
      ))}
      </Flex>
    </Container>
  );
}

export default App;
