import { memo } from "react";

const Data = () => {
    return (
        <>
            <form>
                <label>First Name <input type="text"></input></label>
            </form>
        </>
    );
}

export default memo(Data);