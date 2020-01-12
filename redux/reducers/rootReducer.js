import { combineReducers } from "redux";

import languageReducer from "./languageReducer";
import textReducer from "./textReducer";

const rootReducer = combineReducers({
    languages: languageReducer,
    text: textReducer
});

export default rootReducer;