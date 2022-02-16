import React from 'react'
import { useHistory } from 'react-router-dom'

const LoginScreen = () => {

    const history = useHistory()

    const handelLogin = () => {
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