import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type PropsWithChildren } from "react";
export let AuthContext=createContext(null);
export default function AuthContextProvider(props:PropsWithChildren){
    const [loginData,setLoginData]=useState({});
    const saveLoginData=()=>{
        let encodedToken=localStorage.getItem("token");
        console.log(encodedToken);
        let decodedToken=jwtDecode(encodedToken);
        setLoginData(decodedToken);
    }
    useEffect(()=>{
        if (localStorage.getItem("token"))
        saveLoginData()
        
    },[])
    return <AuthContext.Provider value={{saveLoginData,loginData}}>
        {props.children}
        </AuthContext.Provider>
}