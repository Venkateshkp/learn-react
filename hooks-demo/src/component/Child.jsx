import React from "react";
// import parent from "./component/Parent.jsx";

// const Child = ({values}) => {
//     console.log(values);
//     return <div>child</div>
// }
// export default Child;
const Child = (props) => {
    return (
        <>
        <div>Child</div>
        console.log(child);
        {props.children}
        </>
    )
}
export default Child;