import React from 'react';
import { Link } from 'react-router-dom'

import DiscountTicket from './DiscountTicket'
import DiscountPoints from './DiscountPoints'


function DiscountNavItem(){
    return(<><ul className="tysu_memberChild">
    <li><Link to=""  className="tysu_link">折價券</Link></li>
    <li><Link to=""  className="tysu_link">紅利</Link></li>
  </ul>
  <hr className="tysu_hr" />
  <ul className="tysu_focusUnderLine tysu_memberChild">
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <img className="tysu_bg" src="./img/member/flower.svg" alt="" />
  </ul>
  <DiscountTicket />
  {/* <DiscountPoints /> */}
  </>)
}
export default DiscountNavItem;