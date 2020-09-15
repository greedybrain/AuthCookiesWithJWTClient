import axios from 'axios'
import { helper } from '../../Utils/helper'
import { loginUser, checkLoggedInStatus, catchFailedLoginErrors } from '../reducers/authUserReducer'

const { baseUrl, login, loggedIn, logout } = helper.myEndpoints

export const checkLoginStatusThunk = () => {
        return async (dispatch, getState) => {
                try {
                        const response = await axios(
                                `${baseUrl}${loggedIn}`,
                                { withCredentials: true }
                        )
                        dispatch(checkLoggedInStatus(response.data.logged_in))
                } catch(error) {

                }
        }
}

export const loginUserThunk = (email, password) => {
        return async (dispatch, getState) => {
                try {
                        const response = await axios.post(
                                `${baseUrl}${login}`,
                                { email, password },
                                { withCredentials: true }
                        )
                        if (response.data.logged_in) {
                                dispatch(loginUser(response.data.user.data))
                        } else {
                                const emailError = response.data.email_error ? response.data.email_error[0] : ''
                                const passwordError = response.data.password_error? response.data.password_error[0] : ''
                                dispatch(catchFailedLoginErrors(emailError, passwordError))
                        }
                } catch(error) {
                        alert(error)
                }
        }
}

// const { baseUrl, loggedIn, login, logout } = helper.myEndpoints
// const handleLogin = async (email, password) => {
//   try {
//     const response = await axios.post(
//       `${baseUrl}${login}`,
//       { email, password },
//       { withCredentials: true }
//     )
//     setUserData(response.data.user.data)
//   } catch(e) {
//     console.log(e)
//   }
// }
