import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/Data/dataSlice'

export default configureStore({
    reducer:{
        data: dataReducer,
    },
});