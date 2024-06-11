import Manage from './Manage'
import Todolist from './Todolist'
import { useState } from "react"



const Todocontainer = () =>{
    const [list,setList] = useState(
        [
            {
                id:1,
                activity:"Learn React"
            },
            {
                id:2,
                activity:"Code React"
            }
        ])
    return(
        <div className='flex align-middle gap-8 flex-wrap'>
            <Manage list={list} setList={setList}></Manage>
            <Todolist list={list} setList={setList}></Todolist>
        </div>
    )
}

export default Todocontainer