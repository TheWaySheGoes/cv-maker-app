import { memo, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './cv.module.css'
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
} from '../Data/dataSlice'


const CV = () => {
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

    return (
        <>
            <main role="main">
                    <article>
                        <h1>aaa</h1>
                        <p>dasdasdas</p>
                        <p>dasdasdas</p>

                    </article>
            </main>
        </>
    );

}

export default memo(CV);