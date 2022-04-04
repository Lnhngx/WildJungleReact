import React, { useEffect, useState } from 'react';
import Config from '../Config';

function ConvenienceStoreAdd(){

    const [cityData,setCityData]=useState([]);
    const [citySelect,setCitySelect]=useState('01');
    const [cityName,setCityName]=useState('台北市');

    const [areaSelect,setAreaSelect]=useState([]);
    const [areaName,setAreaName]=useState('松山區');

    const [storeData,setStoreData]=useState([]);
    const [storeName,setStoreName]=useState('');

    
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
                // console.log(obj.result);
                setStoreData(obj.result);
                
            })
        }
        get711StoreData();
  
    },[areaName])

    return(<>
    <table className='tysu_table'>
        <tbody>
            <tr className="tysu_tr tysu_last" >
                <th></th>
                <td className="tysu_addressTitle" style={{padding:"0 15px"}}>
                    <label htmlFor="tysu_address">7-11 取貨門市<br /><span className="tysu_titleSpan">convenience store</span></label>
                </td>
                <td>
                    <select id="tysu_address" className="tysu_input city"
                    value={citySelect}
                    onChange={(e)=>{
                        console.log(e.target.value)
                        setCitySelect(e.target.value);
                        let n=cityData.filter((v,i)=>{
                            return v.areaID===e.target.value
                        })
                        if(n.length!==0){
                            console.log(n)
                            setCityName(n[0].area)
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
                    <select id="tysu_address" className="tysu_input area"
                        value={areaName}
                        onChange={(e)=>{
                            // console.log(cityName);
                            console.log(e.target.value);
                            setAreaName(e.target.value);
                            

                        }}
                     >
                        {areaSelect.map((v,i)=>{
                            return(<React.Fragment key={i}>
                                    <option value={v}>{v}</option>
                                </React.Fragment>)
                        })}
                    </select>
                    <select id="tysu_address" className="tysu_input store"
                        value={storeName}
                        onChange={(e)=>{
                            setStoreName(e.target.value)
                        }} >
                        {storeData.map((v,i)=>{
                            return(<React.Fragment key={i}>
                                    <option value={v.storeName+'('+v.storeAddress+')'}>{v.storeName+'店('+v.storeAddress+')'}</option>
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
    <div className="tysu_btnCenter">
        <button id="tysu_addBtn" className="tysu_addBtn" onClick={(e)=>{
            e.preventDefault()
            const save711=async()=>{
                await fetch(Config.TYSU_711_Add,{
                    method: 'POST',
                    headers: {
                        "Authorization": 'Bearer '+localStorage.getItem('admin_token'), 
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "city":cityName,
                        "area":areaName,
                        "store":storeName
                    })
                }).then(r=>r.json()).then(obj=>{
                    console.log(obj)
                })
            }
            save711()

        }}>
            儲 存
        </button>
    </div>
    </>)
    
}
export default ConvenienceStoreAdd;