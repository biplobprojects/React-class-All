import Axios from "axios";

//ACTION TYPES:
const USER_REQ = "USER_REQ";
const USER_SUCCESS = "USER_SUCCESS";
const USER_FAIL = "USER_FAIL";

// ACTIONS:
let userReq = () => {
  return { type: "USER_REQ" };
};

let userSuccess = (users) => {
  return { type: "USER_SUCCESS", payload: users };
};

let userFail = (error) => {
  return { type: "USER_FAIL", payload: error };
};

//SPECIAL ACTION:
let userAction = () => {
  return (dispatch) => {
    dispatch(userReq());

    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        dispatch(userSuccess(res.data));
      })
      .catch((error)=>{

        dispatch(userFail(error))
      })
  };
};

export { userAction, USER_FAIL, USER_REQ, USER_SUCCESS };
