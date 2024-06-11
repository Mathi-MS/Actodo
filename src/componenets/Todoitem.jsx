function Todoitem(props) {
    let handledelete = (removeid) => {
        const newlist = props.list.filter((data)=>{
            if(removeid == data.id){
                return false
            }
            else{
                return true
            }

        })
        props.setList(newlist)
    }
    return(
        <div className="flex justify-between mt-2">
            <p >{props.index+1}.{props.activity}</p>
            <button className="text-white bg-red-600 p-1 cursor-pointer" onClick={()=>{handledelete(props.id)}}>
                <i class="fa-solid fa-trash"></i></button>
        </div>
    )
}
export default Todoitem