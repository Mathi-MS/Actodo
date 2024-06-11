const Card = (props) => {
    return(
        <>
            <div style={{backgroundColor:props.bgcolor}} className='px-10 py-5 text-center text-white rounded-md flex-grow'>
              <h1 className='font-medium text-2xl'>{props.title}</h1>
              <p>{props.subtitle}</p>
            </div>
        </>
    )
}

export default Card
