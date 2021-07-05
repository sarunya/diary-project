const _ = require('lodash');

export const AuthMiddleware  = () => store => next => action => {
  let currentState = store.getState();
  if (_.isEmpty(currentState.name) && window.location.pathname !== "login") {
    window.location.href= "/"; //TODO: change to /login
    return null;
  }
  return next(action);
}


export default AuthMiddleware;