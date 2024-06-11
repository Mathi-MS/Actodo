import Card from './Card'
import Header from './Header'
import Todocontainer from './Todocontainer'


const Landing = () => {

    return(
        <>
        <Header></Header>
          <div className='flex justify-between gap-8   my-5 flex-wrap'>
            <Card bgcolor={"#8272DA"} title={"32°"} subtitle={"Villupuram"}></Card>
            <Card bgcolor={"#FD6663"} title={"June 11"} subtitle={"11:14:17"}></Card>
            <Card bgcolor={"#FCA201"} title={"Build using"} subtitle={"React"}></Card>
          </div>
        <Todocontainer></Todocontainer>
        </>
    )
}

export default Landing