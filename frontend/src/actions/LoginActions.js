import UserClient from '../clients/UserClient';
import Actions from './ActionTypes';

const {Login} = Actions;

function getDispatchAction(actionType, data) {
  return {
    type: actionType,
    data: data
  }
}

const loginUser = (emailId, password, history) => async (dispatch) => {
  const userClient = new UserClient();
  try {
    let response = await userClient.loginUser(emailId, password);
    dispatch(getDispatchAction(Login.Success, response));
    history.push("/")
  } catch (error) {
    dispatch(getDispatchAction(Login.Success, error));
  }
}

const exportFuncs = {
  loginUser
}

export default exportFuncs;