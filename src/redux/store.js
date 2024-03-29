import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userRegisterReducer, userLoginReducer, createUserReducer } from "./auth/AuthReducers";
const reducer = combineReducers({
  // user reducers
  userCreate: createUserReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

const userTokenFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userData: userTokenFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;