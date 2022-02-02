import React, { useState } from 'react';
import { TableContainer, TableBody, TableHead, Th, TableHeadRow} from './Table.styled';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TableRow from './TableRow';

const initialErrors = {
    name: "",
    email: "",
    phoneNumber: ""
}

function Table({ data, headers, deleteUser, saveEditUser}) {
  const [sortColumn, setSortColumn] = useState({ key: null, direction: null });
  const [editUser, setEditUser] = useState(null);
  const [editErrors, setEditErrors] = useState(initialErrors)

  const sortData = (users) => {
    if (sortColumn.key !== null) {
      const copy = [...users];
      return copy.sort((user1, user2) => {
        if (
          user1[sortColumn.key].localeCompare(
            user2[sortColumn.key],
            navigator.languages[0] || navigator.language,
            { ignorePunctuation: true },
          ) < 0
        )
          return sortColumn.direction === 'ascending' ? -1 : 1;
        if (
          user1[sortColumn.key].localeCompare(
            user2[sortColumn.key],
            navigator.languages[0] || navigator.language,
            { ignorePunctuation: true },
          ) > 0
        )
          return sortColumn.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return users;
  };

  const sortColumnData = (key) => {
    let sortDirection = 'ascending';
    if (sortColumn.key === key && sortColumn.direction === 'ascending') {
      sortDirection = 'descending';
    }
    setSortColumn({ key, direction: sortDirection });
  };

  const sortIcon = (key) => {
    if (sortColumn.key === key && sortColumn.direction === 'ascending') {
      return <ArrowDownwardIcon sx={{ fontSize: 16, marginLeft: 1 }} />;
    }
    if (sortColumn.key === key && sortColumn.direction === 'descending') {
      return <ArrowUpwardIcon sx={{ fontSize: 16, marginLeft: 1 }} />;
    }
    return null;
  };

  const onSave = () => {
      if(isValidForm(editUser)) {
        const indexOf = data.findIndex( u => u.id === editUser.id)
        saveEditUser(indexOf, editUser);
        setEditUser(null)
      }
  };

  const setEditModeOn = (user) => {
    setEditUser(user);
  };

  const onChange = (e) => {
      const {name, value} = e.target
      setEditUser({...editUser, [name]: value })
  }


  const isValidForm = (values) => {
    let isValid = true;
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(values.name.length <=0) {
      setEditErrors({...editErrors, name: "Name is required"})
      isValid = false
    }
    if(values.phoneNumber.length <= 0) {
      setEditErrors({...editErrors, phoneNumber: "Phone number is required"})
      isValid = false
    }

    if(values.email.length <=0 || regex.test(values.email) === false) {
      setEditErrors({...editErrors, email: "Email is not valid"})
      isValid = false
    }
    return isValid
  }

  return (
    <TableContainer>
      <TableBody>
        <TableHead>
          <TableHeadRow>
            {headers.map((header) => (
              <Th key={header.key} onClick={() => sortColumnData(header.key)}>
                <span style={{ display: 'flex' }}>
                  {header.value} {sortIcon(header.key)}
                </span>
              </Th>
            ))}
          </TableHeadRow>
        </TableHead>
        <tbody>
          {sortData(data).map((participant, i) => (
            <TableRow
              key={i}
              errors={editErrors}
              data={editUser !== null && editUser.id === participant.id ? editUser : participant}
              deleteUser={deleteUser}
              onChange={onChange}
              onCancel={() => setEditUser(null)}
              onSave={onSave}
              editModeOn={editUser !== null && editUser.id === participant.id}
              setEditMode={setEditModeOn}
            />
          ))}
        </tbody>
      </TableBody>
    </TableContainer>
  );
}

export default Table;
