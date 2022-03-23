import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import MemberInfo from './MemberInfo'
import GradeInfo from './GradeInfo'
import Creditcard from './Creditcard'
// import CreditcardAdd from './CreditcardAdd'
import AddressAdd from './AddressAdd'
import OrderInfo from './OrderInfo'
import OrderTicket from './OrderTicket'
import ConvenienceStore from './ConvenienceStore'
import DiscountPoints from './DiscountPoints'
import DiscountTicket from './DiscountTicket'
import ProductLike from './ProductLike'
import ActivityLike from './ActivityLike'


// navItem=['基本設定','分級資訊','信用卡管理','常用資訊']
// orderNavItem=['訂單查詢','票券查詢','訂單退換貨','配送設定']
// discountNavItem=['紅利','折價券']
// likeNavItem=['商品','活動']

function MemberNavItem(props){
  const {memberlist,navItem,orderNavItem,discountNavItem,likeNavItem,actived,setNavState,navState,sidData}=props

  const [navActived,setNavActived]=useState(navState)
  // {navItem:'基本設定',orderNavItem:'訂單查詢',discountNavItem:'紅利',likeNavItem:'商品'}
 
  
  return(<>
  <ul className="tysu_memberChild">
    {/* props傳入的對象是誰，就渲染哪個nav item；除被點擊的nav item以外，其他nav item不動 */}
    {actived===memberlist[0] && navItem.map((v,i)=>{
      return <li key={i} onClick={(e)=>{
                // console.log(e.target.innerHTML)
                if(e.target.innerHTML===v){
                  setNavActived({...navActived,navItem:v})
                  setNavState({...navState,navItem:e.target.innerHTML})
                }
              }}>
                <Link to="#"  className="tysu_link">{v}</Link>
              </li>
    })}
    {actived===memberlist[1] && orderNavItem.map((v,i)=>{
      return <li key={i} onClick={(e)=>{
                // console.log(e.target.innerHTML)
                if(e.target.innerHTML===v){
                  setNavActived({...navActived,orderNavItem:v})
                  setNavState({...navState,orderNavItem:e.target.innerHTML})
                }
              }}>
                <Link to="#"  className="tysu_link">{v}</Link>
              </li>
    })}
    {actived===memberlist[2] && discountNavItem.map((v,i)=>{
      return <li key={i} onClick={(e)=>{
                // console.log(e.target.innerHTML)
                if(e.target.innerHTML===v){
                  setNavActived({...navActived,discountNavItem:v})
                  setNavState({...navState,discountNavItem:e.target.innerHTML})
                }
              }}>
                <Link to="#"  className="tysu_link">{v}</Link>
              </li>
    })}
    {actived===memberlist[3] && likeNavItem.map((v,i)=>{
      return <li key={i} onClick={(e)=>{
                // console.log(e.target.innerHTML)
                if(e.target.innerHTML===v){
                  setNavActived({...navActived,likeNavItem:v})
                  setNavState({...navState,likeNavItem:e.target.innerHTML})
                }
              }}>
                <Link to="#"  className="tysu_link">{v}</Link>
              </li>
    })}
  </ul>
  <hr className="tysu_hr" />
  <ul className="tysu_focusUnderLine tysu_memberChild">
    {actived===memberlist[0] && navItem.map((v,i)=>{
      return <Link to="#" key={i} className={navState===v || navState.navItem===v ? 'tysu_link':'tysu_link disabled' }><li></li></Link>
    })}
    {actived===memberlist[1] && orderNavItem.map((v,i)=>{
      return <Link to="#" key={i} className={navState===v || navState.orderNavItem===v ? 'tysu_link':'tysu_link disabled' }><li></li></Link>
    })}
    {actived===memberlist[2] && discountNavItem.map((v,i)=>{
      return <Link to="#" key={i} className={navState===v || navState.discountNavItem===v ? 'tysu_link':'tysu_link disabled' }><li></li></Link>
    })}
    {actived===memberlist[3] && likeNavItem.map((v,i)=>{
      return <Link to="#" key={i} className={navState===v || navState.likeNavItem===v ? 'tysu_link':'tysu_link disabled' }><li></li></Link>
    })}
    <img className="tysu_bg" src="./../img/member/flower.svg" alt="" />
  </ul>

    {/* memberlist && 當前狀態的nav item皆符合才會渲染 */}
    {actived===memberlist[0] && navState.navItem===navItem[0] ? <MemberInfo navActived={navActived} navItem={navItem} sidData={sidData}/> : '' }
    {actived===memberlist[0] && navState.navItem===navItem[1] ? <GradeInfo navActived={navActived} navItem={navItem}/> : '' }
    {actived===memberlist[0] && navState.navItem===navItem[2] ? <Creditcard navActived={navActived} navItem={navItem}/> : '' }
    {actived===memberlist[0] && navState.navItem===navItem[3] ? <AddressAdd navActived={navActived} navItem={navItem}/> : '' }
    {actived===memberlist[1] && navState.orderNavItem===orderNavItem[0] ? <OrderInfo navActived={navActived} orderNavItem={orderNavItem}/> : '' }
    {actived===memberlist[1] && navState.orderNavItem===orderNavItem[1] ? <OrderTicket navActived={navActived} orderNavItem={orderNavItem}/> : '' }
    {actived===memberlist[1] && navState.orderNavItem===orderNavItem[2] ? <OrderInfo navActived={navActived} orderNavItem={orderNavItem}/> : '' }
    {actived===memberlist[1] && navState.orderNavItem===orderNavItem[3] ? <ConvenienceStore navActived={navActived} orderNavItem={orderNavItem}/> : '' }
    {actived===memberlist[2] && navState.discountNavItem===discountNavItem[0] ? <DiscountPoints navActived={navActived} discountNavItem={discountNavItem}/> : '' }
    {actived===memberlist[2] && navState.discountNavItem===discountNavItem[1] ? <DiscountTicket navActived={navActived} discountNavItem={discountNavItem}/> : '' }
    {actived===memberlist[3] && navState.likeNavItem===likeNavItem[0] ? <ProductLike navActived={navActived} likeNavItem={likeNavItem}/> : '' }
    {actived===memberlist[3] && navState.likeNavItem===likeNavItem[1] ? <ActivityLike navActived={navActived} likeNavItem={likeNavItem}/> : '' }

  </>)
}
export default MemberNavItem;