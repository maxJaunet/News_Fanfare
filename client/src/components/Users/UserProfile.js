import { Container, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import './UserProfile';




const UserProfile = ({user}) => {
    
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
  return (
      <Container sx={{paddingY: '1rem', maxHeight: '35rem', overflow: 'auto'}}>
        <Box
            component="img"
            sx={{
                height: 200,
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                borderRadius: '8px',
            }}
            src={user.profileImage}
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
            <h2>{`${user.fName} ${user.lName}`}</h2>
           </Grid>
        </Grid>
            <hr style={{opacity: 0.5, width: '75%'}}/>
        <Grid container>
           <Grid item>
            <h4>Instrument(s) :</h4>
                <Stack direction="row" spacing={1}>
                {user.instrument.map((instrument, index) => {
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