import React, { useEffect, useState } from 'react';
import Config from '../Config';

function ConvenienceStore(){

    const [cityData,setCityData]=useState([]);
    const [citySelect,setCitySelect]=useState('01');
    const [cityName,setCityName]=useState('台北市');

    const [areaSelect,setAreaSelect]=useState([]);
    const [areaName,setAreaName]=useState('');



    
    useEffect(()=>{
        const get711CityData=async()=>{
            await fetch(Config.TYSU_CITY,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(r=>r.json()).then(obj=>{
                console.log(obj)
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
                setAreaName(obj.result[0])
                console.log(obj.result)
                setAreaSelect(obj.result)
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
                console.log(obj.result)
                
            })
        }
        get711StoreData();
        
        
    },[areaSelect])

    return(<>
    <table className='tysu_table'>
        <tbody>
            <tr className="tysu_tr" >
                <th>
                    <div className="tysu_creditDelete">
                        <i className="fas fa-times"></i>
                    </div>
                </th>
                <td className="tysu_addressTitle">
                    <label htmlFor="tysu_address">取貨門市1<br /><span className="tysu_titleSpan">convenience store1</span></label>
                </td>
                <td>
                    <select id="tysu_address" className="tysu_input"
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
                    <select id="tysu_address" className="tysu_input"
                        value={areaName}
                        onChange={(e)=>{
                            // console.log(cityName);
                            // console.log(e.target.value);
                            setAreaName(e.target.value);
                        }}
                     >
                        {areaSelect.map((v,i)=>{
                            return(<React.Fragment key={i}>
                                    <option value={v}>{v}</option>
                                </React.Fragment>)
                        })}
                    </select>
                    <select id="tysu_address" className="tysu_input" ></select>
                    <div id="tysu_addressHelp"></div>
                </td>
               
            </tr>
            {/* <tr className="tysu_tr tysu_last">
                <th>
                    <div className="tysu_creditDelete">
                        <i className="fas fa-times"></i>
                    </div>
                </th>
                <td className="tysu_addressTitle">

                    <label htmlFor="tysu_address">取貨門市2<br /><span className="tysu_titleSpan">convenience store2</span></label>
                </td>
                <td>
                    <input type="text" id="tysu_address" className="tysu_input" />
                    <div id="tysu_addressHelp"></div>
                </td>
            </tr> */}
        </tbody>
    </table>
    <div className="tysu_btnCenter">
        <button id="tysu_addBtn" className="tysu_addBtn">
            <i className="fas fa-plus"></i>
        </button>
    </div>
    </>)
    
}
export default ConvenienceStore;