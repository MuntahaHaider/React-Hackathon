import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
    cartDetail : [],
    isLoading: false,
    isError:false,
}

export const cartDetailSlice = createSlice({
    name:'cart detail',
    initialState,
    reducers:{
        cartdetail:(state,action)=>{
            state.cartDetail.push(action.payload)
        }
    }
})

const {actions,reducer} = cartDetailSlice ;
export const {cartdetail} = actions;
export default reducer;