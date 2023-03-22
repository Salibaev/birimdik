
const initialState = {
    categories: [],
}

export const categoriesReducer = (state = initialState,{type, payload}) => {
    switch(type) {
        case 'SET_CATEGORIES':
            return {...state,categories:payload};
            default:
                return state;
    }
}

// const initialState = {
//     likes: [],
// }

// export const likesReducer = (state = initialState,{type, payload}) => {
//     switch(type) {
//         case 'SET_LIKES':
//             return {...state,likes:payload};
//             default:
//                 return state;
//     }
// }