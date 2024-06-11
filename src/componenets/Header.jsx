import { useLocation } from "react-router-dom"


const Header = () =>{
    var location = useLocation()
    var userinput = location.state
    return(
        <>
            <h1 className="text-3xl font-medium">Hello {userinput}👋</h1>
            <p>I help you to manage your activity : )</p>
        </>
    )
}

export default Header