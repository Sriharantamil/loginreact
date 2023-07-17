import React from "react";
import {useState} from 'react';
import Form from "react-validation/build/form";





const ProjectCreation = () => {



  const [projectName, setprojectName] = useState("");

  const handleChange = event => {
    setprojectName(event.target.value);

    console.log('value is:', event.target.value);
  };


  const handleSubmitt1 = async (e) => {
    e.preventDefault();

    const data = {projectName};

    try {
      const response = await fetch('http://localhost:8080/create_project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  function alertednotify() {
    if (projectName.length > 0){
    alert("Database created");
  }else{
    alert("please enter the database name");
  }
}

  return (
    <div className="col-md-12">
    <div className="card card-container">
    <img
          src="folder2.png"
          alt="profile-img"
          className="profile-img-card"
        />
    <Form onSubmit={handleSubmitt1}>
    <div className="form-group">
        <label >Create a Project</label>
    
      <input
        type="text"
        id="projectName"
        name="projectName"
        onChange={handleChange}
        value={projectName}
        autoComplete="off"
      />
      </div>
      <br>
      </br>
      <br></br>

      {/* <h2>Project: {project}</h2> */}

      <button type="submit" className="btn btn-primary btn-block" onClick={alertednotify}>Create Project</button>

      </Form>
    </div>
    </div>
  );
};

export default ProjectCreation;