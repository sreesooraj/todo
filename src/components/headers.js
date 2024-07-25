  
// import { useState } from "react"




//   function Header(props){

//     const [count,setCount] = useState(0)
//     const addCount = ()=>{setCount(count+1)}

//     return(
//     <div>
//     <h1>{props.name + count}</h1>

//     <button onClick={addCount}>sdzfgvdsfv</button>

//     </div>
          

//     )
//   }


//   export default Header


import {useEffect,useState } from "react"


function Employe(props){
   
    
  const [count,setState]=useState(0)
  const [count2,setState2]=useState(0)

  useEffect(()=>{console.log('mounting')
    return ()=>(console.log("unmounting"))
  },[count,count2])
  return(<div>
    <h1>hii sooraj</h1>
    <h1 onClick={()=>setState(count+1)}>{count}</h1>
    <h1 onClick={()=>setState2(count2+1)}>{count2}</h1>

  </div>)
}

export default Employe