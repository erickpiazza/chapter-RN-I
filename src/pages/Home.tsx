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
   const [tasks, setTasks] = useState<Task[]>([{done:true , id:1, title:'teste'},{done:true , id:2, title:'teste2'},{done:true , id:3, title:'teste3'}]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
  }

  function handleMarkTaskAsDone(id: number) {
    console.log('teste',id )
    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    console.log('teste2',id )
    //TODO - remove task from state
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