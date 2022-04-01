import React, { useState } from 'react';
import Cards from 'react-credit-cards';
 
// import './components/members/styles.scss'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData,
  } from './utils';


import 'react-credit-cards/es/styles-compiled.css';
import EditModal from './EditModal'
import Config from '../Config';

export default class CreditcardEdit extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();

    }
    state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      issuer: '',
      focused: '',
      formData: null,
      editCardModalText:'',
      editModalShow:false,
    };

    handleModalText=({ target })=>{
        this.setState({
            editCardModalText: '',
          });
    }
    handleModal=({ target })=>{
        this.setState({
            editModalShow: false,
          });
    }

    handleCallback = ({ issuer }, isValid) => {
      if (isValid) {
        this.setState({ issuer });
      }
    };
  
    handleInputFocus = ({ target }) => {
      this.setState({
        focused: target.name,
      });
    };
  
    handleInputChange = ({ target }) => {
      if (target.name === 'number') {
        target.value = formatCreditCardNumber(target.value);
      } else if (target.name === 'expiry') {
        target.value = formatExpirationDate(target.value);
      } else if (target.name === 'cvc') {
        target.value = formatCVC(target.value);
      }
  
      this.setState({ [target.name]: target.value });
    };
  
    handleSubmitEdit=async(e)=>{
        e.preventDefault();
        const { issuer } = this.state;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
            acc[d.name] = d.value;
            return acc;
            }, {});

        this.setState({ formData });
            //   this.form.reset();
        console.log(formData)
        await fetch(Config.TYSU_CREDITCARD_EDIT+this.props.cardId.credit_sid,{
            method:'POST',
            headers:{
                // "Authorization": 'Bearer '+localStorage.getItem('admin_token'), 
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData),
        }).then(r=>r.json()).then(obj=>{
            console.log(obj)
            if(obj.success){
                
                let newCreditArr=this.props.creditData.filter((v,i)=>{
                    if(v.credit_sid!==this.props.cardId.credit_sid){
                        return v
                    }
                })
                let newO={credit_sid:this.props.cardId.credit_sid,credit_num:this.state.number,credit_name:this.state.name,credit_date:this.state.expiry,credit_code:this.state.cvc}
                console.log('props:',newCreditArr)
                let n=newCreditArr.push(newO)
                this.props.setCreditData(n)
                // this.props.setCdData(n)
                
                console.log(this.props.creditData)
                this.setState({editCardModalText:obj.error || '修改成功'});
                this.setState({editModalShow:true})
            }else{
                this.setState({editCardModalText:obj.error || '沒有變更'});
                this.setState({editModalShow:true})
            }
        })
    }

  
    render() {
        const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
    
        return (
            <div key="Payment">
        <div className="App-payment">
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
                callback={this.handleCallback}
            />
        </div>
        <form ref={c => (this.form = c)} id="tysu_form" style={{maxWidth:"830px",margin:"0 auto"}} onSubmit={this.handleSubmitEdit}>
            <table>
                <tbody>
                    <tr className="tysu_tr">
                        <th>
                            <label htmlFor="tysu_creditCard">信用卡卡號<br />
                                <span className="tysu_titleSpan">Credit Card Number</span></label>
                        </th>
                        <td>
                            <div className="form-group">
                            <input
                                type="tel"
                                name="number"
                                id="tysu_creditCard"
                                className="form-control tysu_input tysu_creditInput"
                                placeholder="Card Number"
                                pattern="[\d| ]{16,22}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                defaultValue={this.props.cardId.credit_num}
                            />
                            </div>
                        </td>
                    </tr>
                    <tr className="tysu_tr">
                        <th>
                            <label htmlFor="tysu_Cardname">持卡人姓名<br />
                                <span className="tysu_titleSpan">Cardholder Name</span></label>
                        </th>
                        <td>
                            <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="tysu_Cardname"
                                className="form-control tysu_input"
                                placeholder="Name"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                defaultValue={this.props.cardId.credit_name}
                            />
                            </div>
                        </td>
                    </tr>
                    <tr className="tysu_tr">
                        <th>
                            <label htmlFor="tysu_expireDate">有效日期<br /><span className="tysu_titleSpan">Card Valid Thru</span></label>
                        </th>
                        <td className="tysu_expireDateList">
                            <div className="row">
                                <div className="col-12">
                                    <input
                                    type="tel"
                                    name="expiry"
                                    id="tysu_expireDate"
                                    className="form-control tysu_input tysu_code"
                                    placeholder="Valid Thru"
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    defaultValue={this.props.cardId.credit_date}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr  className="tysu_tr tysu_last">
                        <th>
                            <label htmlFor="tysu_code">檢查碼<br /><span className="tysu_titleSpan">Card Vaildation Code</span></label>
                        </th>
                        <td className="tysu_expireDateList">
                            <div className="row">
                                <div className="col-12">
                                    <input
                                    type="tel"
                                    name="cvc"
                                    id="tysu_code"
                                    className="form-control tysu_input tysu_code"
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    defaultValue={this.props.cardId.credit_code}
                                    />
                                </div>
                            </div>
                            <input type="hidden" name="issuer" value={issuer} />
                        </td>
                    </tr> 
                </tbody>
            </table>
            <div className="tysu_btnGroup" style={{left:"5rem"}}>
                <button type='submit' id="tysu_editBtn" className="tysu_editBtn" >儲 存</button>
                <button id="tysu_cancelBtn" className="tysu_cancelBtn" onClick={
                    // console.log(this.render()._self)
                    // this.props.setShowTable(true);
                    // this.props.setShowAdd(false);
                    this.handleModal
                }>取 消</button>
            </div>
            {<EditModal editModalShow={this.state.editModalShow}
            editCardModalText={this.state.editCardModalText} 
            setEditModalShow={this.handleModal}
            setShowAdd={this.props.setShowAdd} setShowTable={this.props.setShowTable}
            setEditShow={this.props.setEditShow}
            />}
        </form>                
    </div>
)
      }
    }