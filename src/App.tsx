import { stringify } from 'querystring';
import React, { useState } from 'react';
import styles from './App.module.scss';

// Componentes
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/Task';



function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (title: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.title !== title;
      })
    );
  };
  //hiddenOrShowModal
  const hiddenOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hidden");
    } else {
      modal!.classList.add("hidden");
    }
  };

  const editTask = (task: ITask): void => {
    hiddenOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hiddenOrShowModal(false);
  };

  return (
    <>
       <Modal
       title="Editar tarefa"
        children={
          <TaskForm
            btnText="Editar"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <div className={styles.container}>
        <section>
          <h2>Qual é sua tarefa?</h2>
          <TaskForm
            taskList={taskList}
            setTaskList={setTaskList}
            btnText="Cadastrar"
          />
        </section>
        <section>
          <h2>Tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </section>
      </div>
      <Footer />

    </>
  )
}

export default App;


// Instalar icons