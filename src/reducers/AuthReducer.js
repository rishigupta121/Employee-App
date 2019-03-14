import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
            }
            from '../actions/types';
const INITIAL_STATE= {
     email : '',
     password: '',
     user: null,
     error: '',
     loading: false
    };
export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED: {
           // console.log(action);
              return { ...state, email: action.payload};
             break;
        }
           case PASSWORD_CHANGED: {
              // console.log("action");
               return {
                   ...state,
                   password: action.payload
               };
               break;
           }
           case LOGIN_USER_SUCCESS: {
               return {...state, ...INITIAL_STATE, user: action.payload}
           }
           case LOGIN_USER_FAIL: {
                //console.log("action_fail");
               return {
                   ...state,
                   error: 'Authentication Failed',
                   loading: false
               }
           }
           case LOGIN_USER: {
               return {...state, loading:'true', error: ''};
           }
        default:
            return state;
    }
}