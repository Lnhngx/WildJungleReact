import React, { useEffect, useState } from 'react';
import Config from '../Config';

function ConvenienceStore(){

    const [cityData,setCityData]=useState([]);
    const [citySelect,setCitySelect]=useState('01');
    const [cityName,setCityName]=useState('');

    const [areaSelect,setAreaSelect]=useState([]);

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
                console.log(obj.result)
                setAreaSelect(obj.result)
            })
        }
        get711AreaData()
    },[citySelect])
    

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
                        setCityName(e.target.innerHTML)
                    }}
                     >
                        {cityData.map((v,i)=>{
                                return(<React.Fragment key={i}>
                                    <option value={v['areaID']}>{v['area']}</option>
                                </React.Fragment>)

                        })}
                    </select>
                    <select id="tysu_address" className="tysu_input" >
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