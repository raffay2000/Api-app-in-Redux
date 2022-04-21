import { createStore, applyMiddleware } from 'redux';
import Reduxthunk from 'redux-thunk';
import { rootReducer} from "../Reducer"
export const store = createStore(rootReducer, applyMiddleware(Reduxthunk));
