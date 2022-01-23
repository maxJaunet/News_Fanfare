import { Button, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, Tooltip } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const UploadImageForm = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [descValue, setDescValue] = useState('');
  const [visibilityAccess, setVisibilityAccess] = useState("public")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imgFile', selectedFile);
    formData.append('desc', descValue);    
    formData.append('isPublic', visibilityAccess) 
    .then(axios.post('http://localhost:5000/images/upload', formData));
  }

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleChange = (e) => {
    setDescValue(e.target.value);
  }
  
   return (
    <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
      <input type="file" onChange={handleFileSelect} filename="imgFile" /> 
      <input type="text" id="desc" name="desc" onChange={handleChange} value={descValue} placeholder="Ajouter une description"/>       
      <Paper sx={{margin: '1rem 0'}}>
        <h4 style={{fontSize: '0.8rem'}}>Visibilité</h4>
        <Grid container spacing={3}>    
          <FormControl sx={{paddingLeft: '2rem', paddingTop: '1rem'}} component="fieldset">
            <RadioGroup
              onChange={(e) => setVisibilityAccess(e.target.value)}
              aria-label="visibility"
              defaultValue="public"
              name="visibilityAcess"
            >
              <Grid item>
                <Tooltip placement="top" title="le contenu sera visible par tous les visiteurs">
                  <FormControlLabel value="public" control={<Radio size="small" />} label="Public" />
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip placement="top" title="le contenu sera visible par vous uniquement">
                  <FormControlLabel value="private" control={<Radio size="small" />} label="Privé" />
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip placement="top" title="le contenu sera visible par les membres uniquement">
                  <FormControlLabel value="members" control={<Radio size="small" />} label="Membres" />
                </Tooltip>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
      <Button variant="contained" color="success" type="submit">Ajouter</Button>
    </form>
  )
};
export default UploadImageForm;