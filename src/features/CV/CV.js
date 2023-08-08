import { memo, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {
    selectFName,
    selectMName,
    selectLName,
    selectJobTitle
} from '../Data/dataSlice'

const CV = () => {
    const [fName, setFNameState] = useState(useSelector(selectFName));

    


    return (
        <>
            <h1>CV</h1>
            <p>{useSelector(selectFName)}</p>
        </>
    );

}

export default memo(CV);