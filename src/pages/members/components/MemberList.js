import React, { useEffect, useState } from "react"
import { Link,Redirect,useHistory  } from 'react-router-dom'
import Config from "../Config"

import MemberNavItem from './MemberNavItem'




function MemberList(props){
  const {auth,account,token}=props
  // const history=useHistory();

  const sid=JSON.parse(localStorage.getItem('admin_account'))

  const memberlist=['會員資料','訂單資訊','折價優惠','喜愛收藏']

  const navItem=['基本設定','分級資訊','信用卡管理','常用資訊']
  const orderNavItem=['訂單查詢','票券查詢','訂單退換貨','配送設定']
  const discountNavItem=['紅利','折價券']
  const likeNavItem=['商品','活動']

  // 紀錄memberList的狀態
  const [actived,setActived]=useState('會員資料')
  // 紀錄navItem狀態
  // const [navState,setNavState]=useState('基本設定')
  const [navState,setNavState]=useState({navItem:'基本設定',orderNavItem:'訂單查詢',discountNavItem:'紅利',likeNavItem:'商品'})

  // 取得後端資料
  const [sidData,setSidData]=useState({})
  useEffect(()=>{
    const getSidData=async ()=>{
      await fetch(Config.TYSU_MEMBER_INFO+`${sid.m_sid}`,{
        method:'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(r=>r.json()).then(obj=>{
          // console.log('MemberList-obj:',obj)
          setSidData(obj.info)
        })
      
    }
    getSidData()
    

    // const gradeImg=async ()=>{
    //   await fetch('./../data/grade.json').then(r=>r.json()).then(obj=>{
    //     console.log(obj)
    //   })
    // }
  
    // gradeImg()
  },[])


  

  // if (auth){
  //   // return (<Redirect to='/login'  />)
  //   history.push('/login')
  // }else{

    return(
      <div className="tysu_grade">
          <div className="tysu_gradeImg">
            <img src="/img/member/v.png" alt="" />
          </div>
        <div className="tysu_row">
            <ul className="tysu_memberList">
              {/* 點選memberList要設定回原狀態 */}
              {memberlist.map((v,i)=>{
                return <li key={i} onClick={(e)=>{
                  setActived(v)
                  setNavState({navItem:navItem[0],orderNavItem:orderNavItem[0],discountNavItem:discountNavItem[0],likeNavItem:likeNavItem[0]})
                }} className={actived===v ?'active':''}><Link to="#/"  className="tysu_link">{v}</Link></li>
              })}
            </ul>
          <MemberNavItem memberlist={memberlist} navItem={navItem}  orderNavItem={orderNavItem} actived={actived} discountNavItem={discountNavItem} likeNavItem={likeNavItem} 
            setNavState={setNavState}
            navState={navState}
            sidData={sidData}
          />
          <div className="tysu_memberBg">
            <img src="./../img/member/leaf_y.svg" alt="" />
          </div>
          
        </div>
      </div>
    )
  // }
}
export default MemberList