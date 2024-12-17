import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./todo.css";

const EditTaskPage = () => {
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // Load data from localStorage
    const storedId = localStorage.getItem("id");
    const storedUserId = localStorage.getItem("userId");
    const storedTitle = localStorage.getItem("title");
    const storedCompleted = localStorage.getItem("completed") === "true";

    console.log("ID retrieved from localStorage:", storedId); // Debugging
    setId(storedId);
    setUserId(storedUserId);
    setTitle(storedTitle);
    setCompleted(storedCompleted);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updating task with ID:", id);

    axios
      .put(`https://67527d0cd1983b9597b65897.mockapi.io/Todo/${id}`, {
        userId: userId,
        title: title,
        completed: completed,
      })
      .then(() => {
        console.log("Task updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating task:", error.response || error.message);
      });
  };

  return (
    <div>
      <h2>EDIT</h2>
      <br />
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">USERID</label>
          <input
            type="text"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">TITLE</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <label className="form-label">COMPLETED</label>
        <input
          type="checkbox"
          id="completed"
          checked={completed}
          value={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />

        <div></div>
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default EditTaskPage;
