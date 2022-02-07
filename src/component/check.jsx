import {useState,memo, useEffect} from "react"
import Axios from "axios"
import Image1 from "./1.png"
import Image2 from "./2.png"
const Check=memo((props)=>{
    const {userId,check}=props
    const [isCheck,setIsCheck]=useState(false)
    
    useEffect(()=>{
        if(check===1){
            setIsCheck(true)
        }
    },[])

    const deleteCheck=()=>{
        setIsCheck(false)
        Axios.post(`https://bright-kurosaki-7872.lolipop.io/deletecheck/${userId}`)
    }
    const addCheck=()=>{
        setIsCheck(true)
        Axios.post(`https://bright-kurosaki-7872.lolipop.io/addcheck/${userId}`)
    }
    return(
        <>
        {isCheck ?
        <button onClick={deleteCheck} className="check"><img alt="" src={Image1}/></button>
        :
        <button onClick={addCheck} className="check"><img alt="" src={Image2}/></button>
        }
        </>
    )
})
export default Check