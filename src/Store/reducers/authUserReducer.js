const initialState = {
        user: {},
        loggedInStatus: false,
        emailError: '',
        passwordError: ''
}

//! REDUCER
export default function authUserReducer(state = initialState, action) {
        switch(action.type) {
                case CHECK_LOGGED_IN_STATUS: 
                        return {
                                ...state,
                                loggedInStatus: false
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
                default:
                        return  state
        }
}       

//!TYPES
const CHECK_LOGGED_IN_STATUS = "CHECK_LOGGED_IN_STATUS"
const LOGIN_USER = "LOGIN_USER"
const CATCH_FAILED_LOGIN_ERRORS = "CATCH_FAILED_LOGIN_ERRORS"

//! ACTION CREATORS 
export const checkLoggedInStatus = loggedInStatus => ({
        type: CHECK_LOGGED_IN_STATUS,
        payload: {
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

