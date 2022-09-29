import getGreetings from "./api";

const GREETINGS_REQUEST = "GET_GREETINGS_REQUEST";
const GREETINGS_SUCCESS = "GET_GREETINGS_SUCCESS";
const GREETINGS_ERROR = "GET_GREETINGS_ERROR";

const initialState = { greetings: {}, error: "" };

export function getGreetingsRequest() {
  return {
    type: GREETINGS_REQUEST,
  };
}

export function getGreetingSuccess(data) {
  return {
    type: GREETINGS_SUCCESS,
    payload: data,
  };
}

export function getGreetingFailure(error) {
  return {
    type: GREETINGS_ERROR,
    payload: error,
  };
}

export function getGreeting() {
  return function (dispatch) {
    dispatch(getGreetingsRequest());
    getGreetings()
      .then(function (data) {
        dispatch(getGreetingSuccess(data));
      })
      .catch(function (err) {
        getGreetingFailure(err);
      });
  };
}

const greetingsReducer = ( state = initialState , action) => {
  switch (action.type) {
    case GREETINGS_REQUEST:
      return {
        ...state,
      };
    case GREETINGS_SUCCESS:
      return {
        greetings: action.payload,
        error: "",
      };
    case GREETINGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default greetingsReducer; // deprecated