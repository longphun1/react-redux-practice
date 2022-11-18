import { combineReducers } from "redux";
import counterReducer from "./counter/counter.reducer";
import dinnerReducer from "./dinnerPlan/dinnerPlan.reducer";
import toDoReducer from "./toDo/toDo.reducer";

//combine multiple reducers and passing it into store
const rootReducer = combineReducers({
    counter: counterReducer,
    dinner: dinnerReducer,
    toDo: toDoReducer
});

export default rootReducer