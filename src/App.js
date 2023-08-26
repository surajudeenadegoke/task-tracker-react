// import { set } from "mongoose";
import axios from "axios";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  //FetchTasks
  useEffect(() => {
    const getTasks = async () => {
      const dataFromServer = await fetchTasks();
      setTasks(dataFromServer);
    };

    getTasks();
  }, []);
  //fetch dataFrom mock api
  const fetchTasks = async () => {
    const response = await axios.get(" http://localhost:2000/tasks");
    const tasks = await response.data;
    return tasks;
  };
  // //Add task to the tracker
  const addTask = async (task) => {
    const data = await axios.post("http://localhost:2000/tasks", task);
    setTasks(data);
  };
  //delete task from tracker
  const deleteTask = (id) => {
    // Make a DELETE request to the mock API
    axios.delete(`http://localhost:2000/tasks/${id}`).then((response) => {
      // Update the state to reflect the deletion
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task--Tracker"
        onShow={() => setShowAddTask(!showAddTask)}
        showAdd={!showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0  ?(
        <Tasks tasks={tasks} onDelete={deleteTask} ontoggle={toggleReminder} />
      ) : (
        "No Task to show"
      )}
     

      <Footer />
    </div>
  );
};

export default App;
