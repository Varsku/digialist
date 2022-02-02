import React, {useState, useEffect} from "react"
import './App.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Table from "./components/table/Table"
import { participants, tableHeaders } from './constants';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(participants);
  }, []);

  const addUserToList = (newUser) => {
    setData([...data, newUser])
  }

  const deleteUser = (user) => {
    const newUsers = data.filter(u => u.id !== user.id)
    setData(newUsers)
  }

  const saveEditUser = (i, user) => {
    const copy = [...data];
    copy[i] = user
    setData(copy);
  }

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <h1 className="Title-text">List of participants</h1>
        <Form onClick={addUserToList}/>
        <Table data={data} headers={tableHeaders} deleteUser={deleteUser} saveEditUser={saveEditUser}/>
      </div>
    </div>
  );
}

export default App;
