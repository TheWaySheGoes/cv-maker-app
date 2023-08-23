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
                <div class="grid_container">
                    <div class="item1"><img id="photo" src={image} alt="Photo"></img></div>
                    <div class="item2">
                        <h1>{fName}</h1>
                        <h1>{mName}</h1>
                        <h1>{lName}</h1>
                        <h4>{jobTitle}</h4>
                    </div>
                    <div class="empty"></div>
                    <div class="item3">
                        <p>{address}</p>
                        <p>{tel}</p>
                        <p>{email}</p>
                        <p>{webPage}</p>
                    </div>
                    <div class="item4">
                        <h3 class="white_text">About Me</h3>
                        <p class="white_text">{aboutMe}</p>
                    </div>
                    <div class="item5">
                        <h3>Work Experiance</h3>
                        <div class="itemContainer">
                            {workExperience.map((obj, index) =>
                                <div class="workItem" key={index}>
                                    <aside>
                                        <h4>{obj.company}</h4>
                                        <p>{obj.city}</p>
                                        <p>{obj.yearFrom} - {obj.yearTo}</p>
                                    </aside>
                                    <article>
                                        <h4>{obj.title}</h4>
                                        <p>{obj.description}</p>
                                    </article>
                                    <br />
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div class="item6">
                        <h3 class="white_text">Social Links</h3>
                        <ul>
                            {socialLinks.map((value, index) => (
                                <>
                                    <li key={index} class="white_text">
                                        {value}
                                    </li>

                                </>))}
                        </ul>
                    </div>
                    <div class="item7">
                        <h3>Education</h3>
                        <div class="itemContainer">
                            {education.map((obj, index) =>
                                <div class="educationItem" key={index}>
                                    <aside>
                                        <h4>{obj.school}</h4>
                                        <p>{obj.city}</p>
                                        <p>{obj.yearFrom} - {obj.yearTo}</p>

                                    </aside>
                                    <article>
                                        <h4>{obj.title}</h4>
                                        <p>{obj.description}</p>
                                    </article>
                                    <br />
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="item8">
                        <h3 class="white_text">References</h3>
                        <ul>
                            {references.map((value, index) => (
                                <>
                                    <li class="white_text" key={index}>
                                        {value}
                                    </li>

                                </>))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );

}

export default memo(CV);

