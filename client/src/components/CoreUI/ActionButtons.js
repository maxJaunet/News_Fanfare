import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Box } from '@mui/system';

const ActionButtons = ({targetType, hideStatus, alignment, targetID, onSelectedTarget}) => {
    const [openDeleteBox, setOpenDeleteBox] = useState(false);
    const [currentTarget, setCurrentTarget] = useState(null)

    const getObject = async (objectID, objectType) => {
        console.log('objID : ' + objectID + ' ; objType : ' + objectType)
        objectID && axios.get(`http://localhost:5000/${objectType}/${objectID}`)
        .then((result) => {
            setCurrentTarget(result.data)
        })
    }

    const deleteText = `Êtes-vous sûr(e) de vouloir supprimer cet élément ?`;
    const deleteObject = (objID, objType) => {
        axios.delete(`http://localhost:5000/${objType}/${objID}`).then(() => {
            setOpenDeleteBox(false);
        })
    }

    const actions = [
        { 
            icon: <DeleteIcon fontSize="small" />,
            name: 'Supprimer',
            color:'#bd3a3a',
            clickHandler: (objId, objType) => {
                getObject(objId, objType)
                setOpenDeleteBox(true);
            }
        },
        {
            icon: <EditIcon fontSize="small" />,
            name: 'Modifier',
            color:'#59bd3a' ,
            clickHandler: (objID, objType) => {
                getObject(objID, objType)
                .then(() => onSelectedTarget(currentTarget))
            }
        },
        { 
            icon: <RemoveRedEyeOutlinedIcon fontSize="small" />,
            name: targetType==="image" ? 'Voir profil' : 'Voir',
            color:'#3a6fbd',
            clickHandler: (objType, objID) => {
                axios.get(`http://localhost:5000/${objType}/${objID}`)
            }
        }
    ];

    if(alignment === 'horizontal') {
        return(
        <div>
            <Grid container justifyContent="center">
                {actions.map((action, index) => (
                    <Grid item key={Math.random()}>
                        <Tooltip title={action.name}>
                            <IconButton style={{color: action.color}} onClick={() => action.clickHandler(targetID, targetType)}>
                                {action.icon}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
            {
                openDeleteBox && (
                <Box >
                    <h2>{deleteText}</h2>
                    {targetType === 'users' && <p>{currentTarget.fName} {currentTarget.lName}</p>}
                    {targetType === 'images' && <p>image : {currentTarget.file.fileName}</p>}
                    {targetType === 'events' && <p>évènement : {currentTarget.name}, date: {currentTarget.date}</p>}
                    {targetType === 'article' && <p>article : {currentTarget.name}, publié le : {currentTarget.date}</p>}
                    <Button onClick={() => setOpenDeleteBox(false)} />
                    <Button onClick={() => deleteObject(currentTarget.type, currentTarget._id)} />
                </Box>
                )
            }
      </div>
      )
    }
    else {
        return (
          <div>
            <Grid container style={{flexDirection: "column", alignItems: 'end', display: hideStatus && 'none', position: 'absolute'}} spacing={0}>
                {actions.map((action) => (
                    <Grid item key={Math.random()}>
                    <Tooltip title={action.name} placement="left">
                        <IconButton 
                            className="tooltipIcon" 
                            style={{color: action.color}} 
                            onClick={() => action.clickHandler(targetID, targetType)}
                        >
                            {action.icon}
                        </IconButton>
                    </Tooltip>
                    </Grid>
                ))}
            </Grid>
            {
                openDeleteBox && (
                    <Box >
                        <h2>{deleteText}</h2>
                        {targetType === 'users' && <p>{currentTarget.fName} {currentTarget.lName}</p>}
                        {targetType === 'images' && <p>image : {currentTarget.file.fileName}</p>}
                        {targetType === 'events' && <p>évènement : {currentTarget.name}, date: {currentTarget.date}</p>}                        {targetType === 'article' && <p>article : {currentTarget.name}, publié le : {currentTarget.date}</p>}
                        <Button onClick={() => deleteObject(currentTarget.type, currentTarget._id)} />
                    </Box>
                    )
                }
        </div> 
    )
    }
};

export default ActionButtons;