import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Link } from "react-router-dom";

interface Props {
   avatar_url: string,
   login: string,
   name: string,
   bio: string,
   followers: number,
   following: number,
   location: string
}


export default function User({ avatar_url, login, name, bio, followers, following, location }: Props) {

   return (
      <Stack display={'flex'} margin={'0 auto'} spacing={2} alignItems='center'>
         <Avatar
            alt="Avatar GitHub"
            src={`${avatar_url}`}
            sx={{ width: 256, height: 256, border: '2px solid #f2f2f2' }}
         />
         <Button variant="outlined" size="small" color="primary" href={`https://github.com/${login}`} target="_blank"> <GitHubIcon fontSize='small' sx={{marginRight: '5px' }}/> GitHub </Button>
         <Typography variant="h1" fontSize={35} fontWeight={'bold'}>{name}</Typography>
         <Typography variant="h2" fontSize={25}>{login}</Typography>
         {
            bio !== null ? <Typography variant="h3" fontSize={20} textAlign={'center'}>{bio}</Typography> : null
         }
         <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <PeopleAltOutlinedIcon fontSize="small" />
            <Typography marginLeft={1}>
               <strong>{followers}</strong>{" "}
               <a href={`https://github.com/${login}?tab=followers`} target="_blank" style={{ textDecoration: 'none', color: '#f2f2f2' }}>
                  followers
               </a>{" "}
               ·{" "}
               <strong>{following}</strong>{" "}
               <a href={`https://github.com/${login}?tab=following`} target="_blank" style={{ textDecoration: 'none', color: '#f2f2f2' }}>
                  following
               </a>
            </Typography>
         </Box>
         {
            location !== null ?
               <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                  <LocationOnOutlinedIcon fontSize="small" /> <Typography fontSize={15}> {location} </Typography>
               </Box >
               : null
         }
         <Link to={`/repositories/${login}`}>
            <Button variant="contained" size="small" color="success"> Repositórios </Button>
         </Link>
      </Stack>
   )
}