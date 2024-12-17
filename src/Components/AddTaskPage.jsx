import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './todo.css'


const AddTaskPage = () => {
  const [userId, setuserId] = useState("");
  const [title, setTitle] = useState("");
  const history = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://67527d0cd1983b9597b65897.mockapi.io/Todo", {
      userId: userId,
      title: title,
      completed:false
    })
  .then(()=>{
    history("/");
});   
};

  
  return (
    <div>
      <h2>ADD TASK</h2>
      <br/>
      <form>
        <div className="mb-3">
          <label className="form-label">USERID</label>
          <input type="text" className="form-control" onChange={(e) => setuserId (e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">TITLE </label>
          <input type="text" className="form-control" onChange={(e) => setTitle (e.target.value)}/>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
       
      </form>
    </div>
  );
};

export default AddTaskPage;

















