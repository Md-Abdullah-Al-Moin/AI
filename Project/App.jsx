import './App.css'
import Card from './Card'
import Data from './data.json'
import {v4 as uuidv4} from 'uuid'
function App() {
  // console.log(uuidv4())
 //for (let i=0; i<Data.length ; i++){items.push( <Card titletext={Data[i].title} description={Data[i].desc}/> )}
 //items = Data.map((items)=><Card titletext={items.title} description={items .desc}/>)
  return (
    <>
     <h1 className='heading'>E-commerce online</h1>
      {/* {items} */}
      {/* {Data.map((item)=><Card key={uuidv4()} titleText={item.title} description={item.desc}/>)} */}
      
      {Data.map((data)=>
      <Card key={uuidv4()} titleText={data.title} url={data.url} price={data.price} desc={data.desc}></Card>
       
      )}
    </>
  )
}


export default App;