const initialState = {
        user: {},
        loggedInStatus: false,
        emailError: '',
        passwordError: ''
}

//! REDUCER
export default function authUserReducer(state = initialState, action) {
        switch(action.type) {
                case AUTO_LOGIN_USER:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedInStatus: action.payload.loggedInStatus,
                        }
                case LOGIN_USER:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedInStatus: true
                        }
                case CATCH_FAILED_LOGIN_ERRORS:
                        return {
                                ...state,
                                emailError: action.payload.emailError,
                                passwordError: action.payload.passwordError,
                                loggedInStatus: false,
                        }
                case LOGOUT_USER:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedInStatus: action.payload.loggedInStatus
                        }
                default:
                        return  state
        }
}       

//!TYPES
const AUTO_LOGIN_USER = "AUTO_LOGIN_USER"
const LOGIN_USER = "LOGIN_USER"
const CATCH_FAILED_LOGIN_ERRORS = "CATCH_FAILED_LOGIN_ERRORS"
const LOGOUT_USER = "LOGOUT_USER"

//! ACTION CREATORS 
export const autoLoginUser = (userData, loggedInStatus) => ({
        type: AUTO_LOGIN_USER,
        payload: {
                userData,
                loggedInStatus
        }
})

export const loginUser = userData => ({
        type: LOGIN_USER,
        payload: {
                userData
        }
})

export const catchFailedLoginErrors = (emailError, passwordError) => ({
        type: CATCH_FAILED_LOGIN_ERRORS,
        payload: {
                emailError,
                passwordError
        }
})

export const logoutUser = (userData, loggedInStatus) => ({
        type: LOGOUT_USER,
        payload: {
                userData,
                loggedInStatus
        }
})

