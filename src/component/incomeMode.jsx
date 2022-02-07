import { useState,memo} from "react"
import Income from "./income";

const IncomeMode=memo(()=>{
    const [income,setIncome]=useState("")
    
    let page;
    if(income===""){
        page=<div className="income-list">
            <button onClick={()=>{setIncome("0")}}>0~99万円</button>
            <button onClick={()=>{setIncome("1")}}>100~199万円</button>
            <button onClick={()=>{setIncome("2")}}>200~299万円</button>
            <button onClick={()=>{setIncome("3")}}>300~399万円</button>
            <button onClick={()=>{setIncome("4")}}>400~499万円</button>
            <button onClick={()=>{setIncome("5")}}>500~599万円</button>
            <button onClick={()=>{setIncome("6")}}>600~699万円</button>
            <button onClick={()=>{setIncome("7")}}>700~799万円</button>
            <button onClick={()=>{setIncome("8")}}>800~899万円</button>
            <button onClick={()=>{setIncome("9")}}>900~999万円</button>
            <button onClick={()=>{setIncome("10")}}>1000万円~</button>
        </div>
    }else if(income==="0"){
        page=<Income income={0}/>
    }else if(income==="1"){
        page=<Income income={1}/>
    }else if(income==="2"){
        page=<Income income={2}/>
    }else if(income==="3"){
        page=<Income income={3}/>
    }else if(income==="4"){
        page=<Income income={4}/>
    }else if(income==="5"){
        page=<Income income={5}/>
    }else if(income==="6"){
        page=<Income income={6}/>
    }else if(income==="7"){
        page=<Income income={7}/>
    }else if(income==="8"){
        page=<Income income={8}/>
    }else if(income==="9"){
        page=<Income income={9}/>
    }else if(income==="10"){
        page=<Income income={10}/>
    }
    return(
        <div className="home-wrapper">
            <h3>年収別ユーザーリスト</h3>
            {income!=="" ?
             <button onClick={()=>{setIncome("")}}>戻る</button>
            :
            null}

            {page} 
        </div>
    )
})
export default IncomeMode