const { useState } = require("react")




    const UseStatExample=()=>{

const [count,setCount]=useState(0)
const handleIncrement=()=>{
    setCount(count+1)
}

return(
    <>
    <h1>use state example{count}</h1>
    <button onClick={handleIncrement}>click to incremnt </button>
    </>
)






}
export default  UseStatExample






