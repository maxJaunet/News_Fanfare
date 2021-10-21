import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Events from '../Events/Events';
import NewsDisplay from '../News/NewsDisplay';
import { mainTheme } from '../Templates/themes';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    
    useEffect(() => {
        axios.get('http://localhost:5000/events')
        .then((allEvents) => {
            setEventList(allEvents.data);
        })
      }, []); 
      const [eventList, setEventList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/articles')
        .then((allArticles) => {
            setArticleList(allArticles.data);
        })
      }, []); 
      const [articleList, setArticleList] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/images')
    //     .then((allImages) => {
    //         setImageList(allImages.data);
    //     })
    //   }, []); 
    //   const [imageList, setImageList] = useState([]);

    const musicalEvents = eventList.filter(item => item.eventType === "musique");
    const associationEvents = eventList.filter(item => item.eventType !== "musique");

    const {primaryColor, secondaryColor, ternaryColor, primaryText, secondaryText, lightText} = mainTheme;
    
    
    return (
      <Container maxWidth="lg" sx={{marginTop: '4rem'}}>
        <Grid container spacing={{xs: 4}}>
            <Grid item xs={12} sm={8}>
                <Paper sx={{padding: '1rem', paddingTop: 0.5, backgroundColor: secondaryColor}}>
                <h4 style={{color: primaryText}}>Evénements à venir</h4>
                    <Grid container spacing={{xs: 4}}>
                        <Grid item xs={12} sm={6}>
                            <Events cardTitle="Représentations" events={musicalEvents} bg={secondaryColor}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Events cardTitle="Association" events={associationEvents} bg={secondaryColor}/>
                        </Grid>
                    </Grid>  
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper sx={{padding: '1rem', paddingTop: 0.5, border: `3px solid ${primaryColor}`}}>
                    <Box>
                        <h4>Les news de la New's</h4>
                        <NewsDisplay articles={articleList} subText={lightText} />
                    </Box>                    
                </Paper>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
                <Paper>
                    <Box>
                        <h4>Gallerie photos</h4>
                    </Box>
                    <Gallery  />       
                    {/* images={imageList}            */}
                </Paper>
            </Grid>
        </Grid>
      </Container>
  )
}

export default Home;