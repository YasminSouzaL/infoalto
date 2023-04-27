import React, { useState, useEffect } from "react";
import { Container, Input, Button, Flex, Spacer, Item } from "./styles";

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
      <h1 className="title">To Do List</h1>
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
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        ></Input>
      </Flex>

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
    </Container>
  );
}

export default App;
