import React from "react";
import { FaTrash } from "react-icons/fa";

const TaskCard = ({ task, onDragStart, deleteTask }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.status.toLowerCase(), task.id);
    }
  };

  return (
    <div
      className="task-card"
      draggable="true"
      onDragStart={(e) => onDragStart(e, task)}
    >
      <div className="task-card-content">
        <h4>{task.name}</h4>
        <p>{task.description}</p>
        <p className="task-status">Status: {task.status}</p>
      </div>
      <FaTrash className="delete-icon" onClick={handleDelete} />
    </div>
  );
};

export default TaskCard;