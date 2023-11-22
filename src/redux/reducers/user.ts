// import {SESSION_EXPIRED, UPDATE_USER_STATE} from '../constants';

const initialState = {
  token: null,
  authTransaction: null,
  currentUser: null,
};

export default function user(state = initialState, arg: any) {
  switch (arg.type) {
    case 'UPDATE_USER_STATE':
      return {...state, ...arg.payload};

    case 'Expired':
      return initialState;

    default:
      return state;
  }
}
