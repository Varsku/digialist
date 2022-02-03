import React, {useState, useEffect} from "react"
import {AppContainer, AppTitle, Content} from "./App.styled"
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
    <AppContainer>
      <Header />
      <Content>
        <AppTitle>List of participants</AppTitle>
        <Form onClick={addUserToList}/>
        <Table data={data} headers={tableHeaders} deleteUser={deleteUser} saveEditUser={saveEditUser}/>
      </Content>
    </AppContainer>
  );
}

export default App;
