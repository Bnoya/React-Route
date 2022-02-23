import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes';

const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext);

    const history = useHistory()

    const handelLogin = () => {

        dispatch({type: authTypes.login})

        history.replace("/men")
        
    }


    return (
        <div className='container mt-5 text-center'>
            <img src='/assets/animate.gif' alt='animacion'/>
            <h1 className='my-3'>Login Screen</h1>
            <button onClick={handelLogin} className='btn btn-primary' >Login</button>
        </div>
    )
}

export default LoginScreen