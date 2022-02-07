import { useState, useEffect } from "react"
import Axios from "axios"
import "./home.css"
import "./btn.css"
import { useHistory } from "react-router-dom"
import AllMode from "./allMode"
import SearchMode from "./searchMode"
import IncomeMode from "./incomeMode"
import CheckMode from "./checkMode"

function Home(props) {
    const {logout}=props
    const {login,isLoggedIn}=props
    const [mode,setMode]=useState("all")
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)
    const history=useHistory()

    const decisionLogin = () => {
        Axios.post("https://bright-kurosaki-7872.lolipop.io/login", {
          email: email,
          password: password
        }).then((response) => {
          console.log(response.data)
          if (response.data.isLoggedIn) {
            login();
            var array = []
            var obj = {
              "isLoggedIn": true,
            }
            array.push(obj)
            var setjson = JSON.stringify(obj)
            window.localStorage.setItem("loggedData", setjson)
          } else {
            if (response.data.errorMsg === "email") {
              setEmailError(true)
            } else {
              setPassError(true)
            }
          }
        })
    }

    let currentMode;
    if(mode==="all"){
        currentMode=<AllMode />
    }else if(mode==="search"){
        currentMode=<SearchMode />
    }else if(mode==="income"){
        currentMode=<IncomeMode />
    }else{
        currentMode=<CheckMode />
    }
    return (
        <>
            {isLoggedIn ?
            <>
            <div className="header">
            <h1 className="title">管理者ページ</h1>
            <button className="log-out" onClick={logout}><i class="fas fa-sign-out-alt"> ログアウト</i></button>
            </div>
            <div className="mode">
                <ul>
                    <li><button onClick={()=>{setMode("all")}}>全ユーザー</button></li>
                    <li><button onClick={()=>{setMode("search")}}>ユーザー検索</button></li>
                    <li><button onClick={()=>{setMode("income")}}>年収別</button></li>
                    <li><button onClick={()=>{setMode("check")}}>チェック付き</button></li>
                    <div className="clear"></div>
                </ul>
            </div>
            {currentMode}
            </>
            :
            <>
          {emailError ?
            <p>メールアドレスが間違っています</p>
            : null}
          {passError ?
            <p>パスワードが間違っています</p>
            : null}

          <div className="input-wrapper">
            <div class="cp_iptxt">
              <input class="ef" type="email" placeholder="" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              <label>メール</label>
              <span class="focus_line"></span>
            </div>

            <div className="cp_iptxt">
              <input className="ef" type="password" placeholder="" value={password} onChange={(e) => { setPassword(e.target.value) }} />
              <label>パスワード</label>
              <span className="focus_line"></span>
            </div>
          </div>

          <button onClick={decisionLogin}>ログイン<i class="fas fa-sign-in-alt"></i></button>
        </>
}
        </>
    )
}
export default Home