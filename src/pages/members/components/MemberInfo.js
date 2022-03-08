import React from "react";
import { Link } from 'react-router-dom'
import MemberList from './MemberList'
import GradeInfo from './GradeInfo'

function MemberInfo(){
    return (<>
    <div className="tysu_gradeImg"><img src="" alt="" /></div>
    <ul className="tysu_memberList">
      <li><Link to=""  className="tysu_link">會員資料</Link></li>
      <li><Link to=""  className="tysu_link">訂單資訊</Link></li>
      <li><Link to=""  className="tysu_link">折價優惠</Link></li>
      <li><Link to=""  className="tysu_link">喜愛收藏</Link></li>
    </ul>
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
    {/* <MemberList /> */}
    <GradeInfo />
    </>)
}
export default MemberInfo