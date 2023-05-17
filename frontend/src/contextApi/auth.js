import { useContext, useEffect, useState } from "react"
const AuthContext = useContext()

const authProvider =({children})=>{
    const [auth,setAuth]= useState({
        user:'',
        token:''
    })
    return(


<AuthContext.provider>
    {children}
</AuthContext.provider>
    )
}

const useAuth = useContext(AuthContext)


export {useAuth,authProvider}