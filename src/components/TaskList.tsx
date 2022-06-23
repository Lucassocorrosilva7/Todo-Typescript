import React from 'react'
import {FaEdit, FaTrashRestoreAlt} from 'react-icons/fa'
import { ITask } from '../interfaces/Task'
import styles from "./TaskList.module.scss"


interface Props {
  taskList: ITask[];
  handleDelete(title: string): void;
  handleEdit(task: ITask): void;
}


const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
  <>
  {taskList.length > 0 ? (
    taskList.map((task, index) => (
      <div className={styles.tasklist} key={index}>
        <div className={styles.tasklist__details}>
          <h4>{task.title}</h4>
          <p>Dificuldade: {task.difficulty}</p>
        </div>
        <div className={styles.tasklist__actions}>
           <i><FaEdit fontSize={20} 
          onClick={() => handleEdit(task)}/></i>
           <i><FaTrashRestoreAlt 
           onClick={() => handleDelete(task.title)}
           fontSize={20}/></i>
        </div>
      </div>
    ))
  ) : (
    <p>Não há tarefas cadastradas!</p>
  )}
  </>
  )
}


export default TaskList;