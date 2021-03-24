import { createContext, useState, useEffect } from 'react';


export const UserInfoContext = createContext({})


export const UserInfoProvider = ({ children, ...rest }) => {
    const [userName, setUserName] = useState("");
    const [greenerys, setGreenerys] = useState([]);
    return (
        <UserInfoContext.Provider value={{ userName, setUserName, greenerys, setGreenerys }}>

            {children}


        </UserInfoContext.Provider>


    )
}