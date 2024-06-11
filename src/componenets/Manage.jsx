import { useState } from "react"

const Manage = (props) =>{
    const [inputval,setinputval] =useState("")
    const list = props.list
    const setList = props.setList

    const handleinput = (event) =>{
        setinputval(event.target.value)
    }
    const handleadd = () =>{
        if(inputval.length>=1){
            setList([...list,{id:list.length+1,activity:inputval}])
            setinputval("")
        }
    }

    return(
        <div>
            <h1 className="text-3xl font-medium">Manage Activities</h1>
            <input value={inputval} onChange={handleinput} type="text" placeholder="Next Activity ?" className="border-2 border-black outline-none py-1 px-2 mt-5"/>
            <button onClick={handleadd} className="bg-black text-white px-3 py-1 border-2 border-black">Add</button>
        </div>
    )
} 

export default Manage