import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./auth/reducer";
import { events as eventreducer } from "./auth/reducer";
// Combine all the individual reducers into one root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  events: eventreducer,
});

// Create the Redux store using the root reducer and apply the Redux thunk middleware for async actions
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
