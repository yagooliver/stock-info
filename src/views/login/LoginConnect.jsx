import {connect} from 'react-redux';
import LoginContainer from './components/LoginContainer';
import {editLogin} from './actions/actions';

const mapStateToProps = (state) => ({
  login: state.login.login
});

const mapDispatchToProps = (dispatch) => ({
  editLogin: (login) => dispatch(editLogin(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
