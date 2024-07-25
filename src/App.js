import './App.css';
import { useState } from 'react';

function App() {
const [toDo,setToDo] = useState("")
const [toDos,setToDos] = useState([])
return (

  <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input  onChange={(e)=>{setToDo({text:e.target.value,status:false,id:Date.now()})}} type="text" placeholder="🖊️ Add item..." />
        
        <i onClick={()=>setToDos([...toDos,{text:toDo.text,status:toDo.status,id:Date.now()}])}  className="fa fa-plus"></i>
      </div>
      <div className="todos">


      {toDos.map((obj)=>{return <div className="todo">
<div className="left">
  <input onClick={(e)=>{
    console.log(e.target.checked,"fghrtyhjn")
    setToDos(
    toDos.filter((obj2)=>{
      if (obj2.id==e.target.id){
        console.log(e.target.value)
        obj2.status=e.target.checked
        
     

      } return obj2
    }))


  }} value = {obj.status} type="checkbox" name="" id={obj.id}/>
  <p>{obj.text}</p>
</div>
<div className="right">
  <i onClick={(e)=>setToDos(toDos.filter((i)=>{
    console.log(i.id,e.target.id,"ssssssssssssssssssssssssss")
    if (i.id!=e.target.id){
      return i
    }
  }))} className="fa fa-times" id={obj.id}></i>
</div>
</div>})}
  <div>
        {toDos.map((obj)=>{
          console.log(obj,"dxthdth")
          console.log(obj.status
            ,"sdfffffffffffffffffffffffffff")
          if (obj.status===true){
          return <h1>{obj.text}</h1>}return null}
          )}
          
        
        
        </div>
        
      </div>
    </div>
 
)
}

export  {App};


