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
            <main id="main_container">
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
                    <label class="label">First Name: <input class="input" type="text" value={fName} onChange={(e) => setFNameState(e.target.value)} /></label><br />
                    <label class="label">Middle Name: <input class="input" type="text" value={mName} onChange={(e) => setMNameState(e.target.value)} /></label><br />
                    <label class="label">Last Name: <input class="input" type="text" value={lName} onChange={(e) => setLNameState(e.target.value)} /></label><br />
                    <label class="label">Job Title: <input class="input" type="text" value={jobTitle} onChange={(e) => setJobTitleState(e.target.value)} /></label><br />
                    <label class="label">Address: <input class="input" type="text" value={address} onChange={(e) => setAddressState(e.target.value)} /></label><br />
                    <label class="label">Tel: <input class="input" type="text" value={tel} onChange={(e) => setTelState(e.target.value)} /></label><br />
                    <label class="label">Email: <input class="input" type="email" value={email} onChange={(e) => setEmailState(e.target.value)} /></label><br />
                    <label class="label">Web Page: <input class="input" type="text" value={webPage} onChange={(e) => setWebpageState(e.target.value)} /></label><br />
                    {/*About Me*/}
                    <hr /><hr />
                    <label class="label">About Me:
                        <textarea value={aboutMe} onChange={(e) => setAboutMeState(e.target.value)} cols="50" rows="10" /><br />
                    </label><br />
                    {/*Social Links*/}
                    <hr /><hr />
                    <label class="label">Social Links:
                        <button class="btn_plus" value="1" onClick={(e) => addSocialLinksElements(e.target.value)}>+</button>
                        <button class="btn_minus" value="1" onClick={(e) => removeSocialLinksElements(e.target.value)}>-</button>
                    </label><br />
                    <label class="label">
                        {socialLinks.map((value, index) => (
                            <>
                                <input class="input" key={index} type="text" value={value} onChange={(e) => handleSocialLinks(e.target.value, index)} /><br />
                            </>))}
                    </label>
                    {/*Work Experience*/}
                    <hr /><hr />
                    <label class="label">Work Experiance:
                        <button class="btn_plus" onClick={() => addWorkExperienceElements()}>+</button>
                        <button class="btn_minus" onClick={() => removeWorkExperienceElements()}>-</button>
                    </label><br />
                    {workExperience.map((obj, index) => (
                        <div key={index}>
                            <label class="label">Company: <input class="input" type="text" value={obj.company} onChange={(e) => handleWorkExperianceList(e.target.value, index, "company")} /></label><br />
                            <label class="label">City: <input class="input" type="text" value={obj.city} onChange={(e) => handleWorkExperianceList(e.target.value, index, "city")} /></label><br />
                            <label class="label">Year From: <input class="input" type="text" value={obj.yearFrom} onChange={(e) => handleWorkExperianceList(e.target.value, index, "yearFrom")} /></label><br />
                            <label class="label">Year To: <input class="input" type="text" value={obj.yearTo} onChange={(e) => handleWorkExperianceList(e.target.value, index, "yearTo")} /></label><br />
                            <label class="label">Title: <input class="input" type="text" value={obj.title} onChange={(e) => handleWorkExperianceList(e.target.value, index, "title")} /></label><br />
                            <label class="label">Description: <textarea value={obj.description} onChange={(e) => handleWorkExperianceList(e.target.value, index, "description")} cols="50" rows="10" /></label><br />
                            <br />
                            <hr />
                        </div>
                    ))}
                    {/*education*/}
                    <hr /><hr />
                    <label class="label">Education:
                        <button class="btn_plus" onClick={() => addEducationElements()}>+</button>
                        <button class="btn_minus" onClick={() => removeEducationElements()}>-</button>
                    </label><br />
                    {education.map((obj, index) => (
                        <div key={index}>
                            <label class="label">School: <input class="input" type="text" value={obj.school} onChange={(e) => handleEducationList(e.target.value, index, "school")} /></label><br />
                            <label class="label">City: <input class="input" type="text" value={obj.city} onChange={(e) => handleEducationList(e.target.value, index, "city")} /></label><br />
                            <label class="label">Year From: <input class="input" type="text" value={obj.yearFrom} onChange={(e) => handleEducationList(e.target.value, index, "yearFrom")} /></label><br />
                            <label class="label">Year To: <input class="input" type="text" value={obj.yearTo} onChange={(e) => handleEducationList(e.target.value, index, "yearTo")} /></label><br />
                            <label class="label">Title: <input class="input" type="text" value={obj.title} onChange={(e) => handleEducationList(e.target.value, index, "title")} /></label><br />
                            <label class="label">Description: <textarea value={obj.description} onChange={(e) => handleEducationList(e.target.value, index, "description")} cols="50" rows="10" /></label><br />
                            <br />
                            <hr />
                        </div>
                    ))}
                    {/*Image*/}
                    <hr /><hr />
                    <label class="label">Image: <input type="file" accept="image/*" onChange={(e) => handleFileChange(e.target.files[0])} /></label><br />
                    <img src={image} style={{ height: "200px" }}></img><br />
                    {/*References */}
                    <hr /><hr />
                    <label class="label">References:
                        <button class="btn_plus" onClick={() => addReferencesElements()}>+</button>
                        <button class="btn_minus" onClick={() => removeReferencesElements()}>-</button>
                    </label><br />
                    <label class="label">
                        {references.map((value, index) => (
                            <>
                                <input class="input" key={index} type="text" value={value} onChange={(e) => handleReferencesList(e.target.value, index)} /><br />
                            </>))}
                    </label>
                    <button type="submit" class="submitBtn">save changes</button>
                </form >
                <p class="info">DONT FORGET TO SAVE CHANGES BEFORE VIEWING CV!</p>
            </main>
        </>
    );
}


export default memo(Data);