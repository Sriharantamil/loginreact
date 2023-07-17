
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


function SelectFile() {
  const navigate = useNavigate();
  const navigateToCreateProject = () => {
    // 👇️ navigate to /contacts
    navigate('/projectcreation');
  };

  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:8080/create_collection';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFile(response.data.file);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setError(error);
      });
  }

  return (
    <div>
    <div className="card card-container">
        <form onSubmit={handleSubmit}>
          <h1>UPLOAD FILE</h1>
          <input type="file"  className="btn btn-primary btn-block" onChange={handleChange}/>
          <button type="submit" className="btn btn-primary btn-block">Upload</button>
        </form>
        {uploadedFile && <img src={uploadedFile} alt="Uploaded content"/>}
        {error && <p>Error uploading file: {error.message}</p>}
        
    </div>
    <div>
    <button type="submit" className="btn btn-primary btn-block" onClick={navigateToCreateProject} >
              <span className="btncolor">Create Project</span>
            </button>
    </div>

    </div>
 
  );
}

export default SelectFile;