import React,{useEffect,useState} from 'react';

import CreditcardAdd from './CreditcardAdd';
import Config from '../Config';

function Creditcard(props){
    const {account,sidData,setSidData,creditData,setCreditData,numCard,setNumCard,getCreditData}=props
    
    const [showAdd,setShowAdd]=useState(false);
    const [showTable,setShowTable]=useState(true);

    let nd=numCard.slice(-4);
    // let creditDataTF=creditData;
    const [creditDataTF,setcreditDataTF]=useState(creditData);
    useEffect(() => {
        getCreditData()
    },[]);


    return(<>
        {showTable===true ? <table  className="tysu_table">
            <tbody>
                <tr>
                    <td>
                        {creditDataTF.success===true ? (<div className="tysu_creditGroup">
                            <div className="tysu_creditDelete">
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
                                        defaultValue={nd}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="tysu_creditEdit">
                                <i className="fas fa-edit"></i>
                            </div>
                        </div>) : <div className="tysu_creditT">{creditDataTF.error || '尚未設定' }</div>
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
        
        {showAdd===false ? '' : <CreditcardAdd sidData={sidData} setShowAdd={setShowAdd} setShowTable={setShowTable} setCreditData={setCreditData} getCreditData={getCreditData} />}
        
    </>)
}
export default Creditcard;