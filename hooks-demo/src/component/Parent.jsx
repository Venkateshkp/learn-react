import React from "react";
import Child from "./Child";
const Parent = () => {
    return (
        <>
        <h1>Parent component</h1>
        <Child values = {{name: "venkat"}}/>
        <Child>
            <div>Hello</div>
        </Child>
        </>
    );
}

export {Parent};