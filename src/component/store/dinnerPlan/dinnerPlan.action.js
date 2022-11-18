
//When button gets clicked, an action type get dispatch into the reducer file
export const homeMadeAction = () => {
    console.log("action file")
    return {
        type: 'HOMEMADE',
    }
};

export const eatOutAction = () => {
    return {
        type: 'EATOUT'
    }
}