export const initialState = {
    category: {}
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "Add__Category":
            return {
                ...state,
                category: action.item
                 
            }
    }
}