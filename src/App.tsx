import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from "./pages/ToDoList";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import Modal from "./components/Modal/Modal";
import AddToDo from "./components/Forms/AddToDo";
import {ModalState} from "./components/context/ModalContext";


function App() {

  return (
      <ModalState>
          <ToDoList/>
      </ModalState>
  );
}

export default App;
