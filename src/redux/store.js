import { createStore } from "redux";
import rootReducers from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension"; // Corrección aquí

const store = createStore(rootReducers, composeWithDevTools()); // Corrección aquí

export default store;
