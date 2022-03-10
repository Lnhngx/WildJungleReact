import React from "react";

function ProductLike(){
    return(<>
        <table className="tysu_table">
            <thead>
                <tr className="tysu_orderTr">
                    <th style={{width: "38px"}}></th>
                    <th style={{width: "176px"}}>商品</th>
                    <th style={{width: "168px"}}>商品名稱</th>
                    <th style={{width: "120px"}}>單價</th>
                    <th style={{width: "140px"}}>加入時間</th>
                    <th style={{width: "158px"}}></th>
                </tr>
            </thead>
            <tbody>
                <tr className="tysu_orderTr tysu_orderText">
                    <th>1</th>
                    <td>
                        <img src="" alt="" />
                    </td>
                    <td className="tysu_orderBg">法蘭絨動物披風</td>
                    <td>$799</td>
                    <td>2022/02/01</td>
                    <td className="tysu_likeGroup">
                        <button id="tysu_likeBtn" className="tysu_likeBtn tysu_likeCart">加入購物車</button>
                        <button id="tysu_likeBtn" className="tysu_likeBtn tysu_likeCancel">取消收藏</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav className="tysu_filterSelect tysu_btnPages">
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
        </nav>
    </>)
}
export default ProductLike