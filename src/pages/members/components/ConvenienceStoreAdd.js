import React, { useEffect, useState } from 'react';
import StoreModal from './StoreModal'
import Config from '../Config';

function ConvenienceStoreAdd(props){
    const {showStoreAdd,setShowStoreAdd,user711Data,setUser711Data,user711D,setUser711D}=props;

    const [cityData,setCityData]=useState([]);
    const [citySelect,setCitySelect]=useState('01');
    const [cityName,setCityName]=useState('台北市');

    const [areaSelect,setAreaSelect]=useState([]);
    const [areaName,setAreaName]=useState(areaSelect[0]);

    const [storeData,setStoreData]=useState([]);
    const [storeName,setStoreName]=useState('上弘');
    const [storeaddress,setStoreaddress]=useState('');

    // 先過幾秒再顯示設定選項
    const [showTable,setShowTable]=useState(false);
    
    // Modal
    const [show,setShow]=useState(false);
    const [storeModalText,setStoreModalText]=useState('')

    const sid=JSON.parse(localStorage.getItem('admin_account'))
    useEffect(()=>{
        

        const get711CityData=async()=>{
            await fetch(Config.TYSU_CITY,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(r=>r.json()).then(obj=>{
                // console.log(obj)
                setCityData(obj);
            })
        }
        get711CityData()

    },[])

    useEffect(()=>{
        const get711AreaData=async()=>{
            await fetch(Config.TYSU_AREA+citySelect,{
                method:'GET',
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
            }).then(r=>r.json()).then(obj=>{
                // console.log(obj.result)
                setAreaSelect(obj.result)
                setAreaName(obj.result[0])
            })
        }
        get711AreaData();
    },[citySelect])
    
    useEffect(()=>{
        const get711StoreData=async()=>{
            await fetch(Config.TYSU_711_STORE+'?city='+cityName+'&area='+areaName,{
                method:'GET',
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
            }).then(r=>r.json()).then(obj=>{
                
                if(obj.result[0]['storeTown']!==undefined){
                    setStoreData(obj.result);
                    setStoreName(obj.result[0].storeName)
                    setStoreaddress(obj.result[0].storeaddress)
                }
            })
        }
        get711StoreData();
  
    },[areaName])

    return(<>
    {showTable===false && <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>}
    {setTimeout(()=>{
        setShowTable(true)
    },1200)}
    {showTable && <table className='tysu_table'>
        <tbody>
            <tr className="tysu_tr tysu_last" >
                <th></th>
                <td className="tysu_addressTitle" style={{padding:"0 15px"}}>
                    <label htmlFor="tysu_address">7-11 取貨門市<br /><span className="tysu_titleSpan">convenience store</span></label>
                </td>
                <td>
                    <select id="tysu_city" className="tysu_input city"
                    name="city"
                    value={citySelect}
                    onChange={(e)=>{
                        console.log(e.target.name)
                        console.log(e.target.value)
                        setCitySelect(e.target.value);
                        let n=cityData.filter((v,i)=>{
                            return v.areaID===e.target.value
                        })
                        if(n.length!==0){
                            if(e.target.name==='city'){
                                console.log(n);
                                setCityName(n[0].area);
                            }
                            
                        }
                        // setCityName(e.target.innerHTML)
                    }}
                     >
                        {cityData.map((v,i)=>{
                                return(<React.Fragment key={i}>
                                    <option value={v['areaID']}>{v['area']}</option>
                                </React.Fragment>)

                        })}
                    </select>
                    <select id="tysu_area" className="tysu_input area"
                        name='area'
                        value={areaName}
                        onChange={(e)=>{
                            // console.log(cityName);
                            console.log(e.target.value);
                            if(e.target.name==='area'){
                                setAreaName(e.target.value);
                            }

                        }}
                     >
                        {areaSelect.map((v,i)=>{
                            return(<React.Fragment key={i}>
                                    <option value={v}>{v}</option>
                                </React.Fragment>)
                        })}
                    </select>
                    <select id="tysu_store" className="tysu_input store"
                        name='store'
                        value={`${storeData[0].storeName}店 ${storeData[0].storeAddress}`}
                        onChange={(event)=>{
                            // console.log(event.target)
                            if(event.target.name==='store'){
                                console.log(event.target.value)
                                // setStoreName(event.target.value);
                            }
                        }} >
                        {storeData.map((v,i)=>{
                            return(<React.Fragment key={i}>
                                    <option value={`${v.storeName}店 ${v.storeAddress}`}>{v.storeName+'店('+v.storeAddress+')'}</option>
                                </React.Fragment>)
                        })}
                        {/* storeAddress: "台北市松山區復興北路35號"
                            storeCity: "台北市"
                            storeFax: "(02)27402897"
                            storeID: "906209"
                            storeName: "樂得"
                            storeTele: "(02)27401886"
                            storeTown: "松山區" */}
                    </select>
                    <div id="tysu_addressHelp"></div>
                </td>
               
            </tr>
        </tbody>
    </table>
    }
    
    <div className="tysu_btnCenter">
        <button id="tysu_addBtn" className="tysu_addBtn" onClick={(event)=>{
            event.preventDefault()
            if(cityName==='' || areaName==='' || storeName===''){
                console.log('沒有資料')

            }else{
                const save711=async()=>{
                await fetch(Config.TYSU_711_Add,{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "city":cityName,
                        "area":areaName,
                        "store":storeName,
                        // "address":storeaddress,
                        "m_sid":sid['m_sid']
                        })
                    }).then(r=>r.json()).then(obj=>{
                        console.log(obj)
                        if(obj.success){
                            console.log(obj.info);
                            // [{store_sid: 48, store_name: '吉盛店(台北市松山區南京東路五段66巷3弄1號1樓)'}]
                            
                            setUser711D(obj.info);

                            setStoreModalText('新增完成');
                            

                        }else{
                            setStoreModalText(obj.error || '無法新增')
                            
                        }
                        setShow(true);
                    })
                }
                save711()
                // setShowStoreAdd(false)
            }
            
        }}>
            儲 存
        </button>
    </div>
    {show && <StoreModal show={show} setShow={setShow} showTable={showTable} setShowTable={setShowTable} storeModalText={storeModalText} setShowStoreAdd={setShowStoreAdd}/>}
    </>)
    
}
export default ConvenienceStoreAdd;