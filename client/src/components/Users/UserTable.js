import { useState } from 'react';
import { Tab } from '@mui/material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { Box } from '@mui/system';
import userRoles from '../../components/createUser/userRoles';
import { AppBar } from '@material-ui/core';

const UserTable = ({userList}) => {
  const [value, setValue] = useState('All');
  const [filteredList, setFilteredList] = useState(userList);
    
  const handleChange = (e, newValue) => {
    setValue(newValue);
    newValue === 'All' ? setFilteredList(userList) : setFilteredList(userList.filter(el => el.role === newValue));
  };
  return (
    <div>
      <h4 style={{marginTop: 0}}>Votre profil</h4>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <TabList onChange={handleChange} aria-label="tablist">
              <Tab label="Tous" value="All" onLoadStart={() => setFilteredList(userList)} />
              {userRoles.map((role, index) => {
              return <Tab label={role.roleName} value={role.roleName} key={index}/>
              })}
            </TabList>
          </Box>
          <TabPanel value="All" aria-labelledby='tabList'>
            <AppBar position="static">
              <UserTable users={filteredList} />
            </AppBar>
          </TabPanel>
          { userRoles.map((role, index) => <TabPanel value={role.roleName} key={index}>
          <UserTable users={filteredList} />
        </TabPanel>) }
      </TabContext>
    </div>
  )
};
export default UserTable;