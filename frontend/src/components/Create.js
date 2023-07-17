import React from "react";
import {useState} from 'react';
import Form from "react-validation/build/form";
// import { Link } from "react-router-dom";
import "./Create.css";
import { useNavigate} from 'react-router-dom';




const Create = () => {
  const navigate = useNavigate();
  const navigateToFileupload = () => {
    // 👇️ navigate to /contacts
    navigate('/selectfile');
  };


  const [databaseName, setdatabaseName] = useState("");

  const handleChange = event => {
    setdatabaseName(event.target.value);

    console.log('value is:', event.target.value);
  };


  const handleSubmitt = async (e) => {
    e.preventDefault();

    const data = {databaseName};

    try {
      const response = await fetch('http://localhost:8080/create_collection', {
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
  function alertednotify(event) {
    if (databaseName.length > 0){
    alert("Database created");
  }else{
    alert("please enter the database name");
  }
}

  return (
    <div className="col-md-12">
    <div className="card card-container">
    <img
          src="database.png"
          alt="profile-img"
          className="profile-img-card"
        />
    <Form onSubmit={handleSubmitt}>
    <div className="form-group">
        <label >Create a MasterDB</label>
    
      <input
        type="text"
        id="databaseName"
        name="databaseName"
        onChange={handleChange}
        value={databaseName}
        autoComplete="off"
      />
      </div>
      <br>
      </br>
      <br></br>

      {/* <h2>Project: {project}</h2> */}

      <button type="submit" className="btn btn-primary btn-block" onClick={alertednotify}>Create Database</button>
      <button type="submit" className="btn btn-primary btn-block" onClick={navigateToFileupload} >
              {/* <span className="btncolor"><Link to={"/selectfile"} >
                
              SELECT FILE</Link></span> */}
              <span className="btncolor">SELECT FILE</span>
            </button>
      </Form>
    </div>
    </div>
  );
};

export default Create;