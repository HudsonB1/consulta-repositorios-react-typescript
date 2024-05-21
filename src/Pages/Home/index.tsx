import { ChangeEvent, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import axios from 'axios';

//interfaces
import IUser from '@/interface/User';

//css
import './Home.css';

//components
import User from '@/Components/User';

export default function Home() {
   const [user, setUser] = useState<String>();
   const [userGitHub, setUserGitHub] = useState<IUser>();

   async function getUserRepos() {
      try {
         const response = await axios.get(`https://api.github.com/users/${user}`);
         const newUserGitHub = response.data;
         setUserGitHub(newUserGitHub);
      } catch (error) {
         console.error("Erro ao buscar os repositórios " + error);
      }
   }

   function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setUser(event.target.value)
   }

   // https://api.github.com/users/matheussss1


   return (
      <Stack className='input-user' spacing={2} >
         <TextField
            fullWidth
            onChange={handleChange}
            label="Usuário"
            id="fullWidth"
            InputLabelProps={{
               sx: {
                  color: '#f2f2f2', // Cor do label quando não está em foco
                  '&.Mui-focused': {
                     color: '#f2f2f2', // Cor do label quando está em foco
                  },
               },
            }}
            sx={{
               '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                     borderColor: '#f2f2f2', // Cor da borda padrão
                  },
                  '&:hover fieldset': {
                     borderColor: '#f2f2f2', // Cor da borda quando o campo é focado
                  },
                  '&.Mui-focused fieldset': {
                     borderColor: '#f2f2f2', // Cor da borda quando o campo está em foco
                  },
               },
               '& .MuiInputLabel-root': {
                  color: '#f2f2f2', // Cor do label quando o campo está em foco ou preenchido
               },
               '& .MuiInputBase-input': {
                  color: '#f2f2f2', // Cor do texto dentro do input
               }
            }}
         />
         <Button variant="contained" size="small"
            onClick={getUserRepos}
            sx={{
               backgroundColor: 'secondary.dark',
               '&:hover': {
                  backgroundColor: 'secondary.dark',
               },
            }}
         > Pesquisar </Button>
         {
            userGitHub ?
               <User
                  avatar_url={userGitHub.avatar_url}
                  bio={userGitHub.bio}
                  followers={userGitHub.followers}
                  following={userGitHub.following}
                  location={userGitHub.location}
                  login={userGitHub.login}
                  name={userGitHub.name}
               /> : null
         }

      </Stack>
   )
}