import React from "react"
import { Link } from 'react-router-dom'

import MemberNavItem from './MemberNavItem'
import OrderNavItem from './OrderNavItem'

function MemberList(){

    
  return(
    <div>
      <div className="tysu_gradeImg"><img src="" alt="" /></div>
        <ul className="tysu_memberList">
          <li><Link to=""  className="tysu_link">會員資料</Link></li>
          <li><Link to=""  className="tysu_link">訂單資訊</Link></li>
          <li><Link to=""  className="tysu_link">折價優惠</Link></li>
          <li><Link to=""  className="tysu_link">喜愛收藏</Link></li>
        </ul>
      {/* <MemberNavItem /> */}
      <OrderNavItem />
      <div className="tysu_memberBg">
        <img src="./img/member/leaf_y.svg" alt="" />
      </div>
      
    </div>
  )
}
export default MemberList