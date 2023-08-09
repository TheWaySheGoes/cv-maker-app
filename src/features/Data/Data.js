import { memo, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './data.css'
import {
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
    selectFName,
    selectMName,
    selectLName,
    selectJobTitle,
    selectAddress,
    selectTel,
    selectEmail,
    selectWebpage,
    selectAboutMe,
    selectSocialLinks,
    selectWorkExperience,
    selectEducation,
    selectImage,
    selectReferences,
} from './dataSlice'

const Data = () => {
    const dispatch = useDispatch();

    const [fName, setFNameState] = useState(useSelector(selectFName));
    const [mName, setMNameState] = useState(useSelector(selectMName));
    const [lName, setLNameState] = useState(useSelector(selectLName));
    const [jobTitle, setJobTitleState] = useState(useSelector(selectJobTitle));
    const [address, setAddressState] = useState(useSelector(selectAddress));
    const [tel, setTelState] = useState(useSelector(selectTel));
    const [email, setEmailState] = useState(useSelector(selectEmail));
    const [webPage, setWebpageState] = useState(useSelector(selectWebpage));
    const [aboutMe, setAboutMeState] = useState(useSelector(selectAboutMe));
    const [socialLinks, setSocialLinksState] = useState(useSelector(selectSocialLinks));
    const [workExperience, setWorkExperianceState] = useState(useSelector(selectWorkExperience));
    const [education, setEducationState] = useState(useSelector(selectEducation));
    const [image, setImageState] = useState(useSelector(selectImage));
    const [references, setReferencesState] = useState(useSelector(selectReferences));

    const [socialLinksCount, setSocialLinksCount] = useState(0);;

    const saveGlobalState = (event) => {
        event.preventDefault();
        dispatch(setFName(fName));
        dispatch(setMName(mName));
        dispatch(setLName(lName));
        dispatch(setJobTitle(jobTitle));
        dispatch(setAddress(address));
        dispatch(setTel(tel));
        dispatch(setEmail(email));
        dispatch(setWebpage(webPage));
        dispatch(setAboutMe(aboutMe));
        dispatch(setSocialLinks(socialLinks));
        dispatch(setWorkExperience(workExperience));
        dispatch(setEducation(education));
        dispatch(setImage(image));
        dispatch(setReferences(references));
    }


    //handle education add/remove fields + get values
    const handleEducationList = (value, index, key) => {
        const newEducation = [...education];
        const tempObject = { ...newEducation[index] };
        tempObject[key] = value;
        newEducation[index] = tempObject;
        setEducationState(newEducation);
    }
    const addEducationElements = () => {
        const newEducation = [...education, { school: '', city: '', yearFrom: '', yearTo: '', title: '', description: '' }];
        setEducationState(newEducation);
    }
    const removeEducationElements = () => {
        const newEducation = [...education];
        newEducation.pop();
        setEducationState(newEducation);
    }

    //handle work experience add/remove fields + get values
    const handleWorkExperianceList = (value, index, key) => {
        const newWorkExperience = [...workExperience];
        const tempObject = { ...newWorkExperience[index] };
        tempObject[key] = value;
        newWorkExperience[index] = tempObject;
        setWorkExperianceState(newWorkExperience);
    }
    const addWorkExperienceElements = () => {
        const newWorkExperience = [...workExperience, { company: '', city: '', yearFrom: '', yearTo: '', title: '', description: '' }];
        setWorkExperianceState(newWorkExperience);
    }
    const removeWorkExperienceElements = () => {
        const newWorkExperience = [...workExperience];
        newWorkExperience.pop();
        setWorkExperianceState(newWorkExperience);
    }

    //handle socialLinks add/remove fields + get values
    const handleSocialLinks = (value, index) => {
        const newSocialLinks = [...socialLinks];
        newSocialLinks[index] = value;
        setSocialLinksState(newSocialLinks);
    }
    const addSocialLinksElements = (val) => {
        setSocialLinksCount(socialLinksCount + Number(val));
        const newSocialLinks = [...socialLinks, ''];
        setSocialLinksState(newSocialLinks);
    }
    const removeSocialLinksElements = (val) => {
        setSocialLinksCount(socialLinksCount > 0 ? socialLinksCount - Number(val) : 0);
        const newSocialLinks = [...socialLinks];
        newSocialLinks.pop();
        setSocialLinksState(newSocialLinks);
    }
    //handle References add/remove fields + get values
    const handleReferencesList = (value, index) => {
        const newReferences = [...references];
        newReferences[index] = value;
        setReferencesState(newReferences);
    }
    const addReferencesElements = (val) => {
        const newReferences = [...references, ''];
        setReferencesState(newReferences);
    }
    const removeReferencesElements = (val) => {
        const newReferences = [...references];
        newReferences.pop();
        setReferencesState(newReferences);
    }
    //handle Image
    const handleFileChange = (image) => {
        if (image) {
            const fileURL = URL.createObjectURL(image);
            setImageState(fileURL);
        }
    }

    return (
        <>  
            <h1>CV Maker</h1>
            <p id="description">This App helps you create cv fast from a template.
                You just have to enter the information below, and save changes.
                After that, you can view your CV using the link.
                You can always go back and modify your information.
                The correct CV format is prepered for printing via browser print function.
            </p>
            <p class="info">DONT FORGET TO SAVE CHANGES BEFORE VIEWING CV!</p>
            <form onSubmit={saveGlobalState}>
                <button type="submit" class="submitBtn">save changes</button><br />
                <label class="label">First Name: <input type="text" value={fName} onChange={(e) => setFNameState(e.target.value)} /></label><br />
                <label class="label">Middle Name: <input type="text" value={mName} onChange={(e) => setMNameState(e.target.value)} /></label><br />
                <label class="label">Last Name: <input type="text" value={lName} onChange={(e) => setLNameState(e.target.value)} /></label><br />
                <label class="label">Job Title: <input type="text" value={jobTitle} onChange={(e) => setJobTitleState(e.target.value)} /></label><br />
                <label class="label">Address: <input type="text" value={address} onChange={(e) => setAddressState(e.target.value)} /></label><br />
                <label class="label">Tel: <input type="text" value={tel} onChange={(e) => setTelState(e.target.value)} /></label><br />
                <label class="label">Email: <input type="email" value={email} onChange={(e) => setEmailState(e.target.value)} /></label><br />
                <label class="label">Web Page: <input type="text" value={webPage} onChange={(e) => setWebpageState(e.target.value)} /></label><br />
                {/*About Me*/}
                <label>About Me: </label><br />
                <textarea value={aboutMe} onChange={(e) => setAboutMeState(e.target.value)} cols="50" rows="10" /><br />
                {/*Social Links*/}
                <label>Social Links:
                    <button value="1" onClick={(e) => addSocialLinksElements(e.target.value)}>+</button>
                    <button value="1" onClick={(e) => removeSocialLinksElements(e.target.value)}>-</button>
                </label><br />
                {socialLinks.map((value, index) => (
                    <>
                        <input key={index} type="text" value={value} onChange={(e) => handleSocialLinks(e.target.value, index)} /><br />
                    </>))}
                {/*Work Experience*/}
                <label>WorkExperiance:
                    <button onClick={() => addWorkExperienceElements()}>+</button>
                    <button onClick={() => removeWorkExperienceElements()}>-</button>
                </label><br />
                {workExperience.map((obj, index) => (

                    <div key={index}>
                        <label>Company: <input type="text" value={obj.company} onChange={(e) => handleWorkExperianceList(e.target.value, index, "company")} /></label><br />
                        <label>City: <input type="text" value={obj.city} onChange={(e) => handleWorkExperianceList(e.target.value, index, "city")} /></label><br />
                        <label>Year From: <input type="text" value={obj.yearFrom} onChange={(e) => handleWorkExperianceList(e.target.value, index, "yearFrom")} /></label><br />
                        <label>Year To: <input type="text" value={obj.yearTo} onChange={(e) => handleWorkExperianceList(e.target.value, index, "yearTo")} /></label><br />
                        <label>Title: <input type="text" value={obj.title} onChange={(e) => handleWorkExperianceList(e.target.value, index, "title")} /></label><br />
                        <label>Description: <textarea value={obj.description} onChange={(e) => handleWorkExperianceList(e.target.value, index, "description")}  cols="50" rows="10" /></label><br />
                        <br />
                    </div>
                ))}
                {/*education*/}
                <label>Education:
                    <button onClick={() => addEducationElements()}>+</button>
                    <button onClick={() => removeEducationElements()}>-</button>
                </label><br />
                {education.map((obj, index) => (

                    <div key={index}>
                        <label>School: <input type="text" value={obj.company} onChange={(e) => handleEducationList(e.target.value, index, "school")} /></label><br />
                        <label>City: <input type="text" value={obj.city} onChange={(e) => handleEducationList(e.target.value, index, "city")} /></label><br />
                        <label>Year From: <input type="text" value={obj.yearFrom} onChange={(e) => handleEducationList(e.target.value, index, "yearFrom")} /></label><br />
                        <label>Year To: <input type="text" value={obj.yearTo} onChange={(e) => handleEducationList(e.target.value, index, "yearTo")} /></label><br />
                        <label>Title: <input type="text" value={obj.title} onChange={(e) => handleEducationList(e.target.value, index, "title")} /></label><br />
                        <label>Description: <textarea value={obj.description} onChange={(e) => handleEducationList(e.target.value, index, "description")} cols="50" rows="10" /></label><br />
                        <br />
                    </div>
                ))}
                {/*Image*/}
                <label>Image: <input type="file" accept="image/*" onChange={(e) => handleFileChange(e.target.files[0])} /></label><br />
                <img src={image} style={{ height: "200px" }}></img><br />
                {/*References */}
                <label>References:
                    <button onClick={() => addReferencesElements()}>+</button>
                    <button onClick={() => removeReferencesElements()}>-</button>
                </label><br />
                {references.map((value, index) => (
                    <>
                        <input key={index} type="text" value={value} onChange={(e) => handleReferencesList(e.target.value, index)} /><br />
                    </>))}

                <button type="submit" class="submitBtn">save changes</button>
            </form >
            <p class="info">DONT FORGET TO SAVE CHANGES BEFORE VIEWING CV!</p>
        </>
    );
}


export default memo(Data);