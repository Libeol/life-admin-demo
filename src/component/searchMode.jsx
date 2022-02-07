import { useState,memo} from "react"
import Axios from "axios"
import { useHistory } from "react-router-dom"
import Check from "./check"

const SearchMode=memo(()=>{
    const [userList, setUserList] = useState([])
    const [email,setEmail]=useState("")
    const history=useHistory()
    
    const selectUser=(name,email, userId, age, taxIncome, taxIncome60, rate, maxAge1,afterIncome, pension, hasWife, saving)=>{
        history.push({pathname:"/life-admin-demo/userInfo",state:{
            name:name,
            email:email,
            userId:userId,
            age:age,
            taxIncome:taxIncome,
            taxIncome60:taxIncome60,
            rate:rate,
            maxAge1:maxAge1,
            afterIncome:afterIncome,
            pension:pension,
            hasWife:hasWife,
            saving:saving
        }})
    }

    const search=()=>{
        Axios.post("https://bright-kurosaki-7872.lolipop.io/search",{
            email:email
        }).then((response) => {
            setUserList(response.data)
            console.log(response.data)
        })
    }

    return(
        <div className="home-wrapper">
            <h2 className="home-title">ユーザー検索(メールアドレス)</h2>
            <input value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
            <button onClick={search}>検索</button>
            {userList.length>0 ?
            <>
            <table className="home-table">
                <tr className="table-header">
                    <br/>
                    <th>お名前</th>
                    <th>メールアドレス</th>
                    <th>年収</th>
                    <th>ご利用日付</th>
                </tr>
                {userList.map((data, index) => {
                    return (
                        <tr className="table-row" key={index} >
                            <td className="table-data2"><Check userId={data.userId} check={data.isCheck}/></td>
                            <td className="table-data" onClick={()=>{selectUser(data.name,data.email, data.userId, data.age, data.taxIncome, data.taxIncome60, data.rate, data.maxAge1,data.afterIncome, data.pension, data.hasWife, data.saving)}}>{data.name} 様</td>
                            <td className="table-data" onClick={()=>{selectUser(data.name,data.email, data.userId, data.age, data.taxIncome, data.taxIncome60, data.rate, data.maxAge1,data.afterIncome, data.pension, data.hasWife, data.saving)}}>{data.email}</td>
                            <td className="table-data" onClick={()=>{selectUser(data.name,data.email, data.userId, data.age, data.taxIncome, data.taxIncome60, data.rate, data.maxAge1,data.afterIncome, data.pension, data.hasWife, data.saving)}}>{data.taxIncome}</td>
                            <td className="table-data">{data.temp_date}</td>
                        </tr>
                    )
                })}
            </table>
            </>
            :
            <h1>一致するユーザーデータはありません。</h1>
            }
            
        </div>
    )
})
export default SearchMode