import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'



export default function Router(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/portfolio' element={<Portfolio/>}/>
        </Routes>
    )
}
