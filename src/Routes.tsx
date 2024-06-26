import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Home from '@/Pages/Home';
import Repositories from '@/Pages/Repositories';


export default function Routes() {
   return (
      <>
         <Router>
            <Switch>
               <Route element={<Home />} path='/' />
               <Route element={<Repositories />} path='/repositories/:login' />
            </Switch>
         </Router>
      </>
   )
}