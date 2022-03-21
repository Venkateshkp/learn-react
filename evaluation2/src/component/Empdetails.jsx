import React from "react";

const Empdetails = () => {
    return(
        // <input placeholder="jenny"></input>
        <div>
            {/* <input placeholder="type something"></input> */}
            <input placeholder="name"></input>
            <br></br>
            <input placeholder="gender"></input>
            <br></br>
            <input placeholder="role"></input>
            <br></br>
            <input placeholder="department"></input>
            <br></br>
            <input placeholder="salary"></input>
            <br></br>
            <button>Add Employees</button>
            <br></br>
            <hr></hr>
            <button>Show All Department</button>
            <button>Show Marketing</button>
            <button>Show HR</button>
            <button>Show IT</button>
            <button>Show Finance</button>
            <br></br>
            <button>Sort by salary ascending</button>
            <br></br>
            <br></br>
            <br></br>
            <button>Sort by salary descending</button>
        </div>
    );
}

export {Empdetails};