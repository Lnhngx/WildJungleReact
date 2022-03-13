import React from 'react';
import { Link } from 'react-router-dom'

import MemberInfo from './MemberInfo'
import GradeInfo from './GradeInfo'
import Creditcard from './Creditcard'
import CreditcardAdd from './CreditcardAdd'
import AddressAdd from './AddressAdd'

function MemberNavItem(){
    return(<>
    <ul className="tysu_memberChild">
    <li><Link to=""  className="tysu_link">基本設定</Link></li>
    <li><Link to=""  className="tysu_link">分級資訊</Link></li>
    <li><Link to=""  className="tysu_link">信用卡管理</Link></li>
    <li><Link to=""  className="tysu_link">常用資訊</Link></li>
  </ul>
  <hr className="tysu_hr" />
  <ul className="tysu_focusUnderLine tysu_memberChild">
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <img className="tysu_bg" src="./img/member/flower.svg" alt="" />
  </ul>
  {/* <MemberInfo /> */}
  {/* <GradeInfo /> */}
  {/* <Creditcard /> */}
  {/* <CreditcardAdd /> */}
  {/* <AddressAdd /> */}
  </>)
}
export default MemberNavItem;