import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import './MemberForm.css';

const MemberForm = ({initialData}) => {
  const [inputFields, setInputFields] = useState({
    lName: '',
    fName: '',
    email: '',
    password: '',
    type: 'users'
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    (initialData && isFormValid) && axios.patch(`http://localhost:5000/users/${initialData._id}`, inputFields);
    (!initialData && isFormValid) && axios.post('http://localhost:5000/users', inputFields);
    setIsFormValid(false);
    setInputFields({
      lName: '',
      fName: '',
      email: '',
      password: '',
      type: 'users'
    });
    setIsFormSent(true);
    setTimeout(() => setIsFormSent(false), 4000);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputFields(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
    Object.values(inputFields).every(item => item.length > 0) && setIsFormValid(true);
  }
   return (
    <form className="MemberForm" method="POST" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField 
            className="formField" 
            size="small" type="text" 
            id="lName" 
            name="lName" 
            onChange={handleChange} 
            value={initialData ? initialData.lName : inputFields.lName} 
            placeholder="Nom"
          />
          <TextField 
            className="formField" 
            size="small" type="text" 
            id="fName" 
            name="fName" 
            onChange={handleChange} 
            value={initialData ? initialData.lName : inputFields.fName} 
            placeholder="Prénom"
          />
          {
            !initialData && 
          (<>
          <TextField 
            className="formField" 
            size="small" type="text" 
            id="email" 
            name="email" 
            onChange={handleChange} 
            value={initialData ? initialData.email : inputFields.email} 
            placeholder="Email"
          />       
          <TextField 
            className="formField" 
            size="small" 
            type="password" 
            id="password" 
            name="password" 
            onChange={handleChange} 
            value={initialData ? initialData.lName : inputFields.password} 
            placeholder="Mot de passe temporaire"
          />
          </>)
          }       
          
          <Button disabled={!isFormValid} className="formField" sx={{marginTop: '1rem'}} variant="contained" color="success" type="submit">{initialData ? "Modifier" : "Ajouter"}</Button>        
          {isFormSent ? <p style={{color: 'green'}}>Membre ajouté avec succès!</p> :
          <p><em>Un email sera automatiquement envoyé au membre</em></p>
          }
        </Grid>
      </Grid>
    </form>
  )
};
export default MemberForm;