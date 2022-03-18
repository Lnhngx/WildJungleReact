
import React,{useState} from "react";

function Signup(){
const [fields,setFields]=useState({
    email:'',
    name:'',
    gender:'',
    password:'',
    confirmPassword:'',
});
const handleFieldChange=(e)=>{
    // 1.拷貝 2.處理
    // const newData={...fields,[e.target.name]:e.target.value};
    // 3.設定回原狀態
    // setFields(newData);

    const name=e.target.name;
    const value=e.target.value;
    const type=e.target.type;

    let newValue=value;
    console.log(value);
}

const birthdayText=['年','月','日'];
const keys=['year','month','date'];
const [birthday,setBirthday]=useState({
    year:'',
    month:'',
    date:''
});
const getBirth=(e)=>{
    const newBirth={...birthday,[e.target.name]: e.target.value};
    setBirthday(newBirth);
}

const handleSubmit=(e)=>{
    e.preventDefault();
}
// 年
let years=[];
for(let i=1922;i<=2022;i++){
    years.push(i)
}
// 月
let months=[];
for(let i=1;i<=12;i++){
    months.push(i);
}
// 日
let dates=[];
for(let i=1;i<=31;i++){
    dates.push(i);
}




    return(<>
    <h1 className="tysu_h1">SIGN&nbsp;&nbsp;&nbsp;&nbsp;UP</h1>
    <form id="tysu_form" onSubmit={handleSubmit}>
    <table>
        <tbody>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_email">帳號 / 電子郵件<br /><span className="tysu_titleSpan">Email</span></label>
                </th>
                <td>
                    <input type="email" id="tysu_email" className="tysu_input"
                    value={fields.email} 
                    onChange={handleFieldChange} 
                    name="email"
                    />
                    <div id="emailHelp"></div>
                </td>
            </tr>

            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_name">姓名<br /><span className="tysu_titleSpan">Name</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_name" className="tysu_input" 
                    value={fields.name} 
                    onChange={handleFieldChange} 
                    name="name"
                    />
                    <div id="nameHelp"></div>
                </td>
            </tr>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_gender">性別<br /><span className="tysu_titleSpan">Gender</span></label>
                </th>
                <td>
                    <select id="tysu_gender" className="tysu_input" name="gender" value={fields.gender}  onChange={handleFieldChange} >
                    <option value="">請選擇</option>
                    <option value="男">男性</option>
                    <option value="女">女性</option>
                    <option value="未決定">未決定</option>
                    </select>
                    <div id="genderHelp"></div>
                </td>
            </tr>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_birth">生日<br /><span className="tysu_titleSpan">Birthday</span></label>
                </th>
                <td>
                    <input list="yearList" id="year" name="year" className="tysu_input tysu_birth" onChange={getBirth} style={{width:"100px"}}/>
                    <datalist id="yearList">
                    {years.map((v,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <option value={v} />
                            </React.Fragment>
                            )
                    })}
                    </datalist>
                    <input list="monthList" id="month" name="month" className="tysu_input tysu_birth" onChange={getBirth} style={{width:"100px"}}/>
                    <datalist id="monthList">
                    {months.map((v,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <option value={v} />
                            </React.Fragment>
                            )
                    })}
                    </datalist>
                    <input list="dateList" id="date" name="date" className="tysu_input tysu_birth" onChange={getBirth} style={{width:"100px"}}/>
                    <datalist id="dateList">
                    {dates.map((v,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <option value={v} />
                            </React.Fragment>
                            )
                    })}
                    </datalist>
                    <div id="birthHelp"></div>
                </td>
            </tr>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_pass" className="tysu_input" value={fields.password} onChange={handleFieldChange} name="password" />
                    <div id="tysu_passHelp"></div>
                </td>

            </tr>
            <tr className="tysu_tr tysu_last">
                <th>
                    <label htmlFor="tysu_cfPass">再次確認密碼<br /><span className="tysu_titleSpan">Confirm
                            Password</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_cfPass" className="tysu_input" value={fields.confirmPassword}  onChange={handleFieldChange} name="confirmPassword" />
                    <div id="tysu_cfPassHelp"></div>
                </td>

            </tr>
            <tr>
                <th></th>
                <td>
                    <div className="tysu_logHelp">
                        <button id="submit" className="tysu_btn_sign">註 冊</button>
                        
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

</form></>)
}
export default Signup