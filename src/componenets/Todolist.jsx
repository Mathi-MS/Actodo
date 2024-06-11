import Todoitem from './Todoitem'

const Todolist = (props) =>{
    const list = props.list
    const setList = props.setList
    return(
        <div className="bg-[#BDB4EA] rounded-md flex-grow p-3">
            <h1 className="font-medium text-3xl">Today's Activity</h1>
            
            {
                list.length ===0 ?<p>you haven't added any activity yet</p>:""
            }
            {
                list.map((item,index)=>{
                    return(
                        <Todoitem key={index} id={item.id} activity={item.activity} index={index} list={list} setList={setList}></Todoitem>
                    )
                })
            }
        </div>
    )
}

export default Todolist