import React from 'react';

function CreditcardAdd(){
    return(<>
        <form id="tysu_form">
            <table>
                <tbody>
                <tr >
                    <th></th>
                    <td>
                        <img className="tysu_gradePic tysu_creditImg" src="" alt="" />
                    </td>
                </tr>
                <tr className="tysu_tr">
                    <th>
                    <label htmlFor="tysu_creditCard">信用卡卡號<br />
                        <span className="tysu_titleSpan">Credit Card Number</span></label>
                    </th>
                    <td>
                        <input type="text" id="tysu_creditCard" className="tysu_input tysu_creditCard first" />
                            <i className="far fa-window-minimize"></i>
                        <input type="text" id="tysu_creditCard" className="tysu_input tysu_creditCard" />
                            <i className="far fa-window-minimize"></i>
                        <input type="text" id="tysu_creditCard" className="tysu_input tysu_creditCard" />
                            <i className="far fa-window-minimize"></i>  
                        <input type="text" id="tysu_creditCard" className="tysu_input tysu_creditCard" />
                    </td>
                </tr>
                <tr className="tysu_tr">
                    <th>
                    <label htmlFor="tysu_expireDate">有效日期<br /><span className="tysu_titleSpan">Expire Date</span></label>
                    </th>
                    <td className="tysu_expireDateList">
                    <div>
                        <input type="text" id="tysu_expireDate" className="tysu_input tysu_month" maxLength="2"
                        />月
                        <input type="text" id="tysu_birth" className="tysu_input tysu_year tysu_creditYear" maxLength="4"
                        />年
                    </div>
                    
                    </td>
                </tr>
                <tr className="tysu_tr">
                    <th class="tysu_creditLast">
                    <label htmlFor="tysu_code">檢查碼<br /><span className="tysu_titleSpan">Card Vaildation Code</span></label>
                    </th>
                    <td className="tysu_creditLast tysu_codeContent">
                        <div className="">
                            <input type="text" id="tysu_code" className="tysu_input tysu_code" maxLength="3"
                            />( 3-digital )
                        </div>
                    
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td>
                    <div>
                        <button id="tysu_editBtn" className="tysu_editBtn">更 改</button>
                        <button id="tysu_cancelBtn" className="tysu_cancelBtn">
                        取 消
                        </button>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    </>)
}
export default CreditcardAdd;