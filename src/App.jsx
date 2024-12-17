import React from 'react'
import HomePage from './Components/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTaskPage from './Components/AddTaskPage';
import EditTaskPage from'./Components/EditTaskPage'
import "./App.css"

function App() {

  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>

            <Route exact path="/addTask" element={<AddTaskPage />}></Route>

            <Route exact path="/editTaskPage" element={<EditTaskPage />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
