const initialState = {
        user: {},
        loggedIn: false,
        error: '',
        lastStatusCheck: null,
}

//! REDUCER
export default function authUserReducer(state = initialState, action) {
        switch(action.type) {
                case CHECK_USER_LOGGED_IN_STATUS:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedIn: action.payload.loggedIn,
                                lastStatusCheck: action.payload.lastStatusCheck
                        }
                
                case LOGIN_USER:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedIn: true,
                                lastStatusCheck: action.payload.lastStatusCheck
                        }
                case CATCH_FAILED_LOGIN_ERRORS:
                        return {
                                ...state,
                                error: action.payload.error,
                                loggedIn: false,
                        }
                case LOGOUT_USER:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedIn: action.payload.loggedIn,
                        }
                default:
                        return  state
        }
}       

//!TYPES
const CHECK_USER_LOGGED_IN_STATUS = "CHECK_USER_LOGGED_IN_STATUS"
const LOGIN_USER = "LOGIN_USER"
const CATCH_FAILED_LOGIN_ERRORS = "CATCH_FAILED_LOGIN_ERRORS"
const LOGOUT_USER = "LOGOUT_USER"

//! ACTION CREATORS 
export const checkUserLoggedInStatus = (userData, loggedIn, lastStatusCheck) => ({
        type: CHECK_USER_LOGGED_IN_STATUS,
        payload: {
                userData,
                loggedIn,
                lastStatusCheck
        }
})

export const loginUser = (userData, lastStatusCheck) => ({
        type: LOGIN_USER,
        payload: {
                userData,
                lastStatusCheck
        }
})

export const catchFailedLoginErrors = error => ({
        type: CATCH_FAILED_LOGIN_ERRORS,
        payload: {
                error
        }
})

export const logoutUser = (userData, logged) => ({
        type: LOGOUT_USER,
        payload: {
                userData,
                logged
        }
})

