import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import MenScreen from '../pages/MenScreen'
import SearchScreen from '../pages/SearchScreen'
import WomenScreen from '../pages/WomenScreen'

const AppRouter = () => {
    return (
    <>
    <Navbar />
        <Switch>
            <Route exact path="/men" component={MenScreen}/>
            <Route exact path="/women" component={WomenScreen}/>
            <Route exact path="/search" component={SearchScreen}/>
        </Switch>
    </>
    )
}

export default AppRouter