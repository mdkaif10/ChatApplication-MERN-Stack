import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
// TODO => Add your reducers here

});

export {rootPersistConfig};