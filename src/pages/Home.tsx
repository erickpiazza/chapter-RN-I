import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
   const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    console.log(newTaskTitle)
    const newTask: Task = {
      id: new Date().getTime(),
      done: false ,
      title: newTaskTitle
    } 
    setTasks([...tasks, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    console.log('teste',id )
    const newArray = tasks.map(task => task.id === id ? {
      ...task,done: !task.done
    }: task
    )
    console.log('teste',id )
    console.log('new array',newArray)
     setTasks(newArray)
  }

  function handleRemoveTask(id: number) {
    console.log('teste2',id )

    const filterTask = tasks.filter(task => task.id !== id)

    setTasks(filterTask)
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}