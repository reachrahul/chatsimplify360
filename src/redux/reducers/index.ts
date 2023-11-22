import {combineReducers} from 'redux';
import user from './user';
// import admin from "./admin";
// import overview from "./overview";
// import ticket from "./ticket";
// import access from "./access";

// const appReducer = combineReducers({ user, admin, overview, ticket, access });
const appReducer = combineReducers({user});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
