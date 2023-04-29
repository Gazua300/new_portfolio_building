import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Contacts from '../pages/Contacts'



export default function Router(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/portfolio' element={<Portfolio/>}/>
            <Route exact path='/contacts' element={<Contacts/>}/>
        </Routes>
    )
}
