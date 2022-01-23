import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';
import axios from 'axios';

const ActionButtons = ({targetComponent, hideStatus, alignment, targetID, onOpenEditScreen}) => {

    const [imageFile, setImageFile] = useState({});
    
    const getObject = (objectID, targetType) => {
        console.log(objectID);
        objectID && axios.get(`http://localhost:5000/${targetType}/${objectID}`)
        .then((result) => {
            setImageFile(result.data)
        })
    }

    const actions = [
        { 
            icon: <DeleteIcon fontSize="small" />,
            name: 'Supprimer',
            color:'#bd3a3a',
            clickHandler: () => {
                axios.delete(`http://localhost:5000/${targetComponent}/${targetID}`)
            }
        },
        { 
            icon: <EditIcon fontSize="small" />,
            name: 'Modifier',
            color:'#59bd3a' ,
            clickHandler: (objID) => {
                getObject(objID);
                onOpenEditScreen(imageFile);
            }
        },
        { 
            icon: <RemoveRedEyeOutlinedIcon fontSize="small" />,
            name: targetComponent==="image" ? 'Voir profil' : 'Voir',
            color:'#3a6fbd',
            clickHandler: () => {
                axios.get(`http://localhost:5000/${targetComponent}/${targetID}`)
            }
        }
    ];
    
  
      if(alignment === 'horizontal') {
          return(
            <Grid container justifyContent="center">
                {actions.map((action, index) => (
                    <Grid item key={Math.random()}>
                        <Tooltip title={action.name}>
                            <IconButton style={{color: action.color}} onClick={() => action.clickHandler(targetID, targetComponent)}>
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
                        <IconButton className="tooltipIcon" style={{color: action.color}} onClick={() => action.clickHandler(targetID, targetComponent)}>
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