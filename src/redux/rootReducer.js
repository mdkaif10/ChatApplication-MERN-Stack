import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';

//slices
import appReducer from "./slices/app";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  // TODO => Add your reducers here
  app: appReducer,
});

export { rootPersistConfig };
export default rootReducer;
