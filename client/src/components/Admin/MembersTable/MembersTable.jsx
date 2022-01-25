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

const MembersTable = ({ members, onUserSelected }) => {
  const [rowIndex, setRowIndex] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const expandingHandler = (e, index) => {
    setRowIndex(index);
    setIsSelected(prevValue => !prevValue);
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
        members.map((member, index) => {
        return (
          <Grid
            container
            className="tableRow"
            key={member._id ? member._id : (Math.random()*10)}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              borderBottom: '1px solid #dddddd',
              alignContent: 'center',
              textAlign: 'left',
              padding: '0 1rem'
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
            {
              (isSelected && rowIndex === index) &&
              (
                <Grid
                  className="collapse"
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
                        onClick={(e) => setIsSelected(prevValue => !prevValue)}
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
                  <ActionButtons onSelectedTarget={onUserSelected} targetID={member._id} targetType='users' alignment="horizontal" />
                </Grid> 
              )
            }
          </Grid>
        );
      })}
    </Paper>
  );
};

export default MembersTable;
