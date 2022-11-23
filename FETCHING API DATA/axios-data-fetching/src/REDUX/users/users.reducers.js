import { USER_FAIL, USER_REQ, USER_SUCCESS } from "./users.action";

//initial state:
let initialState = {
  users: [],
  loading: false,
  errorMessage: "",
};

//reducer:
let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQ:
      return { ...state, loading: true };

    case USER_SUCCESS:
      return { ...state, users: action.payload };

    case USER_FAIL:
      return { ...state, errorMessage:action.payload, loading: false };
    default:
      return state;
  }
};


export {userReducer}