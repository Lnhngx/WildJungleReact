import React from "react";


function OrderTicket(){



    


    return(<>
        <div className="tysu_filterSelect">
            <select name="cars" id="cars" className="tysu_select" style={{}}>
                <option value="">篩選條件</option>
                <option value="oneMonth">最近一個月</option>
                <option value="threeMonth">最近三個月</option>
                <option value="sixMonth">最近半年</option>
                <option value="aYear">一年內</option>
            </select>
        </div>
        <table className="tysu_table">
            <thead>
                <tr className="tysu_orderTr">
                    <th style={{width: "42px"}}></th>
                    <th style={{width: "146px"}}>訂單編號</th>
                    <th style={{width: "208px"}}>商品名稱</th>
                    <th style={{width: "68px"}}>單價</th>
                    <th style={{width: "60px"}}>數量</th>
                    <th style={{width: "88px"}}>訂單金額</th>
                    <th style={{width: "126px"}}>有效時間</th>
                    <th style={{width: "88px"}}>狀態</th>
                </tr>
            </thead>
            <tbody>
                <tr className="tysu_orderTr tysu_orderText">
                    <th rowSpan="0" >1</th>
                    <td rowSpan="0">
                        <a href="#/">A220201777888</a>
                    </td>
                    <td className="tysu_orderBg">WildJungle入園門票</td>
                    <td>$50</td>
                    <td>2</td>
                    <td rowSpan="0">$100</td>
                    <td>~ 2022/05/01</td>
                    <td>未使用</td>
                </tr>
                <tr className="tysu_orderTr tysu_orderText">
                    <td className="tysu_orderBg">動物餵食秀</td>
                    <td>$100</td>
                    <td>2</td>
                    <td>2022/02/08</td>
                    <td>已過期</td>
                </tr>
            </tbody>
            <tbody>
                <tr className="tysu_orderTr tysu_orderText">
                    <th>2</th>
                    <td>
                        <a href="#/">A220201777889</a>
                    </td>
                    <td className="tysu_orderBg">WildJungle入園門票</td>
                    <td>$105</td>
                    <td>1</td>
                    <td>$105</td>
                    <td>2022/01/08</td>
                    <td>已使用</td>
                </tr>
            </tbody>
        </table>
    </>)
}
export default OrderTicket