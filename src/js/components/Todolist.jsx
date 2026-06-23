import React, {useState} from "react";


//create your first component
function Todolist() {
  const [tasks, setTasks] = useState([
    "Aprender React con Vite",
    "Wash my hands",
    "Make the bed"
  ]);

  const [newTask, setNewTask] = useState("");


  /* Para agregar */
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  /*  Para eliminar */
  const handleDeleteTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div className="container my-5 text-center" style={{ maxWidth: "600px" }}>
      <h1 className="text-dark mb-4 display-2">Todolist</h1>

      
      <form onSubmit={handleAddTask} className="d-flex gap-2 mb-0">
        <input
          type="text"
          className="form-control bg-dark text-light border-secondary py-3 fs-5"
          placeholder="Escribe una nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary px-4">
          What needs to be done?
        </button>
      </form>

      
      <ul className="list-group rounded-0">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item bg-dark text-light border-secondary border-opacity-50 d-flex justify-content-between align-items-center py-3 fs-5 text-start"
            style={{ minHeight: "60px" }}>
           
            <span>{task}</span>

            
            <button
              className="btn btn-sm text-danger border-0 bg-transparent fs-5 opacity-75 text-hover-bright"
              onClick={() => handleDeleteTask(index)}
              style={{ cursor: "pointer" }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

     
      <div className="bg-dark text-white-50 small p-2 border border-top-0 border-secondary border-opacity-50 text-start ps-3">
        {tasks.length} {tasks.length === 1 ? "item left" : "items left"}
      </div>
    </div>
  );
}

export default Todolist;