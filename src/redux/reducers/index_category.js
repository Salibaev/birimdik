import {combineReducers} from "redux";
import { categoriesReducer } from "./category_reducers";
import { likesReducer } from "./like_reducers";




export const reducers = combineReducers({
 categories: categoriesReducer,
});
