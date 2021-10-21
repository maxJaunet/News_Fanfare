import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";

const NewsDisplay = (props) => {
    const articles = props.articles;

  return (
    <Box sx={{paddingTop: 0, padingLeft: '1rem', maxHeight: '29.5rem', overflow: 'scroll'}}>
      {articles.map((article, index) => {
        return(
            <Paper key={index} style={{paddingBottom: '2rem', padding: '1rem', marginTop: '1rem', width: '80%'}}>
                <h4 style={{paddingBottom: 0, marginBottom: 0}}>{article.title}</h4>
                <Grid container justifyContent="space-between" alignItems="center" paddingLeft={3}>
                <Grid item>
                    <p style={{color: props.subText}}>auteur: {article.author}</p>
                </Grid>
                <Grid item>
                    <img src={article.imagePath} alt={article.imageAlt} style={{height: '30px', width: '30px', borderRadius: 25}}/>
                </Grid>
                </Grid>
                <hr style={{opacity: 0.5, width: '75%'}}/>
                <p style={{color: "#5C5C5C"}}>{article.content}</p>
                <p style={{color: props.subText}}>{article.date}</p>
                <Button href="/articles">En savoir plus</Button>
               
            </Paper>
            
        )
      })}
      </Box>
  )
}

export default NewsDisplay;