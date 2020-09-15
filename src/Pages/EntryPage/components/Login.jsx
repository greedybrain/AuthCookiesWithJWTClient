import React, { useState } from 'react'
import { loginUserThunk } from '../../../Store/middleware/authUserMiddleware'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const dispatch = useDispatch()
        const state = useSelector(state => ({
                emailError: state.emailError,
                passwordError: state.passwordError
        }))

        const handleChange = event => {
                if (event.target.name === 'email') {
                        setEmail(event.target.value)
                } else {
                        setPassword(event.target.value)
                }
        }

        const handleSubmit = event => {
                dispatch(loginUserThunk(email, password))
                event.preventDefault()
        }

        return (
                <form onSubmit={handleSubmit}>
                        <div className="email">
                                <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleChange}
                                />
                                <div className="email_error">
                                        { state.emailError ?  <p style={{ color: 'red' }}>{state.emailError}</p> : null }
                                </div>
                        </div>
                        <div className="password">
                                <input 
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handleChange}
                                />
                                <div className="password_error">
                                        { state.passwordError ? <p style={{ color: 'red' }}>{state.passwordError}</p> : null }
                                </div>
                        </div>
                        <div className="submit_btn">
                                <button>Login</button>
                        </div>
                </form>
        )
}

export default Login
