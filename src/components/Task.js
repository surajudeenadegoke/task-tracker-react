import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, ontoggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => ontoggle(task.id)}
    >
      <div className="task-content">
        <div>
          <h3>{task.text} </h3>
          <p>{task.day}</p>
          <p>{task.reminder}</p>
        </div>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
