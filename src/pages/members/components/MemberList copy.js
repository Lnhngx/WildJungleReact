import React, { useState } from "react"
import { Link } from 'react-router-dom'

import MemberNavItem from './MemberNavItem'




function MemberList(){
  const memberlist=['會員資料','訂單資訊','折價優惠','喜愛收藏']

  const [actived,setActived]=useState('會員資料')
  const [navAct,setNavAct]=useState({navItem:'基本設定',orderNavItem:'訂單查詢',discountNavItem:'紅利',likeNavItem:'商品'})

  return(
    
      <div className="tysu_grade">
        <div className="tysu_gradeImg">
          <img src="/img/member/v.png" alt="" />
        </div>
      <div className="tysu_row">
          <ul className="tysu_memberList">
            {memberlist.map((v,i)=>{
              return <li key={i} onClick={()=>{
                setNavAct(navAct)
                setActived(v)
              }} className={actived===v ?'active':''}><Link to="#/"  className="tysu_link">{v}</Link></li>
            })}
          </ul>
        <MemberNavItem memberlist={memberlist} actived={actived} navAct={navAct}/>
        <div className="tysu_memberBg">
          <img src="./../img/member/leaf_y.svg" alt="" />
        </div>
        
      </div>
    </div>
  )
}
export default MemberList