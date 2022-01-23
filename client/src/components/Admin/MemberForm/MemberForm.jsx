import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const MemberForm = ({initialData}) => {
  const [inputFields, setInputFields] = useState({
    lName: '',
    fName: '',
    avatar: ''
  });

  const handleSubmit = (e) => {
    initialData ? axios.patch(`http://localhost:5000/users/${initialData._id}`, e.target.value) 
      : axios.post('http://localhost:5000/users');
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputFields(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }
   return (
     <div>
      <form method="POST" onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <TextField size="small" type="text" id="lName" name="lName" onChange={handleChange} value={initialData ? initialData.lName : inputFields.lName} placeholder="Nom"/>       
            <TextField size="small" type="text" id="email" name="email" onChange={handleChange} value={initialData ? initialData.lName : inputFields.email} placeholder="Email"/>       
          </Grid>
          <Grid item xs={6}>
            <TextField size="small" type="text" id="fName" name="fName" onChange={handleChange} value={initialData ? initialData.lName : inputFields.fName} placeholder="Prénom"/>       
            <Button variant="contained" color="success" type="submit">{initialData ? "Modifier" : "Ajouter"}</Button>
          </Grid>
        </Grid>
        
      </form>
    </div>
  )
};
export default MemberForm;