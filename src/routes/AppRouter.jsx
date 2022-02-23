import React from 'react'
import { lazy, Suspense } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'



import Navbar from '../Components/Navbar'
//import CharacterScreen from '../pages/CharacterScreen'
//import MenScreen from '../pages/MenScreen'
//import SearchScreen from '../pages/SearchScreen'
//import WomenScreen from '../pages/WomenScreen'

//const Navbar = lazy(()=> import('../Components/Navbar'))
const CharacterScreen = lazy(()=> import('../pages/CharacterScreen'))
const MenScreen = lazy(()=> import('../pages/MenScreen'))
const SearchScreen = lazy(()=> import('../pages/SearchScreen'))
const WomenScreen = lazy(()=> import('../pages/WomenScreen'))
const AppRouter = () => {
    return (
        <>

    <Navbar />
    <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
        <Switch>
            <Route exact path="/men" component={MenScreen}/>
            <Route exact path="/women" component={WomenScreen}/>
            <Route exact path="/search" component={SearchScreen}/>

            <Route exact path="/character/:id" component={CharacterScreen}/>
            
            <Redirect to="/men"/>
        </Switch>
    </Suspense>
        </>
    )
}

export default AppRouter