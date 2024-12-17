import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './todo.css'


const EditTaskPage = () => {
  const [id,setId]=useState("0")
  const [userId, setuserId] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  
  useEffect(()=>{
    setId(localStorage.getItem("id"));
    console.log("ID from localStorage:", localStorage.getItem("id"));

    setuserId(localStorage.getItem("userId"));
    setTitle(localStorage.getItem("title"));
        setId(localStorage.getItem("id"));



  },[])
 

  const handleUpdate = (e)=>{
    e.preventDefault();
    axios
    .put(`https://67527d0cd1983b9597b65897.mockapi.io/Todo/${id}`,{
      userId:userId,
      title:title
    })
    .then(()=>{
      navigate("/")
    });
  } ;




  
  return (
    <div>
      <h2>EDIT</h2>
      <br/>
      <form>
        <div className="mb-3">
          <label className="form-label">USERID</label>
          <input type="text" className="form-control" value={userId} onChange={(e) => setuserId (e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">TITLE </label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle (e.target.value)}/>
        </div>
        <Link to={'/'} >
        <button
          className="btn btn-primary"
          onClick={handleUpdate} >
          UPDATE
        </button>
        </Link>
      </form>
    </div>
  );
};

export default EditTaskPage;

















