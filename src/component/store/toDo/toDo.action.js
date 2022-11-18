// get activity api argument and set it into the parameter as api
export const toDoAction = (api) => {
    return {
        type: 'ACTIVITY',
        payload: api
    }
};

export const resetAction = () => {
    return {
        type: 'RESET'
    }
}