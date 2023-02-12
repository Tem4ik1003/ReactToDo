import React, {useState} from 'react';
import './App.css';
import ToDoList from "./pages/ToDoList";
import {ModalState} from "./components/context/ModalContext";


function App() {

  return (
      <ModalState>
          <ToDoList/>
      </ModalState>
  );
}

export default App;
