import React, { useEffect, useState } from "react";
import Config from "../Config";

function ProductLike(props){
    const {likeAddCard,setLikeAddCart}=props;
    

    // 取得localStorage的商品sid存在state
    const productLike=JSON.parse(localStorage.getItem('like'));
    const [likes,setLikes]=useState(productLike);

    // 取得資料庫所有商品列表
    const [productLikeData,setProductLikeData]=useState([]);

    // 設定進資料庫
    const [favData,setFavData]=useState([])

    useEffect(()=>{
        const getProductsData=async()=>{
            await fetch(Config.TYSU_PRODUCT_LIKE,{
                method:'GET',
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(r=>r.json()).then(obj=>{
                console.log(obj);
                setProductLikeData(obj)
            })
        }
        getProductsData()
    },[])

    // console.log(typeof parseInt(likes[0]))
    

   
        let ar=[]
        likes.forEach(el=>{
            productLikeData.forEach(m=>{
                // console.log('i ---',el)
                // console.log(m)
                // console.log(parseInt(el)===m.ProductSid)
                if(parseInt(el)===m.ProductSid){
                    ar.push(m)
                }
            })
        })

    
    return(<>
    {console.log(favData)}
        <table className="tysu_table">
            <thead>
                <tr className="tysu_orderTr">
                    <th style={{width: "38px"}}></th>
                    <th style={{width: "176px"}}>商品</th>
                    <th style={{width: "168px"}}>商品名稱</th>
                    <th style={{width: "120px"}}>單價</th>
                    <th style={{width: "140px"}}>加入時間</th>
                    <th style={{width: "158px"}}></th>
                </tr>
            </thead>
            <tbody>
                {ar.map((v,i)=>{
                    return (<tr key={v.ProductSid} className="tysu_orderTr tysu_orderText" name={v.ProductSid}>
                        <th>{i+1}</th>
                        <td>
                            <img  style={{width:"110px"}} src={'/img/product/'+v.ProductsMainPic} alt="" />
                        </td>
                        <td className="tysu_orderBg">{v.ProductsName}</td>
                        <td>${v.ProductsPrice}</td>
                        <td>{new Date().toISOString().slice(0, 10)}</td>
                        <td className="tysu_likeGroup">
                            <button id="tysu_likeBtn" className="tysu_likeBtn tysu_likeCart">加入購物車</button>
                            <button id="tysu_likeBtn" className="tysu_likeBtn tysu_likeCancel">取消收藏</button>
                        </td>
                    </tr>)
                })}
                
            </tbody>
        </table>
        <nav className="tysu_filterSelect tysu_btnPages">
            <ul className="tysu_pageGroup">
                <li className="tysu_pageItem">
                    <a className="tysu_pageLink" href="#/">
                        <i className="fas fa-angle-left"></i>
                    </a>
                </li>
                <li className="tysu_pageItem tysu_pageText">
                    <input type="text" className="tysu_pageInput" defaultValue="1" />
                </li>
                <li className="tysu_pageItem">
                    <a className="tysu_pageLink" href="#/">
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
            </ul>
            <ul>
                <li className="tysu_allPage">/&nbsp;10&nbsp;頁</li>
            </ul>
        </nav>
    </>)
}
export default ProductLike