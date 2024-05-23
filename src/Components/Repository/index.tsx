import { Stack, Typography } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';

interface Props {
   nameRepository: string,
   urlRepository: string,
}

export default function Repository({ nameRepository, urlRepository }: Props) {
   return (
      <a href={urlRepository} target="_blank" style={{ textDecoration: 'none', color: '#FFF' }}>
         <Stack
            sx={{
               border: '1px solid #f2f2f2',
               borderRadius: '5px',
               width: '750px',
               textAlign: 'center',
               flexDirection: 'row',
               justifyContent: 'stretch',
               padding: '8px',
               transition: '400ms',
               '&:hover': {
                  backgroundColor: '#272b33',
                  cursor: 'pointer'
               }
            }}>
            <FolderIcon
               sx={{
                  margin: 'auto 15px',
                  color: '#8D8D8D',
               }} />
            <Typography fontSize={18}>{nameRepository}</Typography>
         </Stack>
      </a>
   )
}