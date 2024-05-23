import axios from 'axios';
import { ChangeEvent, useState } from 'react';

import { Button, Stack, TextField, Box, Modal, Typography, IconButton } from '@mui/material';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import IUser from '@/interface/User';

import User from '@/Components/User';

export default function Home() {
   const [user, setUser] = useState<String>();
   const [userGitHub, setUserGitHub] = useState<IUser>();

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   async function getUserRepos() {
      try {
         const response = await axios.get(`https://api.github.com/users/${user}`);
         const newUserGitHub = response.data;
         setUserGitHub(newUserGitHub);
      } catch (error) {
         handleOpen();
         console.error("Erro ao buscar o usuário :" + error);
      }
   }

   function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setUser(event.target.value)
   }


   function BasicModal() {

      return (
         <>
            <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box display={'flex'} flexDirection={'column'} sx={{
                  position: 'absolute' as 'absolute',
                  top: '25%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: '#090c10',
                  border: '1px solid #f2f2f2',
                  borderRadius: '4px',
                  boxShadow: 24,
                  p: 4,
                  paddingBottom: 3,
                  paddingTop: 2,
               }}>
                  <Stack direction="row" alignItems="center" justifyContent={'end'}>
                     <IconButton aria-label="delete" size="small" sx={{
                        color: 'white',
                        '&:hover': {
                           backgroundColor: '#212121',
                        },
                     }} onClick={handleClose}>
                        <CloseOutlinedIcon />
                     </IconButton>
                  </Stack>
                  <Typography textAlign={'center'} variant="h5">
                     Usuário inválido!
                  </Typography>
                  <Typography textAlign={'center'} sx={{ margin: '10px' }}>
                     Insira um novo usuário valido
                  </Typography>
               </Box>
            </Modal>
         </>
      );
   }


   return (
      <Stack className='input-user' spacing={2} sx={{ margin: '100px auto', maxWidth: '400px' }}>
         <BasicModal />
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