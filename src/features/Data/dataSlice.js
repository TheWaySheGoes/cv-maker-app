import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        fName: 'John',
        mName: 'Fitzgerald ',
        lName: 'Kennedy',
        jobTitle: 'President',
        address: 'Washington, whashington street, USA ',
        tel: '123-2345-456-89',
        email: 'John@JFK.com',
        webpage: 'https://en.wikipedia.org/wiki/John_F._Kennedy',
        aboutMe: 'an American politician who served as the 35th president of the United States from 1961 until his assassination in 1963. He was the youngest person to assume the presidency by election and the youngest president at the end of his tenure.[2] Kennedy served at the height of the Cold War, and the majority of his foreign policy concerned relations with the Soviet Union and Cuba. A Democrat, Kennedy represented Massachusetts in both houses of the U.S. Congress prior to his presidency.',
        socialLinks: ['https://en.wikipedia.org/wiki/John_F._Kennedy'],
        workExperience: [
            {
                company: 'Government', 
                city: 'Washington', 
                yearFrom: '1961', 
                yearTo: '1963', 
                title: 'The Prez', 
                description: 'Kennedys administration included high tensions with communist states in the Cold War. As a result, he increased the number of American military advisers in South Vietnam. The Strategic Hamlet Program began in Vietnam during his presidency. In April 1961, he authorized an attempt to overthrow the Cuban government of Fidel Castro in the failed Bay of Pigs Invasion. In November 1961, he authorized the Operation Mongoose, also aimed at removing the communists from power in Cuba.'} 
        ],
        education: [
            { school: 'US Navy', 
            city: 'Washington', 
            yearFrom: '1941',
            yearTo: '1945', 
            title: 'Lieutenant', 
            description: 'n January 1942, Kennedy was assigned to the ONI field office at Headquarters, Sixth Naval District, in Charleston, South Carolina.[45] His hope was to be the commander of a PT (patrol torpedo) boat, but his health problems seemed almost certain to prevent him from active duty.' }
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

