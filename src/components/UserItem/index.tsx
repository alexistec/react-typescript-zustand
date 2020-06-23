import React,{MouseEvent} from "react";
import {useHistory} from "react-router-dom";
import {User} from '../../zustand/types';

export default React.memo(function UserItem({
    address,
    company,
    email,
    id,
    name,
    phone,
    username,
    website}:User){
    
    const history = useHistory();

    const handleDetail = (event:MouseEvent) => {
        history.push(`/user-detail/${id}`)
    }    

    return(
        <div style={{margin:10,display:"flex",flexDirection:"column",border:"1px solid red",padding:10}} onClick={handleDetail}>
            <label>{name}</label>
            <label>{phone}</label>
            <label>{email}</label>
            <button style={{width:200,marginTop:10}}> Ver detalle</button>
        </div>
    )
})