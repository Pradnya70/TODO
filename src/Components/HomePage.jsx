import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './todo.css'

function HomePage() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://67527d0cd1983b9597b65897.mockapi.io/Todo")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id){
    axios
    .delete(`https://67527d0cd1983b9597b65897.mockapi.io/Todo/${id}`)
    .then(()=>{
        getData();
    });
  }

   const setToLocalStorage = (userId,title,completed) =>{
    localStorage.setItem("userId",userId)
    localStorage.setItem("title",title)
    localStorage.setItem("completed",completed)

   }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between m-2">
        <h2>READ TODO LIST</h2>
        <Link to='/AddTask'><button type="button" class="btn btn-primary" >CREATE TODO</button></Link>
        
        
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">USERID</th>
            <th scope="col">ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">COMPLETED</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{eachData.userId} </td>
                  <td> {eachData.id} </td>
                  <td> {eachData.title} </td>
                  <td>
                    <input type="checkbox" checked={eachData.completed} />
                  </td>
                  <td>
                  <Link to='/editTaskPage' >
                    <button className="btn-success" onClick={()=>setToLocalStorage(eachData.userId,eachData.title,eachData.completed)}> Edit </button>
                    </Link>
                  </td>
                  <td>
                    
                    <button className="btn-danger" onClick={()=>handleDelete(eachData.id)} > Delete </button>
                   
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default HomePage;














