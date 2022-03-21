import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import MemberInfo from './MemberInfo'
import GradeInfo from './GradeInfo'
import Creditcard from './Creditcard'
import CreditcardAdd from './CreditcardAdd'
import AddressAdd from './AddressAdd'

function MemberNavItem(props){
  const {memberlist,actived}=props

  const [navActived,setNavActived]=useState('')

  const navItem=['基本設定','分級資訊','信用卡管理','常用資訊']
  const orderNavItem=['訂單查詢','票券查詢','訂單退換貨','配送設定']
  const discountNavItem=['紅利','折價券']
  const likeNavItem=['商品','活動']

    return(<>
    <ul className="tysu_memberChild">
    {actived===memberlist[0] && navItem.map((v,i)=>{return <li key={i}><Link to=""  className="tysu_link">{v}</Link></li>})}
    {actived===memberlist[1] && orderNavItem.map((v,i)=>{return <li key={i}><Link to=""  className="tysu_link">{v}</Link></li>})}
    {actived===memberlist[2] && discountNavItem.map((v,i)=>{return <li key={i}><Link to=""  className="tysu_link">{v}</Link></li>})}
    {actived===memberlist[3] && likeNavItem.map((v,i)=>{return <li key={i}><Link to=""  className="tysu_link">{v}</Link></li>})}
  </ul>
  <hr className="tysu_hr" />
  <ul className="tysu_focusUnderLine tysu_memberChild">
  {actived===memberlist[0] && navItem.map((v,i)=>{
    return <Link to="" key={i} className="tysu_link"><li></li></Link>
  })}
  {actived===memberlist[1] && orderNavItem.map((v,i)=>{
    return <Link to="" key={i} className="tysu_link"><li></li></Link>
  })}
  {actived===memberlist[2] && discountNavItem.map((v,i)=>{
    return <Link to="" key={i} className="tysu_link"><li></li></Link>
  })}
  {actived===memberlist[3] && likeNavItem.map((v,i)=>{
    return <Link to="" key={i} className="tysu_link"><li></li></Link>
  })}
  
    {/* <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link> */}
    <img className="tysu_bg" src="./../img/member/flower.svg" alt="" />
  </ul>
  {/* <MemberInfo /> */}
  {/* <GradeInfo /> */}
  {/* <Creditcard /> */}
  {/* <CreditcardAdd /> */}
  {/* <AddressAdd /> */}
  </>)
}
export default MemberNavItem;