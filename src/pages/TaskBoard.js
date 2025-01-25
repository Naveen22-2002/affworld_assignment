import React, { useState } from "react";
import "../styles/task.css";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import TaskForm from "../components/Task/TaskForm";
import TaskColumn from "../components/Task/TaskColumn";

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    pending: [],
    completed: [],
    done: [],
  });
  const [draggedTask, setDraggedTask] = useState(null);

  const addTask = (newTask) => {
    const taskWithId = {
      id: `task-${Date.now()}`,
      ...newTask,
    };
    
    setTasks((prevTasks) => ({
      ...prevTasks,
      pending: [...prevTasks.pending, taskWithId],
    }));
  };

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const handleDrop = (columnId) => {
    if (!draggedTask) return;

    const sourceColumn = draggedTask.status.toLowerCase();
    const updatedTask = { ...draggedTask, status: columnId.charAt(0).toUpperCase() + columnId.slice(1) };

    setTasks(prevTasks => {
      // Remove from source column
      const sourceColumnTasks = prevTasks[sourceColumn].filter(
        task => task.id !== draggedTask.id
      );

      // Add to destination column
      const destColumnTasks = [...prevTasks[columnId], updatedTask];

      return {
        ...prevTasks,
        [sourceColumn]: sourceColumnTasks,
        [columnId]: destColumnTasks,
      };
    });

    setDraggedTask(null);
  };

  const deleteTask = (column, taskId) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: prevTasks[column].filter(task => task.id !== taskId)
    }));
  };

  return (
    <div className="task-board-page">
      <Navbar />
      <div className="task-board-content">
        <h1>Task Management System</h1>
        <TaskForm onSubmit={addTask} />
        <div className="task-columns">
          <TaskColumn
            title="Pending"
            tasks={tasks.pending}
            columnId="pending"
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            deleteTask={deleteTask}
          />
          <TaskColumn
            title="Completed"
            tasks={tasks.completed}
            columnId="completed"
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            deleteTask={deleteTask}
          />
          <TaskColumn
            title="Done"
            tasks={tasks.done}
            columnId="done"
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            deleteTask={deleteTask}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TaskBoard;