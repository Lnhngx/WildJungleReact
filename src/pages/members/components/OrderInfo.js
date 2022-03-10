import React from "react";


function OrderInfo(){



    


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
                    <th style={{width: "126px"}}>訂購時間</th>
                    <th style={{width: "88px"}}>訂單金額</th>
                    <th style={{width: "88px"}}>狀態</th>
                </tr>
            </thead>
            <tbody>
                <tr className="tysu_orderTr tysu_orderText">
                    <th rowSpan="0" >1</th>
                    <td rowSpan="0">
                        <a href="#/">A220201777888</a>
                    </td>
                    <td className="tysu_orderBg">法蘭絨動物兒童披風</td>
                    <td>$1065</td>
                    <td>2</td>
                    <td rowSpan="0">2022/02/01<br />22:00:36</td>
                    <td rowSpan="0">$2048</td>
                    <td rowSpan="0">已配達</td>
                </tr>
                <tr className="tysu_orderTr tysu_orderText">
                    <td className="tysu_orderBg">法蘭絨動物兒童披風</td>
                    <td>$1065</td>
                    <td>2</td>
                </tr>
            </tbody>
            <tbody>
                <tr className="tysu_orderTr tysu_orderText">
                    <th>2</th>
                    <td>
                        <a href="#/">A220201777889</a>
                    </td>
                    <td className="tysu_orderBg">動物拼圖</td>
                    <td>$105</td>
                    <td>1</td>
                    <td>2022/02/05<br />22:00:36</td>
                    <td>$105</td>
                    <td>已配達</td>
                </tr>
            </tbody>
        </table>
        <nav className="tysu_filterSelect">
            <ul className="tysu_pageGroup">
                <li className="tysu_pageItem">
                    <a className="tysu_pageLink" href="#/">
                        <i className="fas fa-angle-left"></i>
                    </a>
                </li>
                <li className="tysu_pageItem tysu_pageText">
                    <input type="text" className="tysu_pageInput" defaultValue="1" />
                </li>
                <li className="tysu_pageItem">
                    <a className="tysu_pageLink" href="#/">
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </>)
}
export default OrderInfo