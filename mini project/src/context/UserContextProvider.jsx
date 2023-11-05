import React from "react";
import UserContext from "./UserContext";




const UserContextProdvider = (props)=>
{
    console.log("debug")
    const [user , setUser] = React.useState(null)

    const value = {user , setUser}
    return(
        <UserContext.Provider value={value}>

        {props.childern}

        </UserContext.Provider>
    )
}


export default UserContextProdvider