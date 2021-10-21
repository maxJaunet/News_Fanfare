import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';
import './styles.css';

const ActionButtons = (props) => {
    

    const actions = [
        { 
            icon: <DeleteIcon fontSize="small" />,
            name: 'Supprimer',
            color: props.targetComponent==="image" ? 'white' : '#bd3a3a'
        },
        { 
            icon: <EditIcon fontSize="small" />,
            name: 'Modifier',
            color: props.targetComponent==="image" ? 'white' : '#59bd3a' 
        },
        { 
            icon: <RemoveRedEyeOutlinedIcon fontSize="small" />,
            name: props.targetComponent==="image" ? 'Voir profil' : 'Voir',
            color: props.targetComponent==="image" ? 'white' : '#3a6fbd' 
        }
    ];
    
  
      if(props.alignment === 'horizontal') {
          return(
            <Grid container>
                {actions.map((action, index) => (
                    <Grid item key={index} >
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
            <Grid container style={{flexDirection: "column", alignItems: 'end', display: props.hidden && 'none', position: 'absolute'}} spacing={0}>
                {actions.map((action, index) => (
                    <Grid item key={index}>
                    <Tooltip title={action.name} key={index} placement="left">
                        <IconButton className="tooltipIcon" style={{color: action.color, fontSize: '2px'}} size="small">
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