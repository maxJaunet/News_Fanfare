import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageLibrary from '../ImageLibrary';
import Tooltip from '@mui/material/Tooltip';
import { Container, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup } from '@mui/material';
import Button from '@mui/material/Button';
import UserProfile from '../Users/UserProfile';
import Events from '../Events/Events';
// import UserTable from '../Users/UserTable';
import MembersTable from '../Admin/MembersTable/MembersTable';

const Dashboard = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [descValue, setDescValue] = useState('');
  const [imageList, setImageList] = useState([]);
  const [visibilityAccess, setVisibilityAccess] = useState("public");

useEffect(() => {
    axios.get('http://localhost:5000/images')
        .then((allImages) => {
            setImageList(allImages.data);
        })
      }, []);

useEffect(() => {
  axios.get('http://localhost:5000/events')
  .then((allEvents) => {
      setEventList(allEvents.data);
  })
}, []); 

useEffect(() => {
  axios.get('http://localhost:5000/users')
  .then((allUsers) => {
      setUserList(allUsers.data);
  })
}, []); 

const [eventList, setEventList] = useState([]);
const [userList, setUserList] = useState([]);

      const currentUser = {
        fName: 'Test',
        lName: 'User',
        role: 'administrateur',
        password: 'fakepassword',
        email: 'testemail@email.com',
        phoneNumber: {
            number: '062255447788992',
            default: 'Non spécifié'
        },
        instrument: ['guitar', 'violin'],
        avatar: 'https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png',
        section: {
            type: 'cuivres',
            default: 'Non spécifié'
        },    
        profileImage: "https://images.unsplash.com/photo-1610622866955-5a9b32b850fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
      }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imgFile', selectedFile);
    formData.append('desc', descValue);    
    formData.append('isPublic', visibilityAccess) 
    .then(axios.post('http://localhost:5000/images/upload', formData))
  }

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleChange = (e) => {
    setDescValue(e.target.value);
  }

  return (
      <div>
        <div>
          <h1>Tableau de bord</h1>
        </div>
        <Container>
      
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper sx={{padding: '1rem 0 0 0'}}>
                <h4 style={{marginTop: 0}}>Votre profil</h4>
                <UserProfile user={currentUser} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper sx={{padding: '1rem 0 0 0'}}>
                <h4 style={{marginTop: 0}}>Membres</h4>
                {/* <UserTable userList={userList} /> */}
                <MembersTable members={userList} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Events cardTitle="Evénements à venir" events={eventList} />
            </Grid>
          </Grid> 

          <Grid container sx={{marginTop: '2rem'}} spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <Paper sx={{padding: '0.5rem 1rem'}}>
                <h4 style={{marginTop: 0}}>Ajouter une image</h4>
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
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Paper sx={{padding: '1rem'}}>
                <h4 style={{marginTop: 0}}>Bibliothèque d'images</h4>
                <ImageLibrary imageList={imageList} />
              </Paper>
            </Grid>
          </Grid>  
        
      </Container>
      
 
    </div>   
  )
}

export default Dashboard;