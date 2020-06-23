import React from "react";


import {UserPost as UserPostProps} from "../../zustand/types";

export default React.memo(function UserPost({title,body}:UserPostProps){
    return(
        <div style={{border:"1px solid #ccc",margin:10,paddingLeft:10}}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
})