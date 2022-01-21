import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Avatar,
  Collapse,
  Grid,
  Tooltip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ActionButtons from '../../CoreUI/ActionButtons';
import './MembersTable.css';

const MembersTable = ({ members }) => {
  const [rowIndex, setRowIndex] = useState(0);
  const membersSortedByLastName = members.sort((a, b) =>
    a.lName.localeCompare(b.lName)
  );
  const expandingHandler = (e, index) => {
    setRowIndex(rowIndex === 0 ? index + 1 : 0);
  };
 

  return (
    <Paper
      sx={{
        width: '100%',
        maxHeight: 300,
        overflow: 'auto',
      }}
    >
      {
        membersSortedByLastName.map((member, index) => {
        return (
          <Grid
            container
            className="tableRow"
            key={member.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              borderBottom: '1px solid #dddddd',
              alignContent: 'center',
              padding: 0,
              textAlign: 'left',
            }}
          >
            <Grid item xs={1}>
              <div className="userAvatar">
                <Avatar
                  src={member.avatar}
                  alt={`${member.fName} ${member.lName}`}
                />
              </div>
            </Grid>
            <Grid item xs={7} onClick={(e) => expandingHandler(e, index)}>
              <div className="tableName">
                <p>
                  {member.lName} {member.fName}
                </p>
              </div>
            </Grid>

            <Collapse
              in={rowIndex === index + 1}
              timeout="auto"
              unmountOnExit
              sx={{
                width: '100%',
                paddingBottom: '5px'
              }}
            >
              <Grid
                container
                justifyContent="center"
                sx={{
                  backgroundColor: 'rgb(230, 230, 256)',
                  borderRadius: '3px',
                  padding: '0 2rem',
                }}
              >
                <Grid item xs={4}>
                  <Tooltip title="Réduire">
                    <ExpandMoreIcon
                      onClick={() => setRowIndex(0)}
                      className="expandIcon"
                      style={{
                        color: 'white',
                        fontSize: '2rem',
                        position: 'relative',
                        top: '0.5rem',
                        left: '2rem',
                        transform: 'rotate(180deg)',
                      }}
                    />
                  </Tooltip>
                </Grid>
                <ActionButtons alignment="horizontal" />
              </Grid>  
            </Collapse>
          </Grid>
        );
      })}
    </Paper>
  );
};

export default MembersTable;
