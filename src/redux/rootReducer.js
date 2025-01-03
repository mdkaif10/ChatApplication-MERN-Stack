import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  // TODO => Add your reducers here
});

export {rootPersistConfig};
export default rootReducer;