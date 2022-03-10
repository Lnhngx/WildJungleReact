import React from 'react';

function Creditcard(){
    return(<>
        <table  className="tysu_table">
            <tbody>
                <tr>
                    <td>
                        <div className="tysu_creditGroup">
                            <div className="tysu_creditDelete">
                                <i className="fas fa-times"></i>
                            </div>
                            <img className="tysu_creditImg" src="" alt="" />
                            <div className="tysu_Bank">中國信託</div>
                            <div className="tysu_creditNum">
                                <div>****&nbsp;-&nbsp;</div>
                                <div>****&nbsp;-&nbsp;</div>
                                <div>****&nbsp;-&nbsp;</div>
                                <div><input type="text" id="tysu_creditCard" className="tysu_input tysu_creditCard" /></div>
                            </div>
                            <div className="tysu_creditEdit">
                                <i className="fas fa-edit"></i>
                            </div>
                        </div>
                        <div >
                            <button id="tysu_addBtn" className="tysu_addBtn">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>)
}
export default Creditcard;