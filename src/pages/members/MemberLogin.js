import React from "react";

import Login from './components/Login.js'

import './../members/tysu.css'
import './../members/members.css'

function MemberLogin(){
    return (<>
        <div className="tysu_contain">
        <Login />
        </div>
    </>)
}

export default MemberLogin