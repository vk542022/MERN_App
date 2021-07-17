import React,{useState,useEffect} from 'react'

export const Home = () => {

    const [userName, setUserName] = useState('')
    const [show, setShow] = useState(false)

    const callHomePage = async () =>{
        try {
            const res = await fetch('/getdata',{
                method:'GET',
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data = await res.json();
            console.log(data)
            setUserName(data.name)
            if(!res.status === 200 ){
                const error = new Error(res.error)
                throw error
            }
            else{
                console.log("success")
            }

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        callHomePage();
    }, [])

    return (
        <div style={{position: "absolute",top: "45%",left: "35%"}}>
            <p className="text-center" style={{color:"white"}}>WELCOME</p>
            <h1 className="text-center" style={{color:"white"}}>Hii, {userName}</h1>
            <h3 style={{color:"white"}}>We Are The MERN Developer</h3>
        </div>
    )
}
