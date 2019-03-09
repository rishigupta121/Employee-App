import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
            }
            from '../actions/types';
const INITIAL_STATE= {
     email : '',
     password: '',
     user: null
    };
export default (state = INITIAL_STATE, action) => {
    console.log(action);
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
               return {...state, user: action.payload}
           }
        default:
            return state;
    }
}