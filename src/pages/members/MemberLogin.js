import React, { useState } from "react";

import Login from './components/Login.js'
import MemberModal from './components/MemberModal.js'

import './../members/tysu.scss'
import './../members/members.css'

function MemberLogin(props){
    const {auth,setAuth}=props

    return (<>
        <div className="tysu_contain">
        <Login auth={auth} setAuth={setAuth}/>
        
        
        </div>
    </>)
}

export default MemberLogin