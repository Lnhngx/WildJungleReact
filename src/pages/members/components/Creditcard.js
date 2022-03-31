import React,{useEffect,useState} from 'react';

import CreditcardAdd from './CreditcardAdd';
import Config from '../Config';

function Creditcard(props){
    const {getCreditData,getCreditDataAgain,creditData,setCreditData,localCredit,setLocalCredit}=props
    
    const [showAdd,setShowAdd]=useState(false);
    const [showTable,setShowTable]=useState(true);

    const [cdData,setCdData]=useState([]);
    
    

    useEffect(()=>{
        if(Object.keys(creditData).length!==0){
            setCdData(creditData);
        }
        
    },[creditData])
    
      
    
    
    return(<>
        {showTable===true ? <table  className="tysu_table">
            <tbody>
                <tr>
                    <td>
                        {creditData.length!==0 && creditData.map((v,i)=>{
                           return <div key={'creditcard'+v.credit_sid} className= {v!==creditData.slice(-1)[0] ? "tysu_creditGroup tysu_tr" : "tysu_creditGroup"}>
                                <div className="tysu_creditDelete" name={'delete'+v.credit_sid} >
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
                                <div className="tysu_creditEdit"  name={'edit'+v.credit_sid}>
                                    <i className="fas fa-edit"></i>
                                </div>
                            </div>
                        }) }
                        {!creditData.length && <div className="tysu_creditT">{ '尚未設定' }</div>
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
        
        {showAdd===false ? '' : <CreditcardAdd setShowAdd={setShowAdd} setShowTable={setShowTable} creditDat={creditData} setCreditData={setCreditData} getCreditData={getCreditData} setLocalCredit={setLocalCredit} getCreditDataAgain={getCreditDataAgain}/>}
        
    </>)
}
export default Creditcard;