import { memo, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './cv.css'
import {
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

    const fName = useSelector(selectFName);
    const mName = useSelector(selectMName);
    const lName = useSelector(selectLName);
    const jobTitle = useSelector(selectJobTitle);
    const address = useSelector(selectAddress);
    const tel = useSelector(selectTel);
    const email = useSelector(selectEmail);
    const webPage = useSelector(selectWebpage);
    const aboutMe = useSelector(selectAboutMe);
    const socialLinks = useSelector(selectSocialLinks);
    const workExperience = useSelector(selectWorkExperience);
    const education = useSelector(selectEducation);
    const image = useSelector(selectImage);
    const references = useSelector(selectReferences);

    return (
        <>
            <main id="main">
                <article>
                    <div class="grid_container">
                        <div class="item1"><img id="photo" src={image} alt="Photo"></img></div>
                        <div class="item2">Name</div>
                        <div class="empty"></div>
                        <div class="item3">Contact</div>
                        <div class="item4">About</div>
                        <div class="item5">Work</div>
                        <div class="item6">Social</div>
                        <div class="item7">Education</div>
                        <div class="item8">References</div>
                                           
                    </div>
                </article>
            </main>
        </>
    );

}

export default memo(CV);