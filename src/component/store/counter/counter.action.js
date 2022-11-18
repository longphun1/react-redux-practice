//When button gets clicked, it dispatch an action type into the reducer file
export const incrementAction = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrementAction = () => {
    return {
        type: 'DECREMENT'
    }
}

