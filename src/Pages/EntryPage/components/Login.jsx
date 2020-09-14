import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleChange = event => {
                if (event.target.name === 'email') {
                        setEmail(event.target.value)
                } else {
                        setPassword(event.target.value)
                }
        }

        const handleSubmit = event => {
                handleLogin(email, password)
                
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
        )
}

export default Login
