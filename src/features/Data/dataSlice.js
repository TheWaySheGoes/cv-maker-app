import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name:'data',
    initialState: {
        fName:' ',
        mName:' ',
        lName:' ',
        jobTitle:' '

    },
    reducers: {
        setFName: (state, action) => {
            state.fName = action.payload
        },
        setMName: (state, action) => {
            state.mName = action.payload
        },
        setLName: (state, action) => {
            state.lName = action.payload
        },
        setJobTitle: (state, action) => {
            state.jobTitle = action.payload
        } 
    }
})

export const {setFName, setMName, setLName, setJobTitle} = dataSlice.actions

export const selectFName = state => state.data.fName
export const selectMName = state => state.data.mName
export const selectLName = state => state.data.lName
export const selectJobTitle = state => state.data.jobTitle


export default dataSlice.reducer;