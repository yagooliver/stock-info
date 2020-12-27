import * as types from './actionTypes'

export const editLogin = (item) => dispatch => {
  dispatch({
    type: types.CHANGE_LOGIN_FORM,
    payload: item
  });
}
