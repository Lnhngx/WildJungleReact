import React from 'react';
import { Link } from 'react-router-dom'

import OrderInfo from './OrderInfo'
import OrderTicket from './OrderTicket'
import Creditcard from './Creditcard'
import CreditcardAdd from './CreditcardAdd'
import AddressAdd from './AddressAdd'

function OrderNavItem(){
    return(<><ul className="tysu_memberChild">
    <li><Link to=""  className="tysu_link">訂單查詢</Link></li>
    <li><Link to=""  className="tysu_link">票券查詢</Link></li>
    <li><Link to=""  className="tysu_link">訂單退換貨</Link></li>
    <li><Link to=""  className="tysu_link">配送設定</Link></li>
  </ul>
  <hr className="tysu_hr" />
  <ul className="tysu_focusUnderLine tysu_memberChild">
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <img className="tysu_bg" src="./img/member/flower.svg" alt="" />
  </ul>
  {/* <OrderInfo /> */}
  <OrderTicket />
  </>)
}
export default OrderNavItem;