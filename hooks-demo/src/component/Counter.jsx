import React from "react";

const Counter = () => {
    const [count, setCount] = React.useState(1);
    function changeCount(val){
        setCount(count+val);
        console.log(count);
    }
    return(
        <>
        <div>Counter:{count}</div>
        {/* {count>0 && count<=10 && <button onClick={add}>ADD</button>} */}
        <button onClick={() => changeCount(+1)}>ADD</button>
        <button onClick={() => changeCount(-1)}>SUB</button>
        </>
    ) 
}
export {Counter};