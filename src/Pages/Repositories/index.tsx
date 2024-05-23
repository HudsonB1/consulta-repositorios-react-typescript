import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import { Button, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import Repository from '@/Components/Repository';

export default function Repositories() {
   const [repos, setRepos] = useState([])
   const { login } = useParams();

   useEffect(() => {
      async function getUserRepos() {
         try {
            const response = await axios.get(`https://api.github.com/users/${login}/repos`);
            const arr = response.data;
            setRepos(arr);
         } catch (error) {
            console.error("Erro ao buscar os repositórios " + error);
         }
      }
      getUserRepos();
   }, [])


   return (
      <Stack alignItems={'center'} display={'flex '} spacing={2} margin={'50px auto'}>
         <Button
            component={Link}
            to="/"
            startIcon={<KeyboardBackspaceIcon sx={{ marginLeft: '20px' }} />}
            sx={{
               justifyContent: 'flex-start',
               width: '100%',
               padding: 0,
               minWidth: 'auto',
               background: 'none',
               boxShadow: 'none',
               textTransform: 'none',
               color: 'inherit',
               '&:hover': {
                  background: 'none',
                  textDecoration: 'none'
               }
            }}
         >
            <Typography>Retornar</Typography>
         </Button>
         <Typography variant='h1' fontSize={30}>Repositórios</Typography>
         <Typography variant='h4' fontSize={18}>{repos.length} repositórios públicos</Typography>

         {
            repos ?
               repos.map((rep: any) => {
                  return (
                     <Repository nameRepository={rep.name} urlRepository={rep.html_url} />
                  )
               }) : null

         }
      </Stack>
   )
}