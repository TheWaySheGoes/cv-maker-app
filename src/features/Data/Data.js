import { memo, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {
    setFName,
    setMName,
    setLName,
    setJobTitle,
    selectFName,
    selectMName,
    selectLName,
    selectJobTitle,
} from './dataSlice'

const Data = () => {
    const dispatch = useDispatch();

    const [fName, setFNameState] = useState(useSelector(selectFName));
    const [mName, setMNameState] = useState();
    const [lName, setLNameState] = useState();
    const [jobTitle, setJobTitleState] = useState();
    
    
    const saveRedux = (event) =>{
        event.preventDefault();
        dispatch(setFName(fName));
    }

    return (
        <>
            <form onSubmit={saveRedux}>
                <label>First Name: <input type="text" value={fName} onChange={(e) =>setFNameState(e.target.value)}/></label><br/>
                <label>Middle Name: <input type="text" value={mName} onChange={(e) =>setMNameState(e.target.value)}/></label><br/>
                <label>Last Name: <input type="text" value={lName} onChange={(e) =>setLNameState(e.target.value)}/></label><br/>
                <label>Job Title: <input type="text" value={jobTitle} onChange={(e) =>setJobTitleState(e.target.value)}/></label><br/>
               
                <button type="submit">save</button> 
            </form>
            <p>{fName}</p>
        </>
    );
}

export default memo(Data);