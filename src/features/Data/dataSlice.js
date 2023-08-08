import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        fName: '',
        mName: '',
        lName: '',
        jobTitle: '',
        address: '',
        tel: '',
        email: '',
        webpage: '',
        aboutMe: '',
        socialLinks: [],
        workExperience: [
            {}//{company: '', city: '', yearFrom: '', yearTo: '', title: '', description: ''} 
        ],
        education: [
            {}//{ school: '', city: '', yearFrom: '', yearTo: '', title: '', description: '' }
        ],
        image:null,
        references: [],
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
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setTel: (state, action) => {
            state.tel = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setWebpage: (state, action) => {
            state.webpage = action.payload
        },
        setAboutMe: (state, action) => {
            state.aboutMe = action.payload
        },
        setSocialLinks: (state, action) => {
            state.socialLinks = action.payload
        },
        setWorkExperience: (state, action) => {
            state.workExperience = action.payload
        },
        setEducation: (state, action) => {
            state.education = action.payload
        },
        setImage: (state, action) => {
            state.image = action.payload
        },
        setReferences: (state, action) => {
            state.references = action.payload
        },
    }
})

export const {
    setFName,
    setMName,
    setLName,
    setJobTitle,
    setAddress,
    setTel,
    setEmail,
    setWebpage,
    setAboutMe,
    setSocialLinks,
    setWorkExperience,
    setEducation,
    setImage,
    setReferences,
} = dataSlice.actions

export const selectFName = state => state.data.fName
export const selectMName = state => state.data.mName
export const selectLName = state => state.data.lName
export const selectJobTitle = state => state.data.jobTitle
export const selectAddress = state => state.data.address
export const selectTel = state => state.data.tel
export const selectEmail = state => state.data.email
export const selectWebpage = state => state.data.webpage
export const selectAboutMe = state => state.data.aboutMe
export const selectSocialLinks = state => state.data.socialLinks
export const selectWorkExperience = state => state.data.workExperience
export const selectEducation = state => state.data.education
export const selectImage = state => state.data.image
export const selectReferences = state => state.data.references

export default dataSlice.reducer;

