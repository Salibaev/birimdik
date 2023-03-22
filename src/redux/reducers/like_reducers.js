
const initialState = {
    likes: [],
}

export const likesReducer = (state = initialState,{type, payload}) => {
    switch(type) {
        case 'SET_LIKES':
            return {...state,likes:payload};
            default:
                return state;
    }
}