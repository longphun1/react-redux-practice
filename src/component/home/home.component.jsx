import { useSelector, useDispatch } from "react-redux";
import { counterSelector } from "../store/counter/counter.selector";
import { dinnerSelector } from "../store/dinnerPlan/dinnerPlan.selector";
import { toDoSelector } from "../store/toDo/toDo.selector";
import { incrementAction, decrementAction } from "../store/counter/counter.action";
import { homeMadeAction, eatOutAction } from "../store/dinnerPlan/dinnerPlan.action";
import { toDoAction, resetAction } from "../store/toDo/toDo.action";

const Home = ({ activity }) => {    // passed in activity as a destructered prop
    //extract the current state value
    const counter = useSelector(counterSelector)
    const dinner = useSelector(dinnerSelector)
    const toDo = useSelector(toDoSelector)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(incrementAction())}>+</button>    {/* dispatch action type into reducer file */}
            <button onClick={() => dispatch(decrementAction())}>-</button>
            <br></br>
            <h1>Dinner plan: {dinner}</h1>
            <button onClick={() => dispatch(homeMadeAction(activity.activity))}>Home</button>
            <button onClick={() => dispatch(eatOutAction())}>Resturant</button>
            <br></br>
            <h1>Activity: {toDo}</h1>
            {!toDo ?                                    // pass in activity api as an argument
                <button onClick={() => dispatch(toDoAction(activity.activity))}>Find something to do</button>  // render if the state is true
                :                                         
                <button onClick={() => dispatch(resetAction())}>Clear</button>  // render if the state is false
            }
        </div>
    )
};

export default Home;