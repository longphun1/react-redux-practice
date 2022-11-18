const toDoReducer = (state = false, action) => {
    switch(action.type) {
        case 'ACTIVITY':
            return state = action.payload       // set state as the api
        case 'RESET':
            return false
        default:
            return state
    }
};

export default toDoReducer;