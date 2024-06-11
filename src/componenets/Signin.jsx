import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Signin = (props) => {
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const[userinput,setuserinput]=useState("")
    const[passinput,setpassinput]=useState("")
    const[reguser,setreguser]=useState(true)



    function checkuser() {
        var found = false
        users.forEach((data) => {
            if(data.username == userinput && data.password == passinput){
                console.log("Correct");
                found = true
                navigate('/landing',{state:userinput})
            }
            if(found === false){
                setreguser(false)
                console.log("Wrong");
            }

        })
        setuserinput("")
        setpassinput("")
    }

    function handleuser(event) {
        setuserinput(event.target.value)
    }
    function handlepass(event) {
        setpassinput(event.target.value)
    }

    return(
        <>
            <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
            {
                reguser?<p>I help you manage your activities after you login:)</p>:<p className="text-red-600">Please Signup before you Login</p>
            }
            
            <input type="text" placeholder="Username" className="outline-none border rounded-md border-black px-2 py-1 mt-5 block" value={userinput} onChange={handleuser}/> 
            <input type="text" placeholder="Password"className="outline-none border rounded-md border-black px-2 mt-2 py-1 block" value={passinput} onChange={handlepass}/>
            <button className="bg-[#503ebb] text-white py-1 px-3 border border-[#503ebb] hover:bg-transparent hover:text-[#503ebb] mt-3 rounded-md" onClick={checkuser}>Login</button>
            <p className="mt-2">Don't have an account? <Link className="underline" to={'/signup'}>Sign Up</Link></p>
        </>
    )
}

export default Signin