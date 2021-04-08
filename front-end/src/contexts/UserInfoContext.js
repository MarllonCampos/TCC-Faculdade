import { createContext, useState, useEffect } from 'react';
import Camera from '../assets/Camera.png'

export const UserInfoContext = createContext({})


export const UserInfoProvider = ({ children, ...rest }) => {
    const [userName, setUserName] = useState("");
    const [greenerys, setGreenerys] = useState([]);
    const [imagem, setImagem] = useState(Camera)
    const [foto, setFoto] = useState('')


    return (
        <UserInfoContext.Provider value={{ foto, setFoto, userName, setUserName, greenerys, setGreenerys, imagem, setImagem }}>

            {children}


        </UserInfoContext.Provider>


    )
}