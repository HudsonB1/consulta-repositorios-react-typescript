import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import './App.css'

export default function App() {
   const [user, setUser] = useState<String | any>();
   const [nameReps, setNameReps] = useState<any[]>([]);



   async function getUserRepos() {
      try {
         const repos = [];
         const response = await axios.get(`https://api.github.com/users/${user}/repos`);
         if (typeof response === 'object') {
            for (let i = 0; i < response.data.length; i++) {
               repos.push(response.data[i].name);
            }
         }
         setNameReps(repos);
      } catch (error) {
         console.error("Erro ao buscar os repositórios " + error);
      }
   }

   // https://api.github.com/users/matheussss1


   return (
      <>
         <div className='input-user'>
            <input type="text" name='user' onChange={(event: ChangeEvent<HTMLInputElement>) => setUser(event.target.value)} placeholder='Usuário' />
            <button onClick={getUserRepos}>pesquisar</button>
         </div>
         {nameReps.map(nameRep => {
            return (
               <h1>{nameRep}</h1>

            );
         })
         }
      </>
   )
}