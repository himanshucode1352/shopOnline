import { createContext, useContext, useEffect, useState } from "react"
const AuthContext = createContext()

const AuthProvider =({children})=>{
    const [auth,setAuth]= useState({
        user:'',
        token:''
    })
    return(


<AuthContext.Provider value={[auth,setAuth]}>
    {children}
</AuthContext.Provider>
    )
}

const useAuth = useContext(AuthContext)


export {useAuth,AuthProvider}