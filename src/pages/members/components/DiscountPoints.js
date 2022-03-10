import React from "react";

function DiscountPoints(){
    return(<>
        <table className="tysu_table">
            <thead>
                <tr className="tysu_orderTr">
                    <th style={{width: "42px"}}></th>
                    <th style={{width: "142px"}}>紅利序號</th>
                    <th style={{width: "208px"}}>紅利名稱</th>
                    <th style={{width: "120px"}}>點數</th>
                    <th style={{width: "218px"}}>有效時間</th>
                    <th style={{width: "100px"}}>使用狀態</th>
                </tr>
            </thead>
            <tbody>
                <tr className="tysu_orderTr tysu_orderText">
                    <th>1</th>
                    <td>P77C98</td>
                    <td className="tysu_orderBg">遊戲闖關</td>
                    <td>5</td>
                    <td>2022/06/01~2022/08/01</td>
                    <td>未使用</td>
                </tr>
            </tbody>
        </table>
    </>)
}
export default DiscountPoints