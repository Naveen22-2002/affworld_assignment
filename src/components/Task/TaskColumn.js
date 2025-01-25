import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, columnId, onDragStart, onDrop, deleteTask }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    onDrop(columnId);
  };

  return (
    <div 
      className="task-column"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDragStart={onDragStart}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;