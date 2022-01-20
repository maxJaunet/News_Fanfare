import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';

const ActionButtons = ({targetComponent, hideStatus, alignment}) => {
    
    const actions = [
        { 
            icon: <DeleteIcon fontSize="small" />,
            name: 'Supprimer',
            color:'#bd3a3a'
        },
        { 
            icon: <EditIcon fontSize="small" />,
            name: 'Modifier',
            color:'#59bd3a' 
        },
        { 
            icon: <RemoveRedEyeOutlinedIcon fontSize="small" />,
            name: targetComponent==="image" ? 'Voir profil' : 'Voir',
            color:'#3a6fbd' 
        }
    ];
    
  
      if(alignment === 'horizontal') {
          return(
            <Grid container justifyContent="center">
                {actions.map((action, index) => (
                    <Grid item key={Math.random()} >
                        <Tooltip title={action.name}>
                            <IconButton style={{color: action.color}}>
                                {action.icon}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
          )
      }
      else {
          return (
            <Grid container style={{flexDirection: "column", alignItems: 'end', display: hideStatus && 'none', position: 'absolute'}} spacing={0}>
                {actions.map((action) => (
                    <Grid item key={Math.random()}>
                    <Tooltip title={action.name} placement="left">
                        <IconButton className="tooltipIcon" style={{color: action.color}}>
                            {action.icon}
                        </IconButton>
                    </Tooltip>
                    </Grid>
                ))}
        </Grid>
          )
      }
};

export default ActionButtons;