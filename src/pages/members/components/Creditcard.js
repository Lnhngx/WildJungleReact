import React,{useEffect,useState} from 'react';

import CreditcardAdd from './CreditcardAdd';

import Config from '../Config';

function Creditcard(props){
    const {getCreditData,getCreditDataAgain,creditData,setCreditData,setLocalCredit}=props
    
    const [showAdd,setShowAdd]=useState(false);
    const [showTable,setShowTable]=useState(true);

    const [editShow,setEditShow]=useState(false)
    // 資料庫資料設為狀態
    const [cdData,setCdData]=useState([]);
    
    const [cardId,setCardId]=useState(null);
    

    useEffect(()=>{
        if(Object.keys(creditData).length!==0){
            setCdData(creditData);
        }
        
    },[creditData])
    
    // let newAr=Object.keys(cdData).map((v)=> cdData[v])


    

    return(<>
    
    {console.log('creditData',creditData)}
    {console.log('cdData',cdData)}
        {showTable===true ? <table  className="tysu_table">
            <tbody>
                <tr>
                    <td>
                        {cdData.length!==0 && cdData.map((v,i)=>{
                           return <div key={i} className= {v!==cdData.slice(-1)[0] ? "tysu_creditGroup tysu_tr" : "tysu_creditGroup"}>
                                <div className="tysu_creditDelete" onClick={
                                    async(e)=>{
                                    // console.log(v.credit_sid)
                                    await fetch(Config.TYSU_CREDITCARD_DELETE+v.credit_sid,{
                                    method:'GET',
                                    headers:{
                                        // "Authorization": 'Bearer '+localStorage.getItem('admin_token'), 
                                        "Content-Type":"application/json"
                                    },
                                    // body:JSON.stringify(cdData.credit_sid)
                                }).then(r=>r.json()).then(obj=>{
                                    console.log(obj)
                                    if(obj.success){
                                        // console.log(obj.error);
                                        const newArr=cdData.filter((k,t)=>{
                                            return v.credit_sid!==k.credit_sid
                                        })
                                        setCdData(newArr);
                                        setCreditData(newArr);
                                    }else{
                                        console.log(obj.error);
                                    }
                                });

                                }}>
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="tysu_cardcontent">
                                    <img className="tysu_creditImg" src="/img/member/creditcard.png" alt="" />
                                    <div className="tysu_creditNum">
                                        <div>****&nbsp;-&nbsp;</div>
                                        <div>****&nbsp;-&nbsp;</div>
                                        <div>****&nbsp;-&nbsp;</div>
                                        <div>
                                            <input type="text" id="tysu_creditCard" className="tysu_input tysu_creditCard"
                                            disabled
                                            readOnly
                                            defaultValue={v.credit_num.slice(15)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        }) }
                        {!cdData.length && <div className="tysu_creditT">{ '尚未設定' }</div>
                        }
                        
                        <div >
                            <button id="tysu_addBtn" className="tysu_addBtn" onClick={()=>{
                                setShowAdd(true)
                                setShowTable(false)
                            }}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table> : ''}
        
        {showAdd===false ? '' : <CreditcardAdd setShowAdd={setShowAdd} setShowTable={setShowTable} creditDat={creditData} setCreditData={setCreditData} getCreditData={getCreditData} setLocalCredit={setLocalCredit} getCreditDataAgain={getCreditDataAgain} cardId={cardId} setCardId={setCardId} cdData={cdData} 
        setCdData={setCdData}

        />}
        
        
    </>)
}
export default Creditcard;