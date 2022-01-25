import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import Card from '../Card/Card';

const Dashboard = () => {

  const [imageList, setImageList] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [targetedData, setTargetedData] = useState(null);
  
  useEffect(() => {
      axios.get('http://localhost:5000/images')
          .then((allImages) => {
              setImageList(allImages.data);
          })
        }, [imageList]);

  useEffect(() => {
    axios.get('http://localhost:5000/events')
    .then((allEvents) => {
        setEventList(allEvents.data);
    })
  }, []); 

  useEffect(() => {
    axios.get('http://localhost:5000/users')
    .then((allUsers) => {
      const membersSortedByLastName = allUsers.data.sort((a, b) =>
        a.lName && a.lName.localeCompare(b.lName)
      );
        setUserList(membersSortedByLastName);
    })
  }, [userList]); 

  const onTargetedDataSelected = (data) => {
      data && setTargetedData(data);
      console.log(data)
  };

  // test user to be changed to dynamic current user
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

  return (
      <div>
        <div>
          <h1>Tableau de bord</h1>
        </div>
        <Container>
      
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Card contentType="userProfile" loadedData={currentUser} cardTitle="Votre profil" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card contentType="membersTable" onTargetedDataSelected={onTargetedDataSelected} loadedData={userList} cardTitle="Membres" />
              <Card
                contentType="addMemberForm"
                cardTitle={(targetedData && targetedData.type === 'users') ? "Modifier Membre" : "Ajouter un membre"} 
                initialData={(targetedData && targetedData.type === 'users') && targetedData} 
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card contentType="events" loadedData={eventList} cardTitle="Evènements à venir" />
            </Grid>
          </Grid> 

          <Grid container sx={{marginTop: '2rem'}} spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card contentType="uploadImageForm" onTargetedDataSelected={onTargetedDataSelected} cardTitle="Ajouter une image" />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card contentType="imageLibrary" cardTitle="Bibliothèque d'images" loadedData={imageList} />
            </Grid>
          </Grid>  
        
      </Container>
      
 
    </div>   
  )
}

export default Dashboard;