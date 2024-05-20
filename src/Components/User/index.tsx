import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

// material icons
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
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

export default function User({avatar_url, login, name, bio, followers, following, location}: Props) {
   return (
      <Stack display={'flex'} margin={'0 auto'} spacing={2} alignItems='center'>
         <Avatar
            alt="Avatar GitHub"
            src={`${avatar_url}`}
            sx={{ width: 256, height: 256, border: '2px solid #f2f2f2' }}
         /> {/* avatar_url */}
         <Button variant="outlined" size="small" color="primary" href={`https://github.com/${login}`} target="_blank"> Perfil </Button> {/* login */}
         <Typography variant="h1" fontSize={35} fontWeight={'bold'}>{name}</Typography> {/* name */}
         <Typography variant="h2" fontSize={25}>{login}</Typography> {/* login */}
         <Typography variant="h3" fontSize={20}>{bio}</Typography> {/* bio SE HOUVER*/}
         <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <PeopleAltOutlinedIcon fontSize="small" />
            <Typography marginLeft={1}>
               <strong>{followers} </strong> followers {/* followers */}· <strong>{following}</strong> following {/* following */}
            </Typography>
         </Box>
         <Box display={'flex'} flexDirection={'row'} alignItems={'center'}> {/* SE HOUVER */}
            <LocationOnOutlinedIcon fontSize="small" /> <Typography fontSize={15}> {location} </Typography>  {/* location */}
         </Box >
         <Link to='/repositories'>
            <Button variant="contained" size="small" color="success"> Repositórios </Button>
         </Link>
      </Stack>
   )
}