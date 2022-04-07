import { isTrivialHref } from "@restart/ui/esm/Anchor";
import React, { useState, useEffect } from "react";

function OrderCancel() {
  
  return (
    <>
      <div className="tysu_filterSelect">
        <select name="cars" id="cars" className="tysu_select" style={{}}>
          <option value="">篩選條件</option>
          <option value="oneMonth">最近一個月</option>
          <option value="threeMonth">最近三個月</option>
          <option value="sixMonth">最近半年</option>
          <option value="aYear">一年內</option>
        </select>
      </div>
      <table className="tysu_table"  style={{marginBottom:"40rem"}}>
        <thead>
          <tr className="tysu_orderTr">
            <th style={{ width: "42px" }}></th>
            <th style={{ width: "146px" }}>訂單編號</th>
            <th style={{ width: "208px" }}>商品名稱</th>
            <th style={{ width: "68px" }}>單價</th>
            <th style={{ width: "60px" }}>數量</th>
            <th style={{ width: "126px" }}>訂購時間</th>
            <th style={{ width: "88px" }}>訂單金額</th>
            <th style={{ width: "88px" }}>狀態</th>
          </tr>
        </thead>

        <tbody>
            <tr className="tysu_tr tysu_last">
                <th></th>
                <td></td>
                <td></td>
                <td><div className="tysu_creditT">沒有資料</div></td>
                <td></td>
                <td></td>
            </tr> 
        </tbody>
      </table>
      {/* <nav className="tysu_filterSelect tysu_btnPages">
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
        <ul>
          <li className="tysu_allPage">/&nbsp;10&nbsp;頁</li>
        </ul>
      </nav> */}
    </>
  );
}
export default OrderCancel;
