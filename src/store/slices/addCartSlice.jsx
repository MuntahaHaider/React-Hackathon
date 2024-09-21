import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    addCart:[],
    cartDetail: null,
    isLoading: false,
    isError:false,

}

 export const addCartSlice = createSlice({
     name:'addcart',
     initialState,
     reducers:{ 
        addCartFunc:(state,action)=>{
            state.addCart.push(action.payload)
        },
        removeCartFunc:(state,action)=>{
            state.addCart = state.addCart.filter(item=>item.id !== action.payload.id)
        },
        cartdetailFunc:(state,action)=>{
            state.cartDetail = action.payload;
            // state.cartDetail = state.addCart.filter(item=>item.id === action.payload.id)
            // console.log(cartdetail)
        }
     }

})

const {actions,reducer} = addCartSlice;
export const {addCartFunc,removeCartFunc,cartdetailFunc} = actions;
export default reducer;