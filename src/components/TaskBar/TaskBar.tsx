import { useState } from "react";
import style from "./taskbar.module.css";
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface TaskBarProps {
  setTask: (value: any) => void;
}

export function TaskBar({setTask}: TaskBarProps) {
    const [newTask, setNewTask] = useState<string>('')

  function handleCreateTask(event: any) {
    event.preventDefault()
    setTask((value: string[]) => {
      return [...value, event.target.newTask.value] as string[]
    })
    setNewTask('')
  }
  return (
    <form className={style.taskform} onSubmit={handleCreateTask}>
      <input
        className={style.taskbar}
        name="newTask"
        value={newTask}
        onChange={(event) => {setNewTask(event.target.value)}}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button 
      className={style.taskbutton} 
      type="submit"
      >
        Criar <AiOutlinePlusCircle size={20}/>
      </button>
    </form>
  );
}
