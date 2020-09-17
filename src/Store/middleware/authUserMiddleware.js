import axios from 'axios'
import { helper } from '../../Utils/helper'
import { loginUser, catchFailedLoginErrors, checkUserLoggedInStatus, logoutUser } from '../reducers/authUserReducer'
import moment from 'moment'

const { baseUrl, login, loggedIn, logout } = helper.myEndpoints
const timeNow = Date.now()

const resetOnError = () => {
        setTimeout(() => {
                window.location = '/login'
        }, 2000);
}

export const checkUserLoggedInStatusThunk = () => {
        return async (dispatch, getState) => {
                try {
                        const response = await axios(
                                `${baseUrl}${loggedIn}`,
                                { withCredentials: true }
                        )
                        if (response.data.logged_in && getState().loggedIn === false) {
                                dispatch(checkUserLoggedInStatus(response.data.user.data, response.data.logged_in, timeNow))
                        } else if (!response.data.logged_in && getState().loggedIn === true) {
                                dispatch(checkUserLoggedInStatus({}, response.data.logged_in, timeNow))
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
                        if (email === '' || password === '') {
                                dispatch(catchFailedLoginErrors('Email or password blank'))
                                resetOnError()
                        } else {
                                if (response.data.logged_in) {
                                        dispatch(loginUser(response.data.user.data, timeNow))
                                } else {
                                        const errorMessage = response.data.error
                                        dispatch(catchFailedLoginErrors(errorMessage))
                                        resetOnError()
                                }
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
                        dispatch(logoutUser({}, response.data.logged_in))
                        window.location = '/login'
                } catch(error) {
                        console.log(error)
                }
        }
}

export const checkIfIdled = () => {
        return (dispatch, getState) => {
                if (getState().loggedIn) {
                        const currentTime = moment()
                        const diffInMinutes = currentTime.diff(getState().lastStatusCheck, 'seconds')
                        if (diffInMinutes > 30) {
                                dispatch(logoutUserThunk())
                                return;
                        } 
                } else {
                        return null
                }
        }
}