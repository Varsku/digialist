import React from 'react';
import { Td, CancelButton, SaveButton, TableDataRow } from './Table.styled';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Input from '../input/Input';

function TableRow({
  data,
  editModeOn,
  onSave,
  index,
  onCancel,
  onChange,
  deleteUser,
  setEditMode,
}) {

  const renderContent = () => {
    if (!editModeOn) {
      return (
        <>
          <Td>{data.name}</Td>
          <Td>{data.email}</Td>
          <Td>{data.phoneNumber}</Td>
          <Td>
            <ModeEditIcon
              sx={{ fontSize: 24, color: '#909090', cursor: 'pointer' }}
              onClick={() => setEditMode(data)}
            />
          </Td>
          <Td>
            <DeleteIcon
              sx={{ fontSize: 24, color: '#909090', cursor: 'pointer' }}
              onClick={() => deleteUser(data)}
            />
          </Td>
        </>
      );
    }
    return (
        <>
            <Td><Input value={data.name} name="name" onChange={onChange} placeholder="Full name"/></Td>
            <Td><Input value={data.email} name="email" onChange={onChange} placeholder="E-mail address"/></Td>
            <Td><Input value={data.phoneNumber} name="phoneNumber" onChange={onChange} placeholder="Phone number"/></Td>
            <Td><CancelButton onClick={onCancel}>Cancel</CancelButton></Td>
            <Td><SaveButton onClick={() => onSave(index)}>Save</SaveButton></Td>
        </>

    )
  };

  return <TableDataRow>{renderContent()}</TableDataRow>;
}

TableRow.propTypes = {};

export default TableRow;
