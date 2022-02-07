import { useState, useEffect, memo } from "react"
import { useLocation ,useHistory} from "react-router-dom"
import Axios from "axios"
const UserInfo = memo((props) => {
    const {logout}=props
    const [wifeInfo, setWifeInfo] = useState({ age: 0, taxIncome: 0, taxIncome60: 0, rate: 1, maxAge1: 0 ,afterIncome:0, pension: 0 })
    const [huyoList, setHuyoList] = useState([])
    const [payList, setPayList] = useState([])
    const [incomeList, setIncomeList] = useState([])
    const {state}=useLocation();
    const history=useHistory();

    /*ユーザーIDから配偶者、扶養、支出、その他収入情報を所得 */
    useEffect(() => {
        if (state.hasWife === 1) {
            Axios.get(`https://bright-kurosaki-7872.lolipop.io/getWifeInfo/${state.userId}`).then((response) => {
                setWifeInfo(response.data[0])
                console.log(response.data)
            })
        }
        Axios.get(`https://bright-kurosaki-7872.lolipop.io/getHuyoList/${state.userId}`).then((response) => {
            setHuyoList(response.data)
            console.log(response.data)
        })

        Axios.get(`https://bright-kurosaki-7872.lolipop.io/getPayList/${state.userId}`).then((response) => {
            setPayList(response.data)
            console.log(response.data)
        })

        Axios.get(`https://bright-kurosaki-7872.lolipop.io/getIncomeList/${state.userId}`).then((response) => {
            setIncomeList(response.data)
            console.log(response.data)
        })
    }, [state.hasWife, state.userId])

    const goTransition=()=>{
        history.push({pathname:"/life-admin-demo/transition",state:{
            userInfo:state,
            wifeInfo:wifeInfo,
            huyoList:huyoList,
            payList:payList,
            incomeList:incomeList
        }})
    }

    return (
        <>  
            <div className="header">
                <h1 className="title">管理者ページ</h1>
                <button className="log-out" onClick={logout}><i class="fas fa-sign-out-alt"> ログアウト</i></button>
            </div>
            <h1 className="info-title">{state.name}さんの情報</h1>
            <div className="page-wrapper info-contents">
            <h3>本人情報</h3>
            <p>お名前:{state.name}</p>
            <p>メールアドレス:{state.email}</p>
            <p>年齢:{state.age}歳</p>
            <p>年収:{state.taxIncome}万円</p>
            <p>60~65歳の年収:{state.taxIncome60}万円</p>
            <p>昇給率:{state.rate}</p>
            <p>最大昇給年齢:{state.maxAge1}</p>
            <p>最大年収:{state.afterIncome}</p>
            <p>年金:{state.pension}万円</p>
            <p>貯金残高:{state.saving}万円</p>
            <h3>配偶者情報</h3>
            {state.hasWife === 1 ?
                <>
                    <p>年齢:{wifeInfo.age}歳</p>
                    <p>年収:{wifeInfo.taxIncome}万円</p>
                    <p>60~65歳の年収:{wifeInfo.taxIncome60}万円</p>
                    <p>昇給率:{wifeInfo.rate}</p>
                    <p>最大昇給年齢:{wifeInfo.maxAge1}</p>
                    <p>最大年収:{wifeInfo.afterIncome}</p>
                    <p>年金:{wifeInfo.pension}万円</p>
                </>
                :
                <p>配偶者：なし</p>}
            <h3>扶養情報</h3>
            {huyoList.map((data, index) => {
                if (data.type === "child") {
                    return (
                        <div key={index}>
                            <label>種類:~22歳扶養/年齢{data.childAge}歳/控除対象者:
                                {data.self === 0 ?
                                    <span>本人</span>
                                    :
                                    <span>配偶者</span>}
                            </label>
                            <br />
                        </div>

                    )
                } else if (data.type === "wife") {
                    return (
                        <div key={index}>
                            <label>種類:配偶者/人数:1/控除対象者:
                                {data.self === 0 ?
                                    <span>本人</span>
                                    :
                                    <span>配偶者</span>}
                            </label>
                            <br />
                        </div>
                    )
                } else if (data.type === "other") {
                    return (
                        <div key={index}>
                            <label>種類:その他扶養/人数:{data.numberOfHuyo}/控除対象者:
                                {data.self === 0 ?
                                    <span>本人</span>
                                    :
                                    <span>配偶者</span>}
                            </label>
                            <br />
                        </div>
                    )
                } else if (data.type === "senior1") {
                    return (
                        <div key={index}>
                            <label>種類:老人同居/人数:{data.numberOfHuyo}/控除対象者:
                                {data.self === 0 ?
                                    <span>本人</span>
                                    :
                                    <span>配偶者</span>}
                            </label>
                            <br />
                        </div>
                    )
                } else {
                    return (
                        <div key={index}>
                            <label key={index}>種類:老人別居/人数:{data.numberOfHuyo}/控除対象者:
                                {data.self === 0 ?
                                    <span>本人</span>
                                    :
                                    <span>配偶者</span>}
                            </label>
                            <br />
                        </div>
                    )
                }

            })}
            <h3>支出情報</h3>
            {payList.map((data, index) => {
                let typeLabel1;
                if (data.type === "house") {
                    typeLabel1 = "住宅ローン、家賃"
                } else if (data.type === "car") {
                    typeLabel1 = "車（ローン）"
                } else if (data.type === "nomal") {
                    typeLabel1 = "一般支出"
                } else if (data.type === "sisanTax") {
                    typeLabel1 = "固定資産税"
                } else if (data.type === "seimeiHoken") {
                    typeLabel1 = "生命保険"
                } else if (data.type === "study") {
                    typeLabel1 = "学費など"
                } else if (data.type === "other") {
                    typeLabel1 = "その他の支出"
                } else if (data.type === "living") {
                    typeLabel1 = "65歳までの月々の生活費"
                } else {
                    typeLabel1 = "65歳以降の月々の生活費"
                }
                let typeLabel2;
                if (data.type2 === "every") {
                    typeLabel2 = "毎年"
                } else if (data.type2 === "before") {
                    typeLabel2 = "まで毎年"
                } else if (data.type2 === "after") {
                    typeLabel2 = "から毎年"
                } else {
                    typeLabel2 = "の時に1回限り"
                }
                return (
                    <div key={index}>
                        <label>種類:{typeLabel1}/ </label>
                        <label>金額（年間）:{data.charge}万円/ </label>
                        {data.type2 === "every" ?
                        <label>期間 : {typeLabel2}</label> :
                        <label>期間 : {data.count}歳{typeLabel2}</label>
                        }
                        <br />
                    </div>
                )

            })}

            <h3>その他収入情報</h3>
            {incomeList.map((data, index) => {
                let typeLabel1;
                if (data.type === "retire") {
                    typeLabel1 = "退職金（万円）"
                } else if (data.type === "other") {
                    typeLabel1 = "その他収入（万円）"
                } else if (data.type === "yachin") {
                    typeLabel1 = "家賃収入（万円）"
                } else if (data.type === "nenkin") {
                    typeLabel1 = "個人年金（万円）"
                } else if (data.type === "nenkinW") {
                    typeLabel1 = "個人年金配偶者（万円）"
                } else {
                    typeLabel1 = "その他（万円）"
                }
            
                let typeLabel2;
                if (data.type2 === "every") {
                    typeLabel2 = "毎年"
                } else if (data.type2 === "before") {
                    typeLabel2 = "まで毎年"
                } else if (data.type2 === "after") {
                    typeLabel2 = "から毎年"
                } else {
                    typeLabel2 = "の時に1回限り"
                }
                return (
                    <div key={index}>
                        <label>種類:{typeLabel1}/ </label>
                        <label>金額（年間）:{data.charge}万円/ </label>
                        {data.type2 === "every" ?
                        <label>期間 : {typeLabel2}</label> :
                        <label>期間 : {data.count}歳{typeLabel2}</label>
                        }
                        <br />
                    </div>
                )
            })}
            <br />

        </div>
            <div className="button-wrapper">
                    <>
                        <div onClick={()=>{history.goBack()}}><i class="fas fa-caret-square-left"></i></div>
                        <button onClick={goTransition}>推移ページを見る</button>
                    </>
            </div>
    </>
    )
})
export default UserInfo