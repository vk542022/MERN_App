import React,{useEffect , useContext} from 'react'
import { useHistory } from 'react-router'
import {userContext} from '../App'

export const Logout = () => {

    const {state,dispatch} = useContext(userContext)

    const history = useHistory()
    useEffect(()=>{
        fetch('/logout',{
            method:'GET',
            headers:{
                Accept:'application/json',
                "Content-Type":'application/json'
            },
            credentials:'include'
        }).then((res)=>{
            dispatch({type:'USER',payload:false})
            history.push('/login',{replace:true})
            if(res.status != 200 ){
                const error = new Error(res.error)
                throw error
            }
        }).catch((error)=>{
            console.log(error);
        })
    })
    return (
        <>
          <h1 className="text-center mt-5">Logout...</h1>  
        </>
    )
}
