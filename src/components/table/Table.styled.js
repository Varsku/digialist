import styled from 'styled-components';

export const TableContainer = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 0px 20px;
`;

export const TableBody = styled.table`
  width: 100%;
  border-collapse: collapse; 

`;

export const TableHead = styled.thead`
  height: 48px;
  text-align: left;
`;

export const Th = styled.th`
  color: #757575;
  font-size: 14px;
  line-height: 16px;
  ont-weight: 500;
  cursor: pointer;
`;

export const Td = styled.td`
  color: #505050;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  max-width: 280px;
  overflow: scroll;
`;

export const TableHeadRow = styled.tr`
padding: 0px 20px;
border-bottom: 1px solid #edf2f5;
`

export const TableDataRow = styled(TableHeadRow)`
border-bottom: 1px solid #edf2f5;
height: 72px;
`

export const CancelButton = styled.button`
font-size: 16px;
font-weight: bold;
width: 80px;
height: 40px;
color: #07f;
background-color: #edf2f5;
padding: 0;
border: none;
outline: none;
align-self: flex-end;
`

export const SaveButton = styled(CancelButton)`
background-color: #07f;
color: #ffffff;
`
