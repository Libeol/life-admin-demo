import { useEffect, useState } from "react"
import "./transition_module.css"
import { useLocation ,useHistory} from "react-router-dom"
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import MaterialTable from "material-table";

function Transition(props) {
    const {logout}=props
    const {state}=useLocation();
    const info=state.userInfo;
    const wifeInfo=state.wifeInfo;
    const huyoList=state.huyoList;
    const payList=state.payList;
    const incomeList=state.incomeList
    const history=useHistory();
    //順番に その人の情報、配偶者情報、現在の貯蓄、扶養リスト、支出リスト、その他収入リスト、万能関数
    //万能関数の引数に適切な値を突っ込めばその年の手取りが出るようになってる
    const dicisionInfo = (taxIncome1, taxIncome60, rate, maxAge1, afterIncome, pension, huyoList, who, age, year) => {
        let taxIncome = 0
        //console.log(`このとき${Number(age) + Number(year)}歳です`)
        //もし65歳以上だったら年金を返す
        if (Number(age) + Number(year) > 65) {
            return (
                [{ tedori: Number(pension) * 12 }]
            )
        } else {
            if (Number(age) + Number(year) < 60) {//<=60歳未満だったら年収の分岐が始まる
                taxIncome=taxIncome1
            } else {
                taxIncome = taxIncome60//<=60~65だったら60歳の収入を使う
            }
            console.log(Number(age) + Number(year), taxIncome)

            let kyuyoIncome = 0//<=給与所得を入れる
            let kisoKojo = 0//<=基礎控除を入れる
            let wifeKojo = 0//<=配偶者控除
            let childrenHuyo = 0//<=子供の扶養を入れる
            let otherHuyo = 0//<=老人の扶養とその他扶養を入れる
            let huyoKojoSum1 = 0//<=子供年寄りその他<=計算例の時に使う
            let huyoKojoSum2 = 0//<=扶養控除の合計額を入れる
            let shakaiHoken = 0//<=社会保険を入れる
            let seimeiHoken = 5//<=一律5万円でいい
            let kazeiIncome = 0//<=課税所得を入れる

            //給与所得の計算
            if (taxIncome < 162.5) {
                kyuyoIncome = taxIncome * 1 - 55
            } else if (taxIncome >= 162.5 && taxIncome < 180) {
                kyuyoIncome = taxIncome * 0.6 - 10
            } else if (taxIncome >= 180 && taxIncome < 360) {
                kyuyoIncome = taxIncome * 0.7 - 8
            } else if (taxIncome >= 360 && taxIncome < 660) {
                kyuyoIncome = taxIncome * 0.8 - 44
            } else if (taxIncome >= 660 && taxIncome < 850) {
                kyuyoIncome = taxIncome * 0.9 - 110
            } else {
                kyuyoIncome = taxIncome * 1 - 195
            }

            /*基礎控除の計算 */
            if (taxIncome <= 2400) {
                kisoKojo = 48
            } else if (taxIncome > 2400 && taxIncome <= 2450) {
                kisoKojo = 32
            } else if (taxIncome > 2450 && taxIncome <= 2500) {
                kisoKojo = 16
            } else {
                kisoKojo = 0
            }

            /*扶養額の計算 */
            if (huyoList.length !== 0) {
                huyoList.forEach((data) => {
                    if (data.self === who) {
                        if (data.type === "wife") {
                            wifeKojo += 38;
                        } else if (data.type === "child") {
                            console.log(`このお子さんはこの時${Number(data.childAge) + year}歳です`)
                            if (Number(data.childAge) + year >= 16 && Number(data.childAge) + year <= 18) {
                                childrenHuyo += 38;
                            } else if (Number(data.childAge) + year >= 19 && Number(data.childAge) + year <= 22) {
                                childrenHuyo += 63;
                            } else {
                            }
                        } else if (data.type === "other") {
                            otherHuyo += 38 * Number(data.numberOfHuyo);
                        } else if (data.type === "senior1") {
                            otherHuyo += 58 * Number(data.numberOfHuyo);
                        } else {
                            otherHuyo += 48 * Number(data.numberOfHuyo);
                        }
                    }
                })
            }


            /* 計算例で使う扶養の合計の計算*/
            huyoKojoSum1 = childrenHuyo + otherHuyo


            /*扶養控除の合計額の計算 */
            huyoKojoSum2 = kisoKojo + wifeKojo + huyoKojoSum1
            /*社会保険の計算*/
            if (taxIncome <= 399) {
                shakaiHoken = 10 + 0
            } else if (taxIncome > 399 && taxIncome <= 499) {
                shakaiHoken = 10 + 40
            } else if (taxIncome > 499 && taxIncome <= 599) {
                shakaiHoken = 10 + 50
            } else if (taxIncome > 599 && taxIncome <= 699) {
                shakaiHoken = 10 + 60
            } else if (taxIncome > 699 && taxIncome <= 799) {
                shakaiHoken = 10 + 70
            } else if (taxIncome > 799 && taxIncome <= 899) {
                shakaiHoken = 10 + 80
            } else if (taxIncome > 899 && taxIncome <= 999) {
                shakaiHoken = 10 + 90
            } else if (taxIncome > 999 && taxIncome <= 1099) {
                shakaiHoken = 10 + 100
            } else if (taxIncome > 1099 && taxIncome <= 1199) {
                shakaiHoken = 10 + 105
            } else if (taxIncome > 1199 && taxIncome <= 1299) {
                shakaiHoken = 10 + 110
            } else if (taxIncome > 1299 && taxIncome <= 1399) {
                shakaiHoken = 10 + 120
            } else if (taxIncome > 1399 && taxIncome <= 1499) {
                shakaiHoken = 10 + 125
            } else if (taxIncome > 1499 && taxIncome <= 1599) {
                shakaiHoken = 10 + 130
            } else {
                shakaiHoken = 10 + 135
            }

            /*課税所得の計算 */
            kazeiIncome = kyuyoIncome - shakaiHoken - seimeiHoken - huyoKojoSum2

            /*ここまでで入力ページに必要なデータは作れたここからは参考計算ページ */
            /*住民税額控除のそれぞれの設定 */
            let seimeiHokenJ = seimeiHoken * 0.7 //生命保険
            let wifeKojoJ = 0;//<=配偶者控除の設定
            if (wifeKojo !== 0) {
                wifeKojoJ = 33
            } else {
                wifeKojoJ = 0
            }
            let kisoKojoJ = 0;//<=基礎控除の設定
            if (kisoKojo !== 0) {
                kisoKojoJ = kisoKojo - 5.0
            } else {
                kisoKojoJ = 0
            }

            /*住民税控除の合計 */
            let jKojoSum = shakaiHoken + seimeiHokenJ + wifeKojoJ + kisoKojoJ

            /*申告前の税額 所得税の方はkazeiIncomeでいい*/
            let kazeiIncome2 = kyuyoIncome - jKojoSum

            let sTax = 0;//<=所得税の設定
            if (kazeiIncome < 195) {
                sTax = (kazeiIncome * 0.05) * 1.021
            } else if (kazeiIncome >= 195 && kazeiIncome < 330) {
                sTax = (kazeiIncome * 0.1 - 9.75) * 1.021
            } else if (kazeiIncome >= 330 && kazeiIncome < 695) {
                sTax = (kazeiIncome * 0.2 - 42.75) * 1.021
            } else if (kazeiIncome >= 695 && kazeiIncome < 900) {
                sTax = (kazeiIncome * 0.23 - 63.6) * 1.021
            } else if (kazeiIncome >= 900 && kazeiIncome < 1800) {
                sTax = (kazeiIncome * 0.33 - 153.6) * 1.021
            } else if (kazeiIncome >= 1800 && kazeiIncome < 4000) {
                sTax = (kazeiIncome * 0.4 - 279.6) * 1.021
            } else {
                sTax = (kazeiIncome * 0.45 - 479.6) * 1.021
            }
            sTax = Math.round(sTax * 10) / 10
            let jTax = kazeiIncome2 * 0.1//<=住民税の設定
            jTax = Math.round(jTax * 10) / 10
            let taxSum = sTax + jTax //<=所得税と住民税の合計の設定
            let tedori = taxIncome - shakaiHoken - taxSum//<=手取りの設定

            if (Number(age) + Number(year) < Number(maxAge1)) {
                tedori = tedori * Math.pow(Number(1 + (rate / 100)), Math.floor(Number(year) / 5))
            } else {
                tedori = tedori * Math.pow(Number(1 + (rate / 100)), Math.floor((Number(maxAge1) - Number(age)) / 5))
            }

            if (tedori > afterIncome && afterIncome !== 0 && afterIncome !== "0") {
                tedori = afterIncome
            }

            if (taxIncome <= 103) {
                tedori = taxIncome
            }
            /*
            console.log([
                { taxIncome: taxIncome, kyuyoIncome: kyuyoIncome, tedori: tedori },//<=[0]
                { kisoKojo: kisoKojo, shakaiHoken: shakaiHoken, kazeiIncome: kazeiIncome },//<=[1]
                {
                    shakaiHoken: shakaiHoken,//<=[2]
                    seimeiHoken: Number(seimeiHoken),
                    jisinKojo: 0,
                    wifeKojo: wifeKojo,
                    huyoKojoSum1: huyoKojoSum1,
                    kisoKojo: kisoKojo
                },
                {
                    shakaiHoken: shakaiHoken,//<=[3]
                    seimeiHokenJ: seimeiHokenJ,
                    jisinKojoJ: 0,
                    wifeKojoJ: wifeKojoJ,
                    kisoKojoJ: kisoKojoJ
                }
            ])*/
            return (
                /*情報の詰まったオブジェクト配列を返す 手取りは　○○[0].tedoriでとりだせるよん！*/
                [
                    { taxIncome: Number(taxIncome), kyuyoIncome: kyuyoIncome, tedori: tedori },//<=[0]
                    { kisoKojo: kisoKojo, huyoKojoSum2: huyoKojoSum2, shakaiHoken: shakaiHoken, kazeiIncome },//<=[1]
                    {
                        shakaiHoken: shakaiHoken,//<=[2]
                        seimeiHoken: seimeiHoken,
                        jisinKojo: 0,
                        wifeKojo: wifeKojo,
                        huyoKojoSum1: huyoKojoSum1,
                        kisoKojo: kisoKojo
                    },
                    {
                        shakaiHoken: shakaiHoken,//<=[3]
                        seimeiHokenJ: seimeiHokenJ,
                        jisinKojoJ: 0,
                        wifeKojoJ: wifeKojoJ,
                        kisoKojoJ: kisoKojoJ
                    }
                ]
            )
        }
    };
    /* ？歳までを選択した際の期限が切れてるかを確かめて0か1を返す関数 */
    function isExpired(type2, count, age) {
        if (type2 === "every") {
            return 1;
        }
        else if (type2 === "before") {
            if (age <= count) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else if (type2 === "after") {
            if (age >= count) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            if (age === count) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }

    var minusFlag = false;

    var data = []
    var cdata = []

    var minus_data = [
        {
            name: 0,
            saving: 0
        }
    ];

    const [minusYear, setMinusYear] = useState()
    const [minusSum, setMinusSum] = useState()
    const [chartData, setChartData] = useState();

    // 表関係
    const [tData, setTData] = useState()


    var tableData = []      // year age wage self wife income outcome exoenses stock

    const [lastSaving, setLastSaving] = useState();
    const [minusAgeState, setMinusAgeState] = useState([]);

    const minusAge = [];


    /* 配列の中身を合計する（？歳までを選択した場合はそこからは足さない） */
    const sumArray = (array, age) => {
        let sum = 0;
        for (let i = 0, len = array.length; i < len; i++) {
            sum += (Number)(array[i].charge) *
                isExpired(array[i].type2, (Number)(array[i].count), age);
        }
        return sum;
    };

    useEffect(() => {

        setMinusAgeState([]);

        /**初期値を計算 */
        let i = 0
        let outCome = sumArray(payList, (Number)(info.age) + i)
        let inCome =
            Number(dicisionInfo(info.taxIncome, info.taxIncome60, info.rate, info.maxAge1 ,info.afterIncome, info.pension, huyoList, 0, info.age, i)[0].tedori) +
            Number(dicisionInfo(wifeInfo.taxIncome, wifeInfo.taxIncome60, wifeInfo.rate, wifeInfo.maxAge1, wifeInfo.afterIncome, wifeInfo.pension, huyoList, 1, wifeInfo.age, i)[0].tedori) +
            sumArray(incomeList, (Number)(info.age) + i)
        let Result = inCome - outCome

        data.push(
            {
                name: info.age + "歳",
                saving: Math.floor(Number(info.saving) + Result),
                income: Math.floor(inCome)
            })

        tableData.push(
            {
                year: i + "年",
                age: Number(info.age) + i + "歳",
                wage: Number(wifeInfo.age) + i + "歳",
                self: Math.floor(dicisionInfo(info.taxIncome, info.taxIncome60, info.rate, info.maxAge1, info.afterIncome, info.pension, huyoList, 0, info.age, i)[0].tedori),
                wife: Math.floor(dicisionInfo(wifeInfo.taxIncome, wifeInfo.taxIncome60, wifeInfo.rate, wifeInfo.maxAge1, wifeInfo.afterIncome, wifeInfo.pension, huyoList, 1, wifeInfo.age, i)[0].tedori),
                income: Math.floor(inCome),
                outcome: Math.floor(outCome),
                expenses: Math.floor(Result),
                saving: Math.floor(data[i].saving)
            }
        )
        /** */

        for (let i = 1; i < 96 - info.age; i++) {

            outCome = sumArray(payList, (Number)(info.age) + i)

            inCome =
                Number(dicisionInfo(info.taxIncome, info.taxIncome60, info.rate, info.maxAge1, info.afterIncome, info.pension, huyoList, 0, info.age, i)[0].tedori) +
                Number(dicisionInfo(wifeInfo.taxIncome, wifeInfo.taxIncome60, wifeInfo.rate, wifeInfo.maxAge1, wifeInfo.afterIncome, wifeInfo.pension, huyoList, 1, wifeInfo.age, i)[0].tedori) +
                sumArray(incomeList, (Number)(info.age) + i)

            Result = inCome - outCome


            data.push(
                {
                    name: Number(info.age) + i + "歳",
                    saving: Math.floor(Result + Number(data[i - 1].saving)),
                    income: Math.floor(inCome)
                })
            if ((Result + Number(data[i - 1].saving) < 0)) {
                minus_data.push(
                    {
                        name: Number(info.age) + i + "歳",
                        saving: data[i].saving
                    }

                )
                // マイナスがあることを通知
                minusFlag = true;
            }

            // 表のデータをプッシュ
            tableData.push(
                {
                    year: i + "年",
                    age: Number(info.age) + i + "歳",
                    wage: Number(wifeInfo.age) + i + "歳",
                    self: Math.floor(dicisionInfo(info.taxIncome, info.taxIncome60, info.rate, info.maxAge1,info.afterIncome, info.pension, huyoList, 0, info.age, i)[0].tedori),
                    wife: Math.floor(dicisionInfo(wifeInfo.taxIncome, wifeInfo.taxIncome60, wifeInfo.rate, wifeInfo.maxAge1, wifeInfo.afterIncome, wifeInfo.pension, huyoList, 1, wifeInfo.age, i)[0].tedori),
                    income: Math.floor(inCome),
                    outcome: Math.floor(outCome),
                    expenses: Math.floor(Result),
                    saving: Math.floor(data[i].saving)
                }
            )
        }

        // マイナスがある場合要素0に1を代入
        if (minusFlag) {
            minus_data[0] = minus_data[1]
        }
        // ない場合要素1に0,0を代入
        else {
            minus_data.push(
                {
                    name: 0,
                    saving: 0
                }
            )
        }

        for (let i = 0; i < data.length; i++) {
            cdata.push({
                年齢: data[i].name,
                貯蓄: data[i].saving,
                収入: data[i].income
            })
        }

        for (let i = 1; i < data.length; i++) {
            if (data[i - 1].saving > 0 && data[i].saving < 0) {
                minusAge.push(Number(info.age) + i);
            }
        }

        setMinusAgeState(minusAge);
        setChartData(cdata);
        setMinusYear(minus_data[1].name)
        setMinusSum((minus_data[minus_data.length - 1].saving))
        setTData(tableData)
        setLastSaving(tableData[tableData.length - 1].saving)

    }, [])


    return (    
                <>
                <div className="header">
                    <h1 className="title">管理者ページ</h1>
                    <button className="log-out" onClick={logout}><i class="fas fa-sign-out-alt"> ログアウト</i></button>
                </div>
                <div className="tr-contents">
                    <div style={{ width: '100%' }}>
                        <ResponsiveContainer width="100%" height={300}>
                            <ComposedChart
                                data={chartData}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="年齢" />
                                <YAxis />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="貯蓄" fill="#FFA500" />
                                <Area type="monotone" dataKey="収入" fill="#82ca9d" stroke="#82ca9d" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="tr-txt">
                        {minusYear !== 0 ?
                            <>
                                {minusAgeState.map((age, i) => <p key={i}>貯蓄がマイナスになるのは : {age}歳</p>)}
                                <br />
                                95歳までのマイナス累計額 : {Math.floor(minusSum)}万円
                            </> :
                            <>
                                95歳の時の貯蓄 : {lastSaving}万円
                            </>}
                    </div>
                    <MaterialTable
                        title="資産推移"
                        columns={[
                            { title: '年度', field: 'year' },
                            { title: `${info.name} 様 年齢`, field: 'age' },
                            { title: '配偶者様 年齢', field: 'wage' },
                            { title: `${info.name} 様収入`, field: 'self' },
                            { title: '配偶者様収入', field: 'wife' },
                            { title: '収入合計', field: 'income' },
                            { title: '支出合計', field: 'outcome' },
                            { title: '収支', field: 'expenses' },
                            { title: '累計貯蓄額', field: 'saving' },
                        ]
                        }

                        data={tData}
                        options={{
                            grouping: false,
                            search: false,
                            padding: "dense",
                            paging: false,
                            draggable: false,
                            sorting: false
                        }}
                    />
                    <div className="button-wrapper">
                        <div onClick={()=>{history.goBack()}}><i class="fas fa-caret-square-left"></i></div>
                        <div onClick={()=>{history.push("/life-admin-demo/")}}><i class="fas fa-home"></i></div>
                    </div>
                </div>
                </>
    )
}

export default Transition