

export const initialState = {
    basket:[],
    user:null
};

export const reducer = (state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            //Logig to add item in basket
            console.log(state);
            const found = state.basket.some(e=>e.id === action.item.id)
            if(found)
            {
                
               return state; 
            }
            console.log("Adding item");
            debugger;
            return {
               
                ...state,
                basket:[...state.basket,action.item]
            };

            
        case 'REMOVE_FROM_BASKET':
            //logic for removing it from basket
            return {
                ...state,
                basket:state.basket.filter((ele)=>{
                    return ele.id !== action.id
                })
            };
        case 'INCREASE_COUNT_IN_BASKET':
            //logic to increase the quantity
            console.log("From adder");
            console.log(state);
            const id = action.id;
            console.log("Item to be update")
            console.log(id);
            const itemToUpdate = state.basket.find(ele=>ele.id === id);
            console.log(itemToUpdate);
            itemToUpdate.quantity = parseInt(itemToUpdate.quantity)+1;
            let newState = state.basket.filter(ele=>ele.id !== id);
            newState = [...newState,itemToUpdate];
            return {
                ...state,
                basket:newState
            };
            
        // case 'DECREASE_COUNT_IN_BASKET':
        //     //logic to decrease the quanityt
        //         return state;
        default:
            return state;
    }
}