import React, { useEffect, useState,useRef } from "react"
import { Link,Redirect,useHistory  } from 'react-router-dom'
import Config from "../Config"

import MemberNavItem from './MemberNavItem'



function MemberList(props){
  const {auth,account,token,pointData,setPointData,likeAddCard,setLikeAddCart,likeListData,setLikeListData}=props
  
  const tysuBg=useRef();
  // let lastposition = 0;
  // let last;
  // function doSomething(scrollPos) {
  //   console.log("notice1");
  //   // 依據捲動位置進行某些操作
  //   // tysuBg.style.background = "red";
  //   // d.style.position = "absolute";
  //   // tysuBg.style.bottom = "50%";
  //   // console.log(tysuBg.style);
  // }
  // function doSomething2(scrollPos) {
    // console.log("----");
    // tysuBg.style.background = "black";
    // tysuBg.style.bottom = "0";
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     lastposition = window.scrollY;
  //     // last = tysuBg.offsetTop;
  //     const oo=tysuBg.current.offsetTop;
  //     // console.log("lastposition", lastposition);
  //     console.log(oo);
  //     if (lastposition - oo > "470") {
  //       window.requestAnimationFrame(function () {
  //         doSomething(lastposition);
  //       });
  //     } else {
  //       window.requestAnimationFrame(function () {
  //         doSomething2(lastposition);
  //       });
  //     }
  //   });
  // },[])
  
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        
    }, []);
    useEffect(() => {
      // console.log(offset);like
      // console.log('tysuBg', tysuBg.current.scrollTop ); 
      // console.log('scrollTop', tysuBg.current.offsetTop); 
      // console.log('window', window.scrollY);
  // console.log('offset',tysuBg.current.offsetTop); 
      
      if(offset-tysuBg.current.offsetTop>=-600){
        tysuBg.current.style.position="fixed";
        tysuBg.current.style.bottom="-3rem"
      }

    },[offset])
    // console.log(tysuBg.current.style)
 




  const sid=JSON.parse(localStorage.getItem('admin_account'))

  const memberlist=['會員資料','訂單資訊','折價優惠','喜愛收藏']

  const navItem=['基本設定','分級資訊','信用卡管理','常用資訊']
  const orderNavItem=['訂單查詢','票券查詢','訂單退換貨','配送設定']
  const discountNavItem=['紅利','折價券']
  const likeNavItem=['商品','活動']

  
  
  
  // 紀錄navItem狀態
  const [navState,setNavState]=useState({navItem:'基本設定',orderNavItem:'訂單查詢',discountNavItem:'紅利',likeNavItem:'商品'})

  // 取得會員基本資料
  const [sidData,setSidData]=useState({});
  // 取得會員信用卡資料
  const [creditData,setCreditData]=useState([]);
  
  // 取得會員超商設定
  const [user711Data,setUser711Data]=useState({});
  

  useEffect(()=>{
    const getSidData=async ()=>{
      await fetch(Config.TYSU_MEMBER_INFO+`${sid.m_sid}`,{
        method:'GET',
        headers: {
          "Authorization": 'Bearer '+localStorage.getItem('admin_token'), 
          "Content-Type": "application/json"
        },
      }).then(r=>r.json()).then(obj=>{
          // console.log('MemberList-obj:',obj);
          setSidData(obj.info);
        })
    }
    getSidData();
    
    const getCreditData=async() =>{
      await fetch(Config.TYSU_CREDITCARD_INFO+sid.m_sid,{
          method:'GET',
          headers:{
              "Authorization": 'Bearer '+localStorage.getItem('admin_token'), 
              "Content-Type":"application/json"
          }
      }).then(r=>r.json()).then(obj=>{
          // console.log('CreditCard:',obj);
          
          if(obj.success){
            setCreditData(obj.info.list);
            // console.log(obj.info.list);
            localStorage.setItem('wildjungle_creditcard',JSON.stringify(obj.info.list)); 
          }
      })
    }
    getCreditData();

    const getPointData=async()=>{
      await fetch(Config.TYSU_BONUS_INFO+sid.m_sid,{
        method:'GET',
        headers:{
          "Content-Type":"application/json"
        }
      }).then(r=>r.json()).then(obj=>{
        // console.log('BonusPoint:',obj)
        if(obj.success){
          setPointData(obj.info);
        }

      })
    }
    getPointData()

    
    

    const getUser711=async()=>{
      await fetch(Config.TYSU_711_Add+'?m_id='+sid['m_sid'],{
          method:'GET',
          headers:{
              "Content-Type":"application/x-www-form-urlencoded"
          }
      }).then(r=>r.json()).then(obj=>{
          // console.log('User711:',obj)
          setUser711Data(obj);
      })
    }
    getUser711()
  
  },[]);

  //   useEffect(() => {
  //   const getLikeList=async ()=>{
  //     await fetch(Config.TYSU_PRODUCT_LIKE_INFO+sid.m_sid,{
  //       method: 'GET',
  //       headers: {
  //         "Content-Type":"application/json"
  //       }
  //     }).then(r=>r.json()).then(obj=>{
  //       console.log('LikeList:',obj);
  //       if(obj.success){
  //         localStorage.setItem('like',JSON.stringify(obj.info))
  //       }
  //     })    
  //   }
  //   getLikeList()
  
  // },[])


    return(

      <div className="tysu_grade">
          <div className="tysu_gradeImg">
            <img src={"/img/member/"+sidData.img} alt="" />
          </div>
        <div className="tysu_row">
            <ul className="tysu_memberList">
              {/* 點選memberList要設定回原狀態 */}
              {memberlist.map((v,i)=>{
                return <li key={i} onClick={(e)=>{
                  props.setActived(v)
                  setNavState({navItem:navItem[0],orderNavItem:orderNavItem[0],discountNavItem:discountNavItem[0],likeNavItem:likeNavItem[0]})
                }} className={props.actived===v ?'active':''}><Link to="#/"  className="tysu_link">{v}</Link></li>
              })}
            </ul>
          <MemberNavItem memberlist={memberlist} navItem={navItem}  orderNavItem={orderNavItem} actived={props.actived} discountNavItem={discountNavItem} likeNavItem={likeNavItem}
            setNavState={setNavState}
            navState={navState}
            sidData={sidData}
            setSidData={setSidData}
            creditData={creditData}
            setCreditData={setCreditData}
            pointData={pointData}
            setPointData={setPointData}
            user711Data={user711Data}
            setUser711Data={setUser711Data}
            likeAddCard={likeAddCard}
            setLikeAddCart={setLikeAddCart}
            likeListData={likeListData}
            setLikeListData={setLikeListData}
          />
          <div className="tysu_memberBg" ref={tysuBg}>
            <img src="./../img/member/leaf_y.svg" alt="" />
          </div>
          
        </div>
      </div>
    )
  // }
}
export default MemberList