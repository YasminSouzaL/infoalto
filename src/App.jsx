/* criar um to do list com localstorage */
import React, { useState, useEffect } from 'react';
import { Container, Input, Button, Flex, Spacer, Item } from "./styles";
import imgagemEscolhida from './assets/Capturar.jpg';

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
    setTarefas([...tarefas, tarefa]);
    setTarefa('');
  }  

  function handleDelete(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  function editTarefa(index) {
    const tarefasMapeadas = tarefas.map((tarefa, i) => {
      if (index === i) {
        return {
          ...tarefa,
          tarefa: tarefa,
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
          concluida: !tarefa.concluida,
        }
      }
      return tarefa;
    });
    setTarefas(tarefasMapeadas);
  }
  

  function relogio(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    return time;
  }

  return (
    <Container>
      <img src={imgagemEscolhida} alt="imagem" style={
        {
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }
      }/>
      <h1 className="title">
        To Do List
      </h1>
      {/* Criar um relogio */}
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
      {tarefas.map((tarefa,index) => (
        <Item key={index}>
          {tarefa}
            <Flex direction="row">
              <button onClick={() => checkTarefa(index)}>
                <i className="bx bx-check-circle"></i>
              </button>
              <button onClick={() => handleDelete(index)}>
                <i className="bx bx-trash"></i>
              </button>
              <button onClick={() => editTarefa(index)}>
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
