import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productsSlice'
import addCartReducer from './slices/addCartSlice'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import cardDetailed from './slices/addCartSlice'
import removedcart from './slices/addCartSlice'
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
    key:'root',
    storage,
}

const store = configureStore({
    reducer:{
        productReducer,
        addCartReducer:persistReducer(persistConfig,addCartReducer),
        cardDetailed,
        removedcart,
    }
})

export const persist = persistStore(store)
export default store;