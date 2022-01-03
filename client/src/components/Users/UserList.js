import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import ActionButtons from './ActionButtons';
import { Tooltip } from '@material-ui/core';
import { TableBody, TableRow } from '@mui/material';


const UserList = ({filteredList}) => {

    const usersSortedByLastName = filteredList.sort((a, b) => a.lName.localeCompare(b.lName))
    
    return (
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
    <TableContainer sx={{ maxHeight: 428 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <td align="center">Nom</td>
            <td align="center" >Prénom</td>
            <td align="center" >Email</td>
            <td align="center" >Role</td>
            <td align="center">Action</td>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {
            usersSortedByLastName.map((user) => (
            <tr
              key={user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center"><Tooltip title={`${user.lName} ${user.fName}`}><span>{user.lName.length > 9 ? (user.lName.slice(0, 9) + '...') : user.lName}</span></Tooltip></TableCell>
              <TableCell align="center"><Tooltip title={user.fName}><span>{user.fName.length > 9 ? (user.fName.slice(0, 9) + '...') : user.fName}</span></Tooltip></TableCell>
              <TableCell align="center"><Tooltip title={user.email}><a href={`/${user._id}/email`}>{user.email.length > 7 ? (user.email.slice(0, 7) + '...') : user.email}</a></Tooltip></TableCell>
              <TableCell align="center">{user.role}</TableCell>
              <TableCell align="center"><ActionButtons /></TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Paper>
  );
}

export default UserList;