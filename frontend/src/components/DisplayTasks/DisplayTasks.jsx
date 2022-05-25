import React from "react";
import axios from "axios"
const DisplayTasks = (props) => {
  function handleDeleteClick(id, task) {
    let finalAnswer = prompt(`You have selected:\nTask: ${task}\nAre you sure you would like to delete this task?`).toLowerCase()
    if (finalAnswer === "yes") {
      deleteTask(id)
    }
  }
  async function deleteTask(id) {
    try {
      let response = await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`,{
        headers: {
          Authorization: "Bearer " + props.token 
        }
      })
    props.getAllTasks()
    alert("Task have been successfully deleted!")
    }
    catch (error) {
      console.log(error.message)
    }
  }
  if (props.tasks.length > 0 && props.user.role === "Project Manager") {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Due Date</th>
            <th>Related Project</th>
            <th>Assigned</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.due_date}</td>
                  <td>{task.project.title}</td>
                  <td>
                    {task.assigned.first_name} {task.assigned.last_name}
                  </td>
                  <td>{task.description}</td>
                  <td>{task.status}</td>
                  <td><button className="button">UPDATE</button></td>
                  <td><button onClick={()=> handleDeleteClick(task.id, task.description)}className="button">DELETE</button></td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    );
  } 
  else if (props.tasks.length > 0 && props.user.role === "Software Developer"){
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Due Date</th>
            <th>Related Project</th>
            <th>Assigned</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.due_date}</td>
                  <td>{task.project.title}</td>
                  <td>
                    {task.assigned.first_name} {task.assigned.last_name}
                  </td>
                  <td>{task.description}</td>
                  <td>{task.status}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    );
  } 
  else
    return (
      <div className="projects-container">
        <div className="border-box">
          <h2>NO CURRENT TASKS</h2>
        </div>
      </div>
    );
};

export default DisplayTasks;
