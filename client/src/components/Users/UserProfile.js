import { Container, Grid, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';




const UserProfile = (props) => {
    
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
  return (
      <Container>
        <Box
            component="img"
            sx={{
                height: 200,
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                borderRadius: '8px'
            }}
            src={props.user.profileImage}
        />
        <Grid container>
            <Grid item justifyContent="center">
                <Avatar
                sx={{
                     width: 56,
                     height: 56,
                     position: 'relative',
                     bottom: '2rem',
                     left: '1rem'
                    }}
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                />
            </Grid>
        </Grid>
        <Grid container>
           <Grid item>
            <h2>{`${props.user.fName} ${props.user.lName}`}</h2>
           </Grid>
        </Grid>
            <hr style={{opacity: 0.5, width: '75%'}}/>
        <Grid container>
           <Grid item>
            <h4>Instrument(s) :</h4>
                <Stack direction="row" spacing={1}>
                {props.user.instrument.map((instrument, index) => {
                    return (
                        <Chip key={index} label={instrument} onDelete={handleDelete} />
                    )
                })}
                    
                </Stack>
           </Grid>
        </Grid>
      </Container>
  )
}

export default UserProfile;