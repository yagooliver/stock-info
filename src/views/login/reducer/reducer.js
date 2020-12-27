import * as types from '../actions/actionTypes'

const initialState = {
  login: {
    username: '',
    password: ''
  }, 
  isSubmitted: false
}

const LoginReducer = (state = initialState, action) => {
  switch(action.type){
    case types.CHANGE_LOGIN_FORM:
      return {
        ...state,
	login: action.payload

      }
    default: return state;
  }
}

export default LoginReducer;
