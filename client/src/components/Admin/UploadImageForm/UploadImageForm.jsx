import { Button,
  FormControl,
  FormControlLabel, 
  Grid, 
  Paper, 
  Radio, 
  RadioGroup, 
  Tooltip 
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import './UploadingImageForm.css';

const UploadImageForm = ({initialData}) => {
  // initialData && console.log(initialData);
  const [selectedFile, setSelectedFile] = useState(null);
  const [descValue, setDescValue] = useState('');
  const [visibilityAccess, setVisibilityAccess] = useState('public');
  const [imageLoaded, setImageLoaded] = useState({
    success: null,
    className: null,
    text: null
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    try {
      formData.append('imgFile', selectedFile);
      formData.append('desc', descValue);    
      formData.append('isPublic', visibilityAccess) 
      axios.post('http://localhost:5000/images/upload', formData)
      .then(setImageLoaded({
        success: true,
        className: 'successfullyLoadedImage',
        text: 'image chargée avec succès'
      }));
    } catch (error) {
      console.log(error);
      setImageLoaded({
        success: false,
        className: 'failureLoadedImage',
        text: 'un problème est survenu'
      })
    }
    
    setSelectedFile(null);
    setDescValue('');
    setVisibilityAccess("public");
    setTimeout(() => {
      setImageLoaded(null)}, 5000)
  }

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleChange = (e) => {
    setDescValue(e.target.value);
  }

   return (
    <div>
      <form className="UploadImageForm" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <input type="file" onChange={handleFileSelect} filename="imgFile" required /> 
        <input type="text" id="desc" name="desc" onChange={handleChange} value={initialData ? initialData.desc : descValue} placeholder="Ajouter une description"/>       
        <Paper sx={{margin: '1rem 0'}}>
          <h4 style={{fontSize: '0.8rem'}}>Visibilité</h4>
          <Grid container spacing={3}>    
            <FormControl sx={{paddingLeft: '2rem', paddingTop: '1rem'}} component="fieldset">
              <RadioGroup
                onChange={(e) => setVisibilityAccess(e.target.value)}
                aria-label="visibility"
                defaultValue={initialData ? initialData.visibilityAccess : "public"}
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
        <Button variant="contained" color="success" type="submit">{initialData ? "Modifier" : "Ajouter"}</Button>
      </form>
      {imageLoaded && <div className={imageLoaded.className}><p>{imageLoaded.text}</p></div>}
    </div>
  )
};
export default UploadImageForm;