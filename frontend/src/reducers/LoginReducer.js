import Actions from '../actions/ActionTypes';

const {Login} = Actions;

const initialState = {
  loading: false,
  userName: "",
  emailId: null,
  password: null,
  error: ""
}

function LoginReducer(state=initialState, {type, data, error}) {
  let diffData;
  switch(type) {
    case Login.Load: 
      diffData = {
        loading: true
      };
      break;
    case Login.Success:
      diffData = {
        userName: data.name
      }
      break;
    case Login.Failed:
      diffData = {
        error: error
      }
      break;
    default:
      diffData = {};
      break;
  }

  return {
    ...state,
    ...diffData
  }
}

export default LoginReducer;