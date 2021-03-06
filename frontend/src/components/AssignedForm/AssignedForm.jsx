import React, { useState} from "react";
import axios from "axios";
import "./AssignedForm.css"
const AssignedForm = (props) => {
  const [assignedUser, setAssignedUser] = useState();
  const [projectAssigned, setProjectAssigned] = useState();


  async function assignProject(project, assigned) {
      try {
          let response = await axios.put(
      `http://127.0.0.1:8000/api/projects/${project}/${assigned}/`,{},
      {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      }
    );
    if (response.status === 202) {
      alert("Successfully Assigned");
    }
      }
      catch (error) {
          console.log(error.message)
          alert("User has already been assigned to this project. Try Again")
      }
    
  }

  function handleClick(event) { 
    event.preventDefault();
    assignProject(parseInt(projectAssigned), parseInt(assignedUser));
    
  }
  return (
    <div >
      <form className="assigned-form-container"onSubmit={handleClick}>
        <div className="border-box">
          <h2>Assign A Project</h2>
          <div className="grid-box">
            <label>
              PROJECT RELATED:
              <select
                onClick={(e) => setProjectAssigned(e.target.value)}
              >
                <option value="default">Choose Here</option>
                {props.projects.map((project) => {
                  return (
                    <option key={project.id + 2} value={project.id}>
                      {project.title}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="grid-box">
            <label>
              ASSIGN TO:
              <select
                onClick={(e) => setAssignedUser(e.target.value)}
              >
                <option value="default">Choose Here</option>
                {props.developers.map((developer) => {
                  return (
                    <option key={developer.id + 2} value={developer.id}>
                      {developer.first_name} {developer.last_name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="grid-box">
            <button className="button">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssignedForm;
