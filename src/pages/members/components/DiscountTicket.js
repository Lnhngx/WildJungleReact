import React from "react";

function DiscountTicket(){
    return(<>
        <table className="tysu_table">
            <thead>
                <tr className="tysu_orderTr">
                    <th style={{width: "42px"}}></th>
                    <th style={{width: "142px"}}>優惠券序號</th>
                    <th style={{width: "208px"}}>優惠券名稱</th>
                    <th style={{width: "86px"}}>面額</th>
                    <th style={{width: "92px"}}>抵用門檻</th>
                    <th style={{width: "160px"}}>有效時間</th>
                    <th style={{width: "100px"}}>使用狀態</th>
                </tr>
            </thead>
            <tbody>
                <tr className="tysu_orderTr tysu_orderText">
                    <th>1</th>
                    <td>R77C98</td>
                    <td className="tysu_orderBg">2月生日禮</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>2022/02/28</td>
                    <td>未使用</td>
                </tr>
            </tbody>
        </table>
    </>)
}
export default DiscountTicket