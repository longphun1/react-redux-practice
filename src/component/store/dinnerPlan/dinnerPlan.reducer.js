//Modify old state into a new state based on action
const dinnerReducer = (state = null, action) => {
    console.log('reducer file')
    switch(action.type) {
        case 'HOMEMADE':
            return state = 'Cook a meal'
        case 'EATOUT':
            return state = 'Order food at a resturant'
        default:
            return state
    }
};

export default dinnerReducer