import React, { useState, useRef, useEffect } from "react";//useState, useRef
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import {Link,useNavigate } from "react-router-dom";
import axios from "axios";





import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
//   useEffect(()=>{
//     console.log("arun");
//     async function fetchData(){
//        const response = await fetch("http://localhost:8080/signup/get"); 
//       const data = await response.json(); 
// console.log(data); 
// }

// fetchData();

// },[]);

useEffect(() => {
  const getAds = async () => {
    const res = await axios.get('http://localhost:8080/signup/get')
    console.log(res.data)
  }
  getAds()
}, [])




 const form = useRef();
  // const checkBtn = useRef();
  const navigate = useNavigate();
  const navigateToCreatedb = () => {
    // 👇️ navigate to /contacts
    navigate('/create');
  };



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState("corporate");
  const [email,setEmail]=useState("")
  // const [loading, setLoading] = useState(false);



  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeaccess=(e) => {
    const access=e.target.value;
    setAccess(access);
  }

  const onChangeemail=(e) => {
    const email=e.target.value;
    setEmail(email);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {username,email,password,access};

    try {
      const response = await fetch('http://localhost:8080/signup', {
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
    if(username==="corporate" && password==="corporate") {
       navigate('/create');
    

    }
    else if(access==="project") {
      navigate('/packagedata')
    }
    
    else {
      alert("please check the entered details it is invalid");
    }



  };
  
  
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleSubmit}> 

        <div className="form-group">
        <label > Select login:</label>
      <select className="form-control" value={access} onChange={onChangeaccess}>
        <option value="corparate">corparate</option>
        <option value="project">project</option>
      </select>
    
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeemail}
              validations={[required]}
            />
          </div>


          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" > 
              {/* {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )} */}
              <span className="btncolor1">
                
              Login</span>
            </button>
            <Link to={"/register"} >
                Forget password
              </Link>
          </div>


          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </Form>
      </div>
    </div>
  );
};

export default Login;
