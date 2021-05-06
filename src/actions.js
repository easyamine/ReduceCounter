import React, { useReducer } from "react";


const Action = {
    Increment: 'increment',
    Decrement: 'decrement'
}

function reducer(state, action) {
    switch (action.type) {
        case Action.increment:
        return { count: state.count + 1 }
        case Action.decrement:
        return { count: state.count - 1 }
        default:
        return state
    }
}


export default reducer;