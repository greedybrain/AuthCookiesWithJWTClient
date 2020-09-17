import React, { useState } from 'react'
import { loginUserThunk } from '../../../Store/middleware/authUserMiddleware'
import { useDispatch, useSelector } from 'react-redux'

const Login = ({ history }) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const dispatch = useDispatch()

        const state = useSelector(state => ({
                error: state.error,
                loggedIn: state.loggedIn
        }))

        const handleChange = event => {
                if (event.target.name === 'email') {
                        setEmail(event.target.value)
                } else {
                        setPassword(event.target.value)
                }
        }

        const handleSubmit = event => {
                event.preventDefault()
                dispatch(loginUserThunk(email, password))
                return state.loggedIn ? history.replace('/') : null
        }

        const showErrorMessage = () => {
                if (state.error) {
                        return (
                                <div className="error animate__animated animate__slideInDown animate__faster">
                                        <p style={{ color: 'red', fontWeight: 'bolder' }}>
                                                { state.error }
                                        </p>
                                </div>
                        )
                } else {
                        return null
                }
        }

        return (
                <>    
                        {
                                !state.loggedIn 
                                ?
                                <form onSubmit={handleSubmit}>
                                        { showErrorMessage() }
                                        <div className="email">
                                                <input 
                                                        type="email" 
                                                        name="email" 
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="password">
                                                <input 
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="submit_btn">
                                                <button>Login</button>
                                        </div>
                                </form>
                                :
                                (null)
                        }
                </>
        )
}

// const mapStateToProps = state => ({
//         loggedIn: state.loggedIn,
//         error: state.error
// })

export default Login
