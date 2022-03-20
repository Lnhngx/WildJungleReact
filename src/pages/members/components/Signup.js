
import React,{useState} from "react";


function Signup(){
    // 欄位狀態
    const [fields,setFields]=useState({
        email:'',
        name:'',
        gender:'',
        birthday:'',
        password:'',
        confirmPassword:'',
    });

    // 錯誤訊息狀態
    const [fieldErrors, setFieldErrors] = useState({
        email:'',
        name:'',
        gender:'',
        birthday:'',
        password:'',
        confirmPassword:'',
    })

    // 輸入欄位
    const handleFieldChange=(e)=>{
        // 1.拷貝 2.處理
        const newData={...fields,[e.target.name]:e.target.value};
        // 3.設定回原狀態
        setFields(newData);
    }

    // 表單有更動時先清空
    const handleFormChange=(e)=>{
        const updateFieldError={...fieldErrors,[e.target.name]:''}
        setFieldErrors(updateFieldError)
    }

    // 填寫錯誤時顯示
    const handleFormInvalid=(e)=>{
        e.preventDefault()
        if(e.target.name.trim()==='email'){
            console.log('是email問題')
            e.target.validationMessage='是email問題'
        }
        const updateFieldError={...fieldErrors,[e.target.name]:e.target.validationMessage}
        
        setFieldErrors(updateFieldError);
    }

// 參考0225/3
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        console.log(formData);
        // if(fields.email==='' || fields.name==='' || fields.password===''||fields.gender===''||fields.birthday===''||fields.password===''||fields.confirmPassword===''){
        //     console.log('no');
        // }
        if(fields.email.trim()==='' || fields.email.length===0){
            setFieldErrors('請輸入');
            console.log('請輸入');
            
        }
        

    }



    return(<>
    <h1 className="tysu_h1">SIGN&nbsp;&nbsp;&nbsp;&nbsp;UP</h1>
    <form id="tysu_form" name="form2"
        onSubmit={handleSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
        >
    <table>
        <tbody>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_email">帳號 / 電子郵件<br /><span className="tysu_titleSpan">Email</span></label>
                </th>
                <td>
                    <input type="email" id="tysu_email" className="tysu_input"
                    value={fields.email}
                    // placeholder="請輸入您正確的email"
                    onChange={handleFieldChange} 
                    name="email"
                    />
                    <div id="emailHelp">{fieldErrors.email}</div>
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
                    <div id="nameHelp">{fieldErrors.name}</div>
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
                    <div id="genderHelp">{fieldErrors.gender}</div>
                </td>
            </tr>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_birth">生日<br /><span className="tysu_titleSpan">Birthday</span></label>
                </th>
                <td>
                    <input id="tysu_birth" type="date" className="tysu_input" value={fields.birthday} name="birthday" onChange={handleFieldChange} />
                    <div id="birthHelp">{fieldErrors.birthday}</div>
                </td>
            </tr>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_pass" className="tysu_input" value={fields.password} onChange={handleFieldChange} name="password" />
                    <div id="tysu_passHelp">{fieldErrors.password}</div>
                </td>

            </tr>
            <tr className="tysu_tr tysu_last">
                <th>
                    <label htmlFor="tysu_cfPass">再次確認密碼<br /><span className="tysu_titleSpan">Confirm
                            Password</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_cfPass" className="tysu_input" value={fields.confirmPassword}  onChange={handleFieldChange} name="confirmPassword" />
                    <div id="tysu_cfPassHelp">{fieldErrors.confirmPassword}</div>
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

</form>
    <div className="tysu_loginBg">
          <img src="./../img/member/leaf_g.svg" alt="" />
    </div>
      </>)
}
export default Signup