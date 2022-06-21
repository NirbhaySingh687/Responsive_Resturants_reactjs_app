const initialState = [
    { id: 0, name: "Nirbhay Singh", number: "98786868676", email: "ab@gmail.com"},
    { id: 1, name: "Radha Singh", number: "98786868676", email: "test@gmail.com"},
    { id: 2, name: "Anupanma Singh", number: "98786868676" , email: "admin@gmail.com"},
    { id: 3, name: "Rocky", number: "98786868676", email: "ad@gmail.com"},
]

export const contactReducers = (state=initialState, action)=>{
    switch (action.type){
        case "ADD_CONTACT": {
            return [...state, action.payload]
        }
        default: return state
    }
}