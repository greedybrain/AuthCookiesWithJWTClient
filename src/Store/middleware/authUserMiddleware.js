import axios from 'axios'
import { helper } from '../../Utils/helper'
import { loginUser, catchFailedLoginErrors, autoLoginUser, logoutUser } from '../reducers/authUserReducer'

const { baseUrl, login, loggedIn, logout } = helper.myEndpoints

export const autoLoginUserThunk = () => {
        return async (dispatch, getState) => {
                try {
                        const response = await axios(
                                `${baseUrl}${loggedIn}`,
                                { withCredentials: true }
                        )
                        if (response.data.logged_in && getState().loggedInStatus === false) {
                                dispatch(autoLoginUser(response.data.user.data, response.data.logged_in))
                        } else if (!response.data.logged_in && getState().loggedInStatus === true) {
                                dispatch(autoLoginUser({}, response.data.logged_in))
                        }
                } catch(error) {
                        console.log(error)
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
                                window.location = '/'
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

export const logoutUserThunk = () => {
        return async (dispatch, getState) => {
                try {
                        const response = await axios.delete(
                                `${baseUrl}${logout}`,
                                { withCredentials: true }
                        )
                        debugger
                        dispatch(logoutUser({}, response.data.logged_in))
                        window.location = '/login'
                } catch(error) {
                        console.log(error)
                }
        }
}
