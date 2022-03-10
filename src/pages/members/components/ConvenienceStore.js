import React from 'react';

function ConvenienceStore(){
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
                    <input type="text" id="tysu_address" className="tysu_input" />
                    <div id="addressHelp"></div>
                </td>
               
            </tr>
            <tr className="tysu_tr tysu_last">
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
                    <div id="addressHelp"></div>
                </td>
            </tr>
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