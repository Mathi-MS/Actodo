import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Signup = (props) => {
    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers

    const[signinuser,setsigninuser] =useState("")
    const[signinpass,setsigninpass] =useState("")
    const[confirmpass,setconfirmpass] =useState("")
    const[confirmpasscheck,setconfirmpasscheck] = useState(true)

    const handleuser = (event) =>{
        setsigninuser(event.target.value)
    }
    const handlepass = (event) =>{
        setsigninpass(event.target.value)
    }
    const handleconpass = (event) =>{
        setconfirmpass(event.target.value   )
    }
    const handlesignup = () =>{
        setconfirmpasscheck(false)
        if(signinpass === confirmpass){
            setconfirmpasscheck(true)
            if(signinuser.length>=1 && signinpass.length>=1){
                setusers([...users,{username:signinuser,password:signinpass}])
                console.log(users);
                setsigninuser("")
                setsigninpass("")
                setconfirmpass("")
                navigate("/")
            }
        }
        else{
            setconfirmpasscheck(false)
        }

    }




    return(
        <>
            <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
            <p>Sign up here:)</p>
            <input type="text" placeholder="Username" className="outline-none border rounded-md border-black px-2 py-1 mt-5 block" value={signinuser} onChange={handleuser}/> 
            <input type="text" placeholder="Password"className="outline-none border rounded-md border-black px-2 mt-2 py-1 block" value={signinpass} onChange={handlepass} />
            <input type="text" placeholder="Confirm Password"className="outline-none border rounded-md border-black px-2 mt-2 py-1 block" value={confirmpass} onChange={handleconpass} />
            {
                confirmpasscheck?"":<p className="text-red-600">Password Doesn't Match</p>
            }
            <button className="bg-[#FCA201] text-white py-1 px-3 border border-[#FCA201] hover:bg-transparent hover:text-[#FCA201] mt-3 rounded-md" onClick={handlesignup}>Sign Up</button>
            <p className="mt-2">Already have an account? <Link to={"/"} className="underline">Login</Link></p>
        </>
    )
}

export default Signup