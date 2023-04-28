import React, { useState, useEffect } from "react";
import { Container, Input, Button, Flex, Spacer, Item } from "./styles";
import img from "./assets/Capturar-removebg-preview.png";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [hora, setHora] = useState(() => {
    return getFormattedHour();
  });

  useEffect(() => {
    handleInitializeTasks();
  }, []);

  function handleInitializeTasks() {
    const tasksOnStorage = localStorage.getItem("tasksStore");
    if (!tasksOnStorage) return;
    setTarefas(JSON.parse(tasksOnStorage));
  }

  function getFormattedHour() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${hour}:${minutes}`;
  }

  function addTaskToStorage(taskToAdd) {
    const currentTasksOnStorage = localStorage.getItem("tasksStore");
    if (!currentTasksOnStorage) {
      localStorage.setItem("tasksStore", JSON.stringify([taskToAdd]));
      return;
    }
    if (
      JSON.parse(currentTasksOnStorage).find(
        (task) => task.tarefa === taskToAdd.tarefa
      )
    )
      return;
    const newTasksForStorage = [
      ...JSON.parse(currentTasksOnStorage),
      taskToAdd,
    ];
    localStorage.setItem("tasksStore", JSON.stringify(newTasksForStorage));
  }

  function removeTaskFromStorage(taskToRemove) {
    const currentTasksOnStorage = localStorage.getItem("tasksStore");
    if (!currentTasksOnStorage) return;
    const newTasksForStorage = JSON.parse(currentTasksOnStorage).filter(
      (task) => task.tarefa !== taskToRemove.tarefa
    );
    localStorage.setItem("tasksStore", JSON.stringify(newTasksForStorage));
  }

  function handleAddTasks() {
    if (!tarefa || !hora) return alert("Digite uma tarefa e uma hora!");
    if (tarefas.find((task) => task.tarefa === tarefa))
      return alert("Tarefa já adicionada!");
    const currentTask = { tarefa, marcada: false, currentHour: hora };
    setTarefas((e) => {
      addTaskToStorage(currentTask);
      return [...e, currentTask];
    });
    setTarefa("");
  }

  function handleDelete(taskToRemove) {
    setTarefas((e) => e.filter((task) => task.tarefa !== taskToRemove.tarefa));
    removeTaskFromStorage(taskToRemove);
  }

  function handleEditTasksfromStorage(editedTasks) {
    const currentTasksOnStorage = localStorage.getItem("tasksStore");
    if (!currentTasksOnStorage) return;
    localStorage.setItem("tasksStore", JSON.stringify(editedTasks));
  }

  function editTarefa(taskToEdit) {
    const novaTarefa = prompt("Edite a tarefa:", taskToEdit.tarefa);
    if (!novaTarefa) return;

    setTarefas((e) => {
      const newTasks = e.map((task) => {
        const editedTask = {
          ...task,
          tarefa: task.tarefa === taskToEdit.tarefa ? novaTarefa : task.tarefa,
        };
        return editedTask;
      });
      handleEditTasksfromStorage(newTasks);
      return newTasks;
    });
  }

  function checkTarefa(taskToCheck) {
    setTarefas((e) =>
      e.map((task) => {
        return {
          ...task,
          marcada: task.tarefa === taskToCheck.tarefa ? !task.marcada : task.marcada,
        };
      })
    );
  }
  return (
    <Container>
      <img src={img} alt="logo" 
      style={{
          width: "15%",
          height: "50%",
          borderRadius: "60%",
          marginRight: "30%",
          marginLeft: "5%",
          marginBottom: "-10%"
        }}
      />
      <Flex>
        <h1 className="title"
          style={{
            color: "#74B4EC",
            fontSize: "100px",
            fontFamily: "Arial",
            marginLeft: "5%",
            marginTop: "5%",
            fontWeight: "bold",
          }}
        > 
          To Do List
        </h1>
      </Flex>
      <Spacer margin="16px" />
      <Flex direction="row">
        <Input
          type="text"
          placeholder="Digite sua tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <Button onClick={handleAddTasks}>Adicionar</Button>
      </Flex>
      <Flex direction="row" style={{ marginTop: "16px" }}>
        <Input
          type="time"
          style={{
            width: "150px",
            height: "50px",
            borderRadius: "8px",
            border: "none",
            marginRight: "13%",
          }}
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        ></Input>
      </Flex>
      <Spacer />
      <Flex style={{
        borderRadius: "5px",
        marginRight: "10%",
        borderStyle: "solid",
        borderWidth: "3px",
      }}>
        <h2>Tarefas</h2>
        <p>
          {tarefas.filter((tarefa) => tarefa.marcada === false).length} tarefas
          restantes
        </p>
        <Spacer />
        <Flex direction="column">
          {tarefas.map((tarefa, index) => (
            <Item key={index} checked={tarefa.marcada}>
              <p>
                {tarefa.tarefa} - {tarefa.currentHour}
              </p>
              <Flex direction="row">
                <button onClick={() => checkTarefa(tarefa)}>
                  <i className="bx bx-check-circle"></i>
                </button>
                <button onClick={() => handleDelete(tarefa)}>
                  <i className="bx bx-trash"></i>
                </button>
                <button
                  onClick={() => {
                    editTarefa(tarefa);
                  }}
                >
                  <i className="bx bx-pencil"></i>
                </button>
              </Flex>
            </Item>
          ))}
        </Flex>
        <Spacer />
      </Flex>
    </Container>
  );
}

export default App;
