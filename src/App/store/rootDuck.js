// import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

// import * as auth from "./ducks/auth.duck";
// import HeaderReducer from "./reducers/HeaderReducer";

export const rootReducer = combineReducers({
    // header: HeaderReducer,
    // auth: auth.reducer,
});

export function* rootSaga() {
    // yield all([auth.saga()]);
}
