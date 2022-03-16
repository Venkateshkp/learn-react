import React from "react";
import { List } from "./List.jsx";
import {ListRow} from "./ListRow.jsx"

class AnotherList extends React.Component{
    render(){
        return (
            <ol>
                <ListRow/>
                <ListRow/>
                <ListRow/>
            </ol>            
        )
    }
}
export default AnotherList;